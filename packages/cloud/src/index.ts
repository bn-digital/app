import { digitalocean, github, harbor, postgresql, vault } from "@bn-digital/pulumi"
import { Config, getStack } from "@pulumi/pulumi"
import { config as readFromEnvFile } from "dotenv"

const config = new Config()
const name = config.name
const environment = getStack()

readFromEnvFile()

const infrastructure = {
  /**
   * Creates a DigitalOcean project with a Spaces bucket, Kubernetes cluster, and DNS domain inside customer's production environment
   */
  production(): void {
    const { region, domain } = config.requireObject<Partial<digitalocean.ProductionConfig>>("digitalocean")
    const bucket = digitalocean.createBucket({ name, region })
    const cluster = digitalocean.createCluster({ name, region })
    const dns = digitalocean.createDomain({ name: domain ?? `${name}.bndigital.ai` })
    digitalocean.createProject({
      name,
      environment,
      resources: [bucket.bucketUrn, cluster.clusterUrn, dns.domainUrn],
    })
  },

  /**
   * Creates container registry & database inside bndigital staging environment
   */
  staging: function (): void {
    const requiredSecrets: { [key: string]: string } = config.requireObject("secrets")
    const requiredVars: { [key: string]: string } = config.requireObject("vars")
    Object.entries(requiredSecrets).forEach(([key, path]) => github.createSecret([key, vault.getSecret(path)]))
    Object.entries(requiredVars).forEach(([key, value]) => github.createVariable([key, value]))
    harbor.createProject({ name })
    postgresql.createDatabase({ name })
  },
}
switch (environment) {
  case "production":
    infrastructure.production()
    break
  case "staging":
    infrastructure.staging()
    break
  default:
    break
}
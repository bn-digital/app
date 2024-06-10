import { join } from "path";

import app, { randomSecret } from "../src/hooks";

export default ({ env }: Strapi.Env): Config.Plugin => {
  return {
    graphql: {
      enabled: true,
      config: {
        endpoint: "/graphql",
        shadowCRUD: true,
        defaultLimit: 10,
        maxLimit: 100,
        subscriptions: false,
        playgroundAlways: !app.env.production,
        generateArtifacts: app.env.development,
        artifacts: {
          schema: join(app.workingDir, "src", "graphql", "schema.graphql"),
          typegen: join(app.workingDir, "src", "types", "generated", "graphql.d.ts"),
        },
        apolloServer: {
          introspection: !app.env.production,
          cache: "bounded",
          persistedQueries: {
            ttl: 3600,
          },
        },
      },
    },
    "users-permissions": {
      enabled: true,
      config: {
        jwtSecret: env("JWT_SECRET", randomSecret("JWT_SECRET")),
      },
    },
    upload: {
      enabled: env("S3_ACCESS_KEY_ID") && env("S3_SECRET_ACCESS_KEY"),
      config: {
        provider: "aws-s3",
        providerOptions: {
          s3Options: {
            //TODO remove warning
            accessKeyId: env("S3_ACCESS_KEY_ID"),
            secretAccessKey: env("S3_SECRET_ACCESS_KEY"),
            endpoint: env("S3_ENDPOINT"),
            params: {
              Bucket: `${env("S3_BUCKET", "bn-dev")}/${app.name}/uploads`,
            },
          },
        },
      },
    },
    email: {
      enabled: env("SMTP_USERNAME") && env("SMTP_PASSWORD"),
      config: {
        provider: "nodemailer",
        providerOptions: {
          host: env("SMTP_HOST", "bndigital.dev"),
          port: env.int("SMTP_PORT", 1025),
          auth: {
            user: env("SMTP_USERNAME"),
            pass: env("SMTP_PASSWORD"),
          },
        },
        settings: {
          defaultFrom: env("SMTP_MAIL_FROM", `no-reply@${app.domain}`),
          defaultReplyTo: env("SMTP_MAIL_TO", `no-reply@${app.domain}`),
        },
      },
    },
  };
};

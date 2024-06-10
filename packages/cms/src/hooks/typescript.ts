import utils from "@strapi/typescript-utils"
import * as path from "path"

import app from "."

function generateTypeDefinitions(strapi: StrapiGlobal["strapi"]): void {
  utils.generators
    .generate({
      strapi,
      rootDir: path.join("src", "types"),
      pwd: app.workingDir,
      artifacts: { contentTypes: true, components: true },
    })
    .then(() => strapi.log.info("[typescript] Type definitions were generated"))
    .catch(strapi.log.error)
}

export { generateTypeDefinitions }

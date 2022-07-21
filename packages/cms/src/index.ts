import { name } from '../config'
import { generateGraphqlSchema, getExtensionService, getSchemaExtension } from './graphql'

export default {
  register({ strapi }: { strapi: Strapi.Strapi }) {
    strapi.log.info(`[strapi] Project name resolved as ${name}`)
    const extensionService = getExtensionService(strapi)
    // Disabling CUD operations for public-facing APIs
    const readOnlyEntities = [
      'api::post.post',
      'api::translation.translation',
      'api::website.website',
      'plugin::menus.menu',
      'plugin::menus.menu-item',
      'plugin::email-designer.email-template',
    ]
    const writeOnlyEntities = ['api::contact.contact']
    readOnlyEntities.forEach(entity => extensionService.shadowCRUD(entity).disableMutations())
    writeOnlyEntities.forEach(entity => extensionService.shadowCRUD(entity).disableQueries())
    // Decorating schema with custom fields, resolvers and extensions
    extensionService.use(getSchemaExtension())
  },

  bootstrap({ strapi }: Global) {
    generateGraphqlSchema(strapi)
  },
}

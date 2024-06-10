import { readOnlyEntities, schemaExtension, writeOnlyEntities } from "./extensions"

function extendSchema(strapi) {
  const extensionService = getExtensionService(strapi)
  // Disabling CRUD operations for public-facing APIs
  readOnlyEntities.forEach(entity => extensionService.shadowCRUD(entity).disableMutations())
  writeOnlyEntities.forEach(entity => extensionService.shadowCRUD(entity).disableQueries())
  // Decorating schema with custom fields, resolvers and extensions
  extensionService.use(schemaExtension)
}

function getExtensionService(strapi) {
  return strapi.plugin("graphql").service("extension")
}

export { extendSchema }

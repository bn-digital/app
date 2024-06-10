export default {
  config: {
    head: {
      favicon: null,
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { releases: false },
  },
  bootstrap(): void {
    console.log()
  },
}

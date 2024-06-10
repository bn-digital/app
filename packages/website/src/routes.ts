/**
 * IMPORTANT!!! this is just helper
 * Changing this file won't affect current routes of the app.
 *
 * To change routes use /app or /pages directory according to the next.js documentation.
 * Don't forget to update routes here after changing them via next.js
 *
 * Feel free to replace this helper with the next.js one in future once it will be available
 */

export const routes = {
  home: '/',
  about: '/about',
} as const;

export type Route = typeof routes[keyof typeof routes];

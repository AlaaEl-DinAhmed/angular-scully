import { ScullyConfig } from '@scullyio/scully';
const { RemoveUnusedCSSPlugin } = require('scully-plugin-remove-unused-css');

export const config: ScullyConfig = {
  projectRoot: './src',
  defaultPostRenderers: [RemoveUnusedCSSPlugin],
  projectName: 'angular-scully',
  outDir: './dist/static',
  routes: {
    '/product/:id': {
      type: 'json',
      id: {
        url: 'https://jsonplaceholder.typicode.com/users',
        property: 'id',
      }
    },
  },
};

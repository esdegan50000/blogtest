import { ScullyConfig } from '@scullyio/scully';
const { SiteClient } = require('datocms-client');
const client = new SiteClient('c35cff7e1808e6e8436fc49d5e47d2');

async function getUnhandledRoutes(): Promise<string[]> {
  let routes: string[] = [];

  const items = await client.items.all();
  items.forEach((item) => {
    routes.push(`/posts/${item.slug}`);
  });

  return routes;
}

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "esdegan",
  outDir: './dist/static',
  routes: {
  },
  extraRoutes: getUnhandledRoutes()
};
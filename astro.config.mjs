import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // v4.16.19

export default defineConfig({
  site: 'https://anasidris.co.in',
  trailingSlash: 'ignore',
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
  ],
  build: {
    format: 'directory',
  },
});

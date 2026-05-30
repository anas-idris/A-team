import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://example.com',
  trailingSlash: 'ignore',
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});

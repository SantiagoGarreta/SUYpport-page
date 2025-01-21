import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://SantiagoGarreta.github.io',
  base: '/SUYpport-page/',
  experimental: {
    viewTransitions: true,
  },
  integrations: [tailwind(), compress()],
});

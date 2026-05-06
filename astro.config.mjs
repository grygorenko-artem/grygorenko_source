import { defineConfig } from 'astro/config';

export default defineConfig({
  devToolbar: { enabled: false },
  site: 'https://grygorenko-artem.github.io',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});

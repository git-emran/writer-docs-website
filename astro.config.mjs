import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import expressiveCode from "astro-expressive-code";

export default defineConfig({
  site: "https://writr.app",
  output: "static",
  integrations: [sitemap(), expressiveCode()],
});
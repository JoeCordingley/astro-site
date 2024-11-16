// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "http://www.joecordingley.com",
  output: "server",
  adapter: cloudflare(),
});


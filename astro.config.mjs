import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import compress from "astro-compress";

import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), prefetch(), astroImageTools, compress()]
});
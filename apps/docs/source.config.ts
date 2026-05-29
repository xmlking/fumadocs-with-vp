import { fileURLToPath, URL } from "node:url";

import { defineConfig, defineDocs } from "fumadocs-mdx/config";

export const docs = defineDocs({
  dir: fileURLToPath(new URL("content/docs", import.meta.url)),
  docs: {
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
});

export default defineConfig();

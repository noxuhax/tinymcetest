import { defineConfig } from "vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      "tinymce-premium/plugins": path.resolve(
        rootDir,
        "node_modules/tinymce-premium/plugins",
      ),
    },
  },
});

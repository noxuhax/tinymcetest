import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [mkcert()],
  server: {
    https: true,
  },
  resolve: {
    alias: {
      "tinymce-premium/plugins": path.resolve(
        rootDir,
        "node_modules/tinymce-premium/plugins",
      ),
    },
  },
});

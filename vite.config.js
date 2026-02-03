import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), mkcert()],
  optimizeDeps: {
    exclude: ["tinymce", "tinymce-premium"],
  },
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

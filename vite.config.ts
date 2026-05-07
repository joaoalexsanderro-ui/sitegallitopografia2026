import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    // Explicitly set the app directory if it's not the default
    // TanStack Start might be looking for 'app' by default
  }
});

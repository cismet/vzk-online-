import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/verkehrszeichenkataster/",
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  define: {
    "process.env.IS_PREACT": JSON.stringify("true"),
  },
});

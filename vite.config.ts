import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    define: {
      __APP_ENV__: process.env.VITE_VERCEL_ENV,
      __NPS_KEY__: process.env.VITE_,
    },
  };
});

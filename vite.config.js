// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from "@tailwindcss/vite";

// export default defineConfig({
//   base: "/Portfolio/caroleatierney/",
//   build: {
//     outDir: "build",
//   },
//   plugins: [
//     react(),
//     tailwindcss()
//   ],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Portfolio/caroleatierney/",
  build: {
    outDir: "build",
  },
  plugins: [react()],
});

// import path from "node:path";
// import { fileURLToPath } from "node:url";
// import react from "@vitejs/plugin-react";
// import { defineConfig } from "vite";
// import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
//
// const dirname =
//   typeof __dirname !== "undefined"
//     ? __dirname
//     : path.dirname(fileURLToPath(import.meta.url));
//
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     lib: {
//       entry: path.resolve(dirname, "src/index.js"),
//       name: "AuthmanNPM",
//       formats: ["es", "cjs"],
//       fileName: (format) => `index.${format}.js`,
//     },
//     rollupOptions: {
//       external: ["react", "react-dom"],
//       output: {
//         globals: {
//           react: "React",
//           "react-dom": "ReactDOM",
//         },
//       },
//     },
//   },
//
//   // ✅ Vitest + Storybook Test Integration
//   test: {
//     projects: [
//       {
//         extends: true,
//         plugins: [
//           storybookTest({
//             configDir: path.join(dirname, ".storybook"),
//           }),
//         ],
//         test: {
//           name: "storybook",
//           browser: {
//             enabled: true,
//             headless: true,
//             provider: "playwright",
//             instances: [{ browser: "chromium" }],
//           },
//           setupFiles: [".storybook/vitest.setup.js"],
//         },
//       },
//     ],
//   },
// });
//


// vite.config.js
// vitest.config.js
import { defineConfig } from "vitest/config";
import path from "path";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";

export default defineConfig({
  plugins: [
    storybookTest({
      configDir: path.join(__dirname, ".storybook"),
    }),
  ],
  test: {
    name: "storybook",
    browser: {
      enabled: true,
      headless: true,
      provider: "playwright",
      instances: [{ browser: "chromium" }],
    },
    setupFiles: [".storybook/vitest.setup.js"],
  },
});

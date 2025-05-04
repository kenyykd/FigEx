import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import json from "@eslint/json";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      vue: pluginVue,
    },
    extends: [
      js.configs.recommended,
      pluginVue.configs["flat/recommended"], // Vue 3 專用 flat config
    ],
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "no-console": "warn",
      quotes: ["error", "single"], // 強制使用單引號
    },
  },
  { files: ["**/*.json"], plugins: { json }, language: "json/json", extends: ["json/recommended"] },
  eslintConfigPrettier,
]);

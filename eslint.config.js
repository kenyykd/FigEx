import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfig([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  {
    languageOptions: {
      parser: vueParser, // 使用 vue-eslint-parser
      parserOptions: {
        parser: '@babel/eslint-parser', // 或你使用的其他 JS 解析器
        ecmaVersion: 2020, // 或更高
        sourceType: 'module',
      },
    },
  },

  
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  skipFormatting,
])

import { defineConfig } from 'eslint/config';
import globals from 'globals';
import { configs as jsConfigs } from '@eslint/js';
import reactConfig from 'eslint-plugin-react/configs/recommended.js';
import jsxAllyConfig from 'eslint-plugin-jsx-a11y/lib/index.js';
import reactHooksConfig from 'eslint-plugin-react-hooks/index.js';

export default defineConfig({
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    jsConfigs.recommended,
    reactConfig,
    jsxAllyConfig,
    reactHooksConfig,
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jsx-a11y',
    'react-hooks',
  ]
});

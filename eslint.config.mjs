import react from "eslint-plugin-react";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends(
    "plugin:react/recommended",
    "eslint-config-love",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
), {
    plugins: {
        react,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.jest,
            ...globals.node,
        },

        ecmaVersion: "latest",
        sourceType: "module",

        parserOptions: {
            project: ["tsconfig.json"],
        },
    },

    rules: {
        '@typescript-eslint/no-floating-promises': ['warn'],
    },
}];
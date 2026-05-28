import love from 'eslint-config-love';
import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';

export default [
  {
    ignores: ['build/**', 'node_modules/**', 'dist/**', '*.config.*']
  },
  {
    ...love,
    files: ['src/**/*.{ts,tsx}'],
    plugins: {
      ...love.plugins,
      prettier: pluginPrettier,
      react: pluginReact
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...love.rules,
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-magic-numbers': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' }
      ]
    }
  },
  prettier
];

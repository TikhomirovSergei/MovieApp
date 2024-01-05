module.exports = {
  root: true,
  ignorePatterns: ['build/**/*'],
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      /*
      // prettier, babel-eslint takes from @react-native-community/eslint-config
      */
      files: ['*.js'],
      env: {
        es6: true,
        node: true
      },
      extends: ['eslint:recommended', 'plugin:prettier/recommended'],
      parser: 'babel-eslint',
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: false
        }
      },
      plugins: ['prettier'],
      rules: {}
    },
    {
      files: ['src/**/*.ts', 'src/**/*.tsx', 'tests/**/*.ts', 'tests/**/*.tsx'],
      extends: '@react-native-community',
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin'],
      rules: {
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'comma-dangle': 'off',
        'react/no-did-mount-set-state': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        'no-dupe-class-members': 'off',
        'no-bitwise': 'off',
        'no-undef': 'off'
      }
    },
    {
      files: ['tests/**/*.ts', 'tests/**/*.tsx'],
      env: {
        jest: true,
        'jest/globals': true
      },
      rules: {
        'react-native/no-inline-styles': 'off'
      }
    }
  ]
};

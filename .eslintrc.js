module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:react-hooks/recommended',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.eslint.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
  ],
  rules: {
    //'import/extensions': [0, { extensions: ['.tsx', '.ts', '.js'] }],
    "arrow-body-style": ['warn', 'always'],
    'import/prefer-default-export': 'off',
    "react/destructuring-assignment": ['off'],
    "jsx-a11y/control-has-associated-label": [0, 'always'],
    "react/destructuring-assignment": [0, 'always'],
    'react/prefer-stateless-function': [0, 'always'],
    'react/button-has-type': [0, 'always']
  },
};

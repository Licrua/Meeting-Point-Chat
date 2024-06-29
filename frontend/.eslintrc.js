module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:functional/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest', // значение должно быть строкой
    sourceType: 'module',
  },
  plugins: ['react', 'functional', 'prettier'],
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'react/prop-types': 'off',
    'no-console': 'off',
    'react/react-in-jsx-scope': 'off',
    'functional/no-conditional-statements': 'off',
    'functional/no-expression-statements': 'off',
    'functional/immutable-data': 'off',
    'functional/functional-parameters': 'off',
    'functional/no-try-statements': 'off',
    'functional/no-throw-statements': 'off',
    'functional/no-return-void': 'off',
    'no-underscore-dangle': ['error', { allow: ['__filename', '__dirname'] }],
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function' },
    ],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'testing-library/no-debug': 0, // добавлены кавычки и закрывающая кавычка
    'prettier/prettier': 'error',
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['state'] },
    ],
  },
};

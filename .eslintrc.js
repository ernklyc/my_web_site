module.exports = {
  extends: 'next/core-web-vitals',
  rules: {
    // Disable the warning about unescaped entities like apostrophes in text
    'react/no-unescaped-entities': 'off',
    // Allow explicit any type in specific cases
    '@typescript-eslint/no-explicit-any': 'warn',
    // Warn about unused variables but don't fail the build
    '@typescript-eslint/no-unused-vars': 'warn'
  }
};

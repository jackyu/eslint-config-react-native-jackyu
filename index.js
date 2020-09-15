module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    // https://github.com/facebook/react-native/blob/master/packages/eslint-config-react-native-community/index.js
    '@react-native-community',
  ],
  // 此項是用來提供外掛的，外掛名稱省略了eslint-plugin-
  plugins: ['react', 'import'],
  //此項是用來指定eslint解析器的，解析器必須符合規則，babel-eslint解析器是對babel解析器的包裝使其與ESLint解析
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    // 設定 script(預設) 或 module，如果程式碼是在 ECMASCRIPT 中的模組
    // sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true,
    }
  },
  settings: {
    'import/resolver': {
      'node': {
        'extensions': [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.d.ts',
          '.android.js',
          '.android.jsx',
          '.android.ts',
          '.android.tsx',
          '.ios.js',
          '.ios.jsx',
          '.ios.ts',
          '.ios.tsx',
          '.web.js',
          '.web.jsx',
          '.web.ts',
          '.web.tsx'
        ],
      },
    },
  },
  /*
   下面這些rules是用來設定從外掛來的規範程式碼的規則，使用必須去掉字首eslint-plugin-
    主要有如下的設定規則，可以設定字串也可以設定數字，兩者效果一致
    'off' -> 0 關閉規則
    'warn' -> 1 開啟警告規則
    'error' -> 2 開啟錯誤規則
    ---
    參考:
    eslint-plugin-react 的規則一覽: https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    常見的.eslintrc.js配置及rules說明: https://www.itread01.com/content/1547145218.html
    https://cloud.tencent.com/developer/chapter/12618
  */
  rules: {
    // 不需要
    // 'space-before-function-paren': 0,  // 函式定義時括號前面要不要有空格
    // 'eol-last': 0,  // 檔案以單一的換行符結束
    // 'no-extra-semi': 0, // 可以多餘的冒號
    // 'semi': 0,  // 語句可以不需要分號結尾
    // 'eqeqeq': 0, // 必須使用全等
    // 'one-var': 0, // 連續宣告
    // 'no-undef': 0, // 可以 有未定義的變數
    'no-console': 0, // 允許出現 console 語句
    'react-native/no-inline-styles': 0, // Detect inline styles in components
    'react-native/no-color-literals': 0, // Detect color literals in styles
    'react-native/no-raw-text': 0, // Detect raw text outside of Text component
    'import/prefer-default-export': 0, // When there is only a single export from a module, prefer using default export over named export.
    'import/named': 0, // Verifies that all named imports are part of the set of named exports in the referenced module.
    'import/namespace': 0, // Enforces names exist at the time they are dereferenced, when imported as a full namespace
    'import/default': 0, // If a default import is requested, this rule will report if there is no default export in the imported module
    'import/no-named-as-default': 0, // Reports use of an exported name as the locally imported name of a default export.
    'import/no-unused-modules': 0, // modules without any exports
    'import/no-deprecated': 0,
    '@typescript-eslint/indent': 0, // This rule extends the base eslint/indent rule. It adds support for TypeScript nodes.
    "@typescript-eslint/explicit-module-boundary-types": 0,

    // 警告
    'import/no-cycle': 1, // Ensures that there is no resolvable path back to this module via its dependencies

    // 錯誤
    'react/jsx-uses-react': 2,
    'react/jsx-filename-extension': [2, { 'extensions': ['.tsx'] }],
    'react/jsx-uses-vars': 2,
    'react-native/no-unused-styles': 2, // Detect unused StyleSheet rules in React components
    'react-native/split-platform-components': 2, // Enforce using platform specific filenames when necessary
    'import/no-extraneous-dependencies': 2, // Forbid the use of extraneous packages
    'import/extensions': ['error', 'never', { 'svg': 'always' }], // Ensure consistent use of file extension within the import path
    'import/no-named-as-default-member': 2, // Reports use of an exported name as a property on the default export.
    'import/no-duplicates': 2, // Reports if a resolved path is imported more than once
    'import/no-useless-path-segments': 2, // Use this rule to prevent unnecessary path segments in import and require statements
    'import/no-anonymous-default-export': 2, // Reports if a module's default export is unnamed.
    'react-hooks/rules-of-hooks': 2, // 檢查 Hook 的規則
    'react-hooks/exhaustive-deps': ['error', { 'additionalHooks': '(useMemoOne)' }], // 檢查 effect 的相依性
    "jest/no-identical-title": 2,
    "jest/valid-expect": 2,
    "@typescript-eslint/ban-ts-comment": 2,
    "@typescript-eslint/no-explicit-any": 2,

    // 程式碼風格
    'no-shadow': 2, // 外部作用域中的變數不能與它所包含的作用域中的變數或引數同名
    'no-shadow-restricted-names': 2, //js 關鍵字和保留字不能作為函式名或者變數名
    'no-undef': 2, //不允許未宣告的變數
    'camelcase': [2, {'properties': 'never'}], // 是否強制駝峰命名規則
    'prefer-destructuring': 1, // 是否強制使用解構
    'eol-last': 2, // 檔案以換行符結束
    'new-cap': [2, {'newIsCap': true, 'capIsNew': false}], // 建構函式名字首字母要大寫
    'no-mixed-spaces-and-tabs': [2, 'smart-tabs'], // 不允許混用tab和空格
    'quotes': [2, 'single', { 'avoidEscape': true }], // 引號風格
    'block-scoped-var': 2, // 塊語句中使用var
    'max-len': [1, { code: 120, ignoreUrls: true, ignoreComments: true }], // 一行最大長度，單位為字元
    'jsx-quotes': [2, 'prefer-double'],
  },
  // 使用到非環境本身的global變數，為了讓ESLint知道沒問題，就可以設定在globals這邊
  // true，表示可以重新指定，false，表示不允許重新指定(readonly)
  globals: {

  }
}
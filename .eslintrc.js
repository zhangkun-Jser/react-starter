module.exports = {
  "env": {
    "node": true,
    "browser": true,
    "es6": true,
    "commonjs": true,
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "experimentalObjectRestSpread": true
    }
  },
  "plugins": [
    "react",
    "react-hooks"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    // 推荐规则 0="off", 1="warn", 2="error"
    "no-compare-neg-zero": 2,
    "no-cond-assign": 2,
    "no-console": 0,// 不采用 构建时自己去除
    "no-constant-condition": 2,// 采用
    "no-control-regex": 2,// 采用
    "no-debugger": 0,// node端采用，web端不采用
    "no-dupe-args": 2, // 采用
    "no-dupe-keys": 2,// 采用
    "no-duplicate-case": 2,// 采用
    "no-empty": 2, // 采用
    "no-empty-character-class": 2,// 采用
    "no-ex-assign": 2, // 采用
    "no-extra-boolean-cast": 2, // 采用
    "no-extra-parens": 0, // 不采用
    "no-extra-semi": 2,// 采用
    "no-func-assign": 2,// 采用
    "no-inner-declarations": 2, // 采用
    "no-invalid-regexp": 2,// 采用
    "no-irregular-whitespace": 2,// 采用
    "no-obj-calls": 2,// 采用
    "no-regex-spaces": 2,// 采用
    "no-sparse-arrays": 2,// 采用
    "no-unexpected-multiline": 2,// 采用
    "no-unreachable": 2,// 采用
    "no-unsafe-finally": 2,// 采用
    "no-unsafe-negation": 2,// 采用
    "use-isnan": 2,// 采用
    "valid-typeof": 2,// 采用
    "no-case-declarations": 2, // 采用
    "no-empty-pattern": 2,// 采用
    "no-fallthrough": 2,// 采用
    "no-global-assign": 2,// 采用
    "no-octal": 2,// 采用
    "no-redeclare": 2,// 采用
    "no-self-assign": 2,// 采用
    "no-unused-labels": 2,// 采用
    "no-useless-escape": 2,// 采用
    "no-delete-var": 2,// 采用
    "no-undef": 2,// 采用
    "no-unused-vars": 2,// 采用
    "no-mixed-spaces-and-tabs": 2,// 采用
    "constructor-super": 2,// 采用
    "no-class-assign": 2,// 采用
    "no-const-assign": 2,// 采用
    "no-dupe-class-members": 2,// 采用
    "no-new-symbol": 2,// 采用
    "no-this-before-super": 2,// 采用
    "require-yield": 2,// 采用

    // 拓展规则
    "for-direction": 2,// 采用
    "getter-return": 2,// 采用
    "no-await-in-loop": 2,// 采用
    "no-prototype-builtins": 2,// 采用
    "no-template-curly-in-string": 2,// 采用
    // valid-jsdoc 不采用，基础组件强制使用
    "accessor-pairs": 2,// 采用
    "array-callback-return": 2,// 采用
    "block-scoped-var": 2,// 采用
    "class-methods-use-this": 1,//采用（warning，可能报错很多）
    "curly": 1,// 采用 warning
    "default-case": 2,// 采用
    "eqeqeq": 1,// 采用  warning
    "guard-for-in": 2,// 采用
    "no-caller": 2, // 采用
    "no-eval": 2,// 采用
    "no-extend-native": 2,// 采用
    "no-extra-label": 2,// 采用
    "no-floating-decimal": 2,// 采用
    "no-implied-eval": 2,// 采用
    // 临时关闭，有误报
    "no-invalid-this": 0,// 采用
    "no-iterator": 2,// 采用
    "no-labels": 2,// 采用
    "no-lone-blocks": 2,// 采用
    "no-throw-literal": 2,// 采用
    "no-unmodified-loop-condition": 1,// 采用 warning
    "no-useless-concat": 2,// 采用
    "no-useless-return": 2,// 采用
    "radix": 2,// 采用
    "require-await": 2,// 采用

    //关于Node.js或在浏览器中使用CommonJS的相关规则
    "callback-return": 2,// 采用

    // 临时关闭
    "global-require": 0,// 采用
    "handle-callback-err": 2,// 采用
    "no-buffer-constructor": 2,// 采用
    "no-mixed-requires": 2,// 采用
    "no-new-require": 2,// 采用

    // 代码风格
    // 在数组开括号后和闭括号前强制换行
    "array-bracket-newline": 0, // 不采用
    // 禁止或强制在括号内使用空格
    "array-bracket-spacing": [2, "never"], // 采用，禁止在数组括号内出现空格,
    // 强制数组元素间出现换行
    "array-element-newline": 0, // 不采用
    // 禁止或强制在代码块中开括号前和闭括号后有空格
    "block-spacing": [2, "always"], // 采用，要求使用一个或多个空格
    // 强制在代码块中使用一致的大括号风格
    "brace-style": [2, "1tbs", { allowSingleLine: true }], // 强制 one true brace style(一种代码风格，将大括号放在控制语句或声明语句同一行的位置)
    // 可以有例外情况, allowSingleLine允许块的开括号和闭括号在 同一行
    // 要求使用骆驼拼写法 
    "camelcase": [2, { properties: "never" }], // 采用，但不检查属性名称
    // 强制或禁止对注释的第一个字母大写
    "capitalized-comments": 0, // 不采用
    // 要求或禁止使用拖尾逗号
    "comma-dangle": [2, {
      arrays: "always-multiline",
      objects: "always-multiline",
      imports: "always-multiline",
      exports: "always-multiline",
      functions: "always-multiline",
    }], // 采用，当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，要求使用拖尾逗号；当在 同一行时，禁止使用拖尾逗号。
    // 强制在逗号周围使用空格
    "comma-spacing": [2, { before: false, after: true }], // 采用，禁止在逗号前使用空格，要求在逗号后使用一个或多个空格
    // 逗号风格
    "comma-style": [2, "last", { // last 要求逗号放在数组元素、对象属性或变量声明之后，且在同一行
      exceptions: {             // 额外规则 包含与 JavaScript 代码的抽象语法树 (AST) 的节点类型对应的属性：
        ArrayExpression: false, // 忽略数组字面量的逗号风格
        ArrayPattern: false,    // 忽略数组的解构赋值语句中的逗号风格
        ArrowFunctionExpression: false, // 忽略箭头函数表达式的参数中的逗号风格
        CallExpression: false, // 忽略函数调用的参数中的逗号风格
        FunctionDeclaration: false, // 忽略函数声明的参数中的逗号风格
        FunctionExpression: false,  // 忽略函数表达式的参数中的逗号风格
        ImportDeclaration: false,  // 忽略 import 语句中的逗号风格
        ObjectExpression: false, // 忽略对象字面量的逗号风格
        ObjectPattern: false,   // 忽略对象的解构赋值中的逗号风格
        VariableDeclaration: false, // 忽略变量声明的逗号风格
        NewExpression: false, //  忽略构造函数表达式参数中的逗号风格
      }                       // !!! 注意，以上配置全为false，即不忽略
    }], // 采用
    // 禁止或强制在计算属性中使用空格
    "computed-property-spacing": [2, 'never'], // 采用，禁止在计算属性内使用空格
    // 要求一致的 This
    "consistent-this": 0, // 不采用
    // 要求或禁止文件末尾保留一行空行
    "eol-last": [2, 'always'], // 采用 强制使用换行 (LF)
    // 要求或禁止在函数标识符和其调用之间有空格
    "func-call-spacing": [2, 'never'], // 禁止在函数名和开括号之间有空格
    // 要求函数名与赋值给它们的变量名或属性名相匹配
    "func-name-matching": 0, // 不采用
    // 要求或禁止命名的 function 表达式 
    "func-names": 1, // 警告
    // 强制 function 声明或表达式的一致性
    "func-style": 0, // 不采用
    // 强制在函数括号内使用一致的换行
    "function-paren-newline": [2, 'consistent'], // 采用, 要求每个括号使用一致的换行。如果一个括号有换行，另一个括号没有换行，则报错。
    // 禁止使用指定的标识符
    "id-blacklist": 0, // 不采用
    // 强制标识符的最小和最大长度
    "id-length": 0, // 不采用
    // 要求标识符匹配一个指定的正则表达式
    "id-match": 0, // 不采用
    // 强制隐式返回的箭头函数体的位置
    "implicit-arrow-linebreak": [2, 'beside'], // 采用 禁止在箭头函数体之前出现换行
    // 强制使用一致的缩进
    "indent": [2, 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      // MemberExpression: null,
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      },
      CallExpression: {
        arguments: 1
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
      ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
      ignoreComments: false
    }], // 采用 一般2个缩进,特殊语句见配置
    // 强制在 JSX 属性中一致地使用双引号或单引号
    "jsx-quotes": 0, // 不采用
    // 强制在对象字面量的属性中键和值之间使用一致的间距
    "key-spacing": [2, { beforeColon: false, afterColon: true }], // 采用， 禁止在对象字面量的键和冒号之间存在空格，要求在对象字面量的冒号和值之间存在至少有一个空格
    // 强制在关键字前后使用一致的空格
    "keyword-spacing": [2, {
      before: true, // 要求在关键字之前至少有一个空格
      after: true, // 要求在关键字之后至少有一个空格
      overrides: { // 允许覆盖指定的关键字的空格风格
        return: { after: true },
        throw: { after: true },
        case: { after: true }
      }
    }], // 采用
    // 强制行注释的位置
    "line-comment-position": 0, // 不采用
    // 强制使用一致的换行风格
    "linebreak-style": [2, 'unix'], // 采用，强制使用 Unix 换行符： \n。
    // 要求在注释周围有空行
    "lines-around-comment": 0, //不采用
    // 要求或禁止类成员之间出现空行
    "lines-between-class-members": [2, 'always', { exceptAfterSingleLine: false }],// 采用
    // 强制可嵌套的块的最大深度
    "max-depth": 0, // 不采用
    // 强制一行的最大长度
    "max-len": [2, 100, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],// 采用，最长100，tab字符宽度为2
    // 强制最大行数
    "max-lines": 0, // 不采用
    // 强制回调函数最大嵌套深度
    "max-nested-callbacks": 0, // 不采用
    // 强制函数定义中最多允许的参数数量
    "max-params": 0, //不采用
    // 强制函数块最多允许的的语句数量
    "max-statements": 0, // 不采用
    // 强制每一行中所允许的最大语句数量
    "max-statements-per-line": 0, // 不采用
    // 强制对多行注释使用特定风格
    "multiline-comment-style": 0, // 不采用
    // 要求或禁止在三元操作数中间换行
    "multiline-ternary": 0, // 不采用
    // 要求构造函数首字母大写
    "new-cap": [2, {
      newIsCap: true, // 要求调用 new 操作符时有首字母大小的函数
      newIsCapExceptions: [],
      capIsNew: false, // 要求调用首字母大写的函数时有 new 操作符
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'], // 允许调用指定的首字母大写的函数时没有 new 操作符
    }], // 采用
    // 要求调用无参构造函数时有圆括号
    "new-parens": 2, // 采用
    // 要求方法链中每个调用都有一个换行符
    "newline-per-chained-call": [2, { ignoreChainWithDepth: 4 }], // 允许在同一行成链的深度为4
    // 禁用 Array 构造函数
    "no-array-constructor": 2, // 采用
    // 禁用按位运算符
    "no-bitwise": 2, // 采用
    // 禁用 continue 语句
    "no-continue": 2, // 采用
    // 禁止在代码后使用内联注释
    "no-inline-comments": 0, // 不采用
    // 禁止 if 作为唯一的语句出现在 else 语句中
    "no-lonely-if": 2, // 采用
    // 禁止混合使用不同的操作符
    "no-mixed-operators": [2, {
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['**', '+'],
        ['**', '-'],
        ['**', '*'],
        ['**', '/'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: false
    }], // 采用
    // 禁止连续赋值
    "no-multi-assign": 2, // 采用
    // 禁止出现多行空行
    "no-multiple-empty-lines": [2, { max: 2, maxEOF: 0 }], // 采用
    // 禁用否定的表达式
    "no-negated-condition": 0, // 不采用
    // 禁用嵌套的三元表达式
    "no-nested-ternary": 2, // 采用
    // 禁用 Object 的构造函数
    "no-new-object": 2, // 采用
    // 禁用一元操作符 ++ 和 --
    // 临时关闭
    "no-plusplus": 0, // 采用
    // 禁用特定的语法
    "no-restricted-syntax": [
      2,
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ], // 采用
    // 禁用 tab
    "no-tabs": 2, // 采用
    // 禁用三元操作符
    "no-ternary": 0, //不采用
    // 禁用行尾空格
    "no-trailing-spaces": [2, {
      skipBlankLines: false,
      ignoreComments: false,
    }], // 采用
    // 禁止标识符中有悬空下划线（临时关闭）
    /* "no-underscore-dangle": [2, {
      allow: [],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: false,
    }], */ // 采用
    // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    "no-unneeded-ternary": [2, { defaultAssignment: false }],
    // 禁止属性前有空白
    "no-whitespace-before-property": 2, //采用
    // 强制单个语句的位置
    "nonblock-statement-body-position": [2, 'beside', { overrides: {} }], // 采用
    // 强制大括号内换行符的一致性
    "object-curly-newline": [2, {
      ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    }],// 采用
    // 强制在大括号中使用一致的空格
    "object-curly-spacing": [2, 'always'], // 采用
    // 强制将对象的属性放在不同的行上
    "object-property-newline": [2, {
      allowAllPropertiesOnSameLine: true,
    }],
    // 强制函数中的变量要么一起声明要么分开声明
    "one-var": [2, 'never'], // 采用, 要求每个作用域有多个变量声明
    // 要求或禁止在变量声明周围换行
    "one-var-declaration-per-line": [2, 'always'], // 采用，强制每个变量声明都换行
    // 要求或禁止在可能的情况下使用简化的赋值操作符
    "operator-assignment": [2, 'always'], //采用，要求尽可能地简化赋值操作
    // 强制操作符使用一致的换行符
    "operator-linebreak": [2, 'before', { overrides: { '=': 'none' } }], // 采用, 要求把换行符放在操作符前面
    // 要求或禁止块内填充
    "padded-blocks": [2, { blocks: 'never', classes: 'never', switches: 'never' }], // 采用
    // 要求或禁止在语句间填充空行
    "padding-line-between-statements": 0, // 不采用
    // 要求对象字面量属性名称用引号括起来
    "quote-props": [2, 'as-needed', { keywords: false, unnecessary: true, numbers: false }], //采用
    // 强制使用一致的反勾号、双引号或单引号
    "quotes": [2, 'single', { avoidEscape: true }], // 采用
    // 要求使用 JSDoc 注释
    "require-jsdoc": 0, // 不采用
    // 要求或禁止使用分号代替 ASI
    "semi": [2, 'always'], // 采用,要求在语句末尾使用分号
    // 强制分号之前和之后使用一致的空格
    "semi-spacing": ['error', { before: false, after: true }], // 采用
    // 强制分号的位置
    "semi-style": [2, 'last'], // 采用，强制分号出现在句子末尾。
    // 要求对象属性按序排列
    "sort-keys": 0, // 不采用
    // 要求同一个声明块中的变量按顺序排列
    "sort-vars": 0, // 不采用
    // 强制在块之前使用一致的空格
    "space-before-blocks": 2, // 采用
    // 强制在 function的左括号之前使用一致的空格
    "space-before-function-paren": [2, {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }], // 采用
    // 强制在圆括号内使用一致的空格
    "space-in-parens": [2, 'never'], // 采用，强制圆括号内没有空格
    // 要求操作符周围有空格
    "space-infix-ops": 2, // 采用
    // 强制在一元操作符前后使用一致的空格
    "space-unary-ops": [2, {
      words: true,
      nonwords: false,
      overrides: {
      },
    }], // 采用
    // 强制在注释中 // 或 /* 使用一致的空格
    "spaced-comment": [2, 'always', {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!'], // space here to support sprockets directives
      },
      block: {
        exceptions: ['-', '+'],
        markers: ['=', '!'], // space here to support sprockets directives
        balanced: true,
      }
    }], // 采用
    // 强制在 switch 的冒号左右有空格
    "switch-colon-spacing": [2, { after: true, before: false }], // 采用
    // 要求或禁止在模板标记和它们的字面量之间有空格
    "template-tag-spacing": [2, 'never'], // 禁止在一个标记的函数和它的模板字面量之间有空格
    // 要求或禁止 Unicode 字节顺序标记 (BOM)
    "unicode-bom": [2, 'never'], // 采用
    // 要求正则表达式被括号括起来
    "wrap-regex": 0, // 不采用


    // react相关配置
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
    'react/display-name': ['off', { ignoreTranspilerName: false }],

    // Forbid certain propTypes (any, array, object)
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/forbid-prop-types.md
    'react/forbid-prop-types': ['error', {
      forbid: ['any', 'array', 'object'],
      checkContextTypes: true,
      checkChildContextTypes: true,
    }],

    // Forbid certain props on DOM Nodes
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/forbid-dom-props.md
    'react/forbid-dom-props': ['off', { forbid: [] }],

    // Enforce boolean attributes notation in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    'react/jsx-boolean-value': ['error', 'never', { always: [] }],

    // Validate closing bracket location in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],

    // Validate closing tag location in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
    'react/jsx-closing-tag-location': 'error',

    // Enforce or disallow spaces inside of curly braces in JSX attributes
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
    'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],

    // Enforce event handler naming conventions in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
    'react/jsx-handler-names': ['off', {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
    }],

    // Validate props indentation in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
    'react/jsx-indent-props': ['error', 2],

    // Validate JSX has key prop when in array or iterator
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    'react/jsx-key': 'off',

    // Limit maximum of props on a single line in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],

    // Prevent usage of .bind() in JSX props
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    'react/jsx-no-bind': ['error', {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowBind: false,
    }],

    // Prevent duplicate props in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],

    // Prevent usage of unwrapped JSX strings
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
    'react/jsx-no-literals': ['off', { noStrings: true }],

    // Disallow undeclared variables in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    'react/jsx-no-undef': 'error',

    // Enforce PascalCase for user-defined JSX components
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    'react/jsx-pascal-case': ['error', {
      allowAllCaps: true,
      ignore: [],
    }],

    // Enforce propTypes declarations alphabetical sorting
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
    'react/sort-prop-types': ['off', {
      ignoreCase: true,
      callbacksLast: false,
      requiredFirst: false,
      sortShapeProp: true,
    }],

    // Deprecated in favor of react/jsx-sort-props
    'react/jsx-sort-prop-types': 'off',

    // Enforce props alphabetical sorting
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    'react/jsx-sort-props': ['off', {
      ignoreCase: true,
      callbacksLast: false,
      shorthandFirst: false,
      shorthandLast: false,
      noSortAlphabetically: false,
      reservedFirst: true,
    }],

    // Enforce defaultProps declarations alphabetical sorting
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-sort-default-props.md
    'react/jsx-sort-default-props': ['off', {
      ignoreCase: true,
    }],

    // Prevent React to be incorrectly marked as unused
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    'react/jsx-uses-react': ['error'],

    // Prevent variables used in JSX to be incorrectly marked as unused
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    'react/jsx-uses-vars': 'error',

    // Prevent usage of dangerous JSX properties
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
    'react/no-danger': 'warn',

    // Prevent usage of deprecated methods
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
    'react/no-deprecated': ['error'],

    // Prevent usage of setState in componentDidMount
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
    // this is necessary for server-rendering
    'react/no-did-mount-set-state': 'off',

    // Prevent usage of setState in componentDidUpdate
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
    'react/no-did-update-set-state': 'error',

    // Prevent usage of setState in componentWillUpdate
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
    'react/no-will-update-set-state': 'error',

    // Prevent direct mutation of this.state
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    'react/no-direct-mutation-state': 'off',

    // Prevent usage of isMounted
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
    'react/no-is-mounted': 'error',

    // Prevent multiple component definition per file
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
    'react/no-multi-comp': ['error', { ignoreStateless: true }],

    // Prevent usage of setState
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
    'react/no-set-state': 'off',

    // Prevent using string references
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
    'react/no-string-refs': 'error',

    // Prevent usage of unknown DOM property
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    'react/no-unknown-property': 'error',

    // Require ES6 class declarations over React.createClass
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
    'react/prefer-es6-class': ['error', 'always'],

    // Require stateless functions when not using lifecycle methods, setState or ref
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],

    // Prevent missing props validation in a React component definition
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': ['error', {
      ignore: [],
      customValidators: [],
      skipUndeclared: false
    }],

    // Prevent missing React when using JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    'react/react-in-jsx-scope': 'error',

    // Require render() methods to return something
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
    'react/require-render-return': 'error',

    // Prevent extra closing tags for components without children
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    'react/self-closing-comp': 'error',

    // Enforce component methods order
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/sort-comp.md
    'react/sort-comp': ['error', {
      order: [
        'static-methods',
        'instance-variables',
        'lifecycle',
        '/^on.+$/',
        'getters',
        'setters',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'instance-methods',
        'everything-else',
        'rendering',
      ],
      groups: {
        lifecycle: [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'getInitialState',
          'state',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
        ],
        rendering: [
          '/^render.+$/',
          'render'
        ],
      },
    }],

    // Prevent missing parentheses around multilines JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-wrap-multilines.md
    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
    }],

    // 当元素为多行时，要求JSX元素中的第一个属性位于新行上。
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
    'react/jsx-first-prop-new-line': [2, 'multiline-multiprop'], // 采用，如果JSX标签占用多个行并且有多个属性，则第一个属性应该总是放置在一个新行上。这是默认值。

    // 在JSX的等号两侧是否强制留有空格
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
    'react/jsx-equals-spacing': [2, 'never'], // 采用，等号周围的不允许空格

    // 强制jsx的缩进风格
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
    'react/jsx-indent': [2, 2], // 采用，两个空格作为缩进

    // 不允许不安全的target='_blank'用法, 具体见连接说明
    // https://github.com/yannickcr/eslint-plugin-react/blob/ac102885765be5ff37847a871f239c6703e1c7cc/docs/rules/jsx-no-target-blank.md
    'react/jsx-no-target-blank': [2, { enforceDynamicLinks: 'always' }], // 采用，如果是动态链接则不强制

    // 只有.jsx文件允许写JSX语法
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': [2, { extensions: ['.jsx'] }],// 采用

    // 防止JS注释意外的作为文本注入到JSX中
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
    'react/jsx-no-comment-textnodes': 2, // 采用，jsx的注释问题

    // 不允许使用react或者reactdom的render方法的返回值
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
    'react/no-render-return-value': 2, // 采用，建议采用ref

    // 要求有shouldComponentUpdate方法, 或者采用PureRenderMixin
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
    'react/require-optimization': [0, { allowDecorators: [] }], // 不采用

    // 禁止使用findDOMNode()方法
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
    'react/no-find-dom-node': 2, // 采用

    // 在Components中禁用一些特定的props
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
    'react/forbid-component-props': 0, // 不采用

    // 禁用特定元素
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
    'react/forbid-elements': 0, // 不采用

    // 避免在children和dangerouslySetInnerHTML属性共存时出现问题
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
    'react/no-danger-with-children': 2, // 采用

    // 防止未使用的propType定义
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
    'react/no-unused-prop-types': [2, {
      customValidators: [
      ],
      skipShapeProps: true,
    }], // 采用

    // 要求样式的值为对象或者变量
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
    'react/style-prop-object': 2, // 采用

    // 禁止无效字符的出现
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
    'react/no-unescaped-entities': 2, // 采用

    // 禁止通过children props来传值
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
    'react/no-children-prop': 2, // 采用

    // 在JSX打开和关闭括号内和周围验证空格
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-tag-spacing.md
    'react/jsx-tag-spacing': [2, {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    }], // 采用, 不留空格

    // 强制在闭JSX元素标签之前留空格
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
    // Deprecated in favor of jsx-tag-spacing
    'react/jsx-space-before-closing': 0, // 不采用

    // 禁止使用数组的索引作为元素的key属性
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
    'react/no-array-index-key': 2, // 采用, 原因可以见链接

    // 强制给每个不是必须的属性定义一个默认值
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/require-default-props.md
    'react/require-default-props': [0, {
      forbidDefaultForRequired: true,
    }], // 采用, 写了isRequired的属性则禁止设置默认值

    // 禁止使用没有被export的prototype
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
    'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }], // 设置为警告级别

    // 不要给单标签的jsx元素传入children
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
    'react/void-dom-elements-no-children': 2, // 采用

    // 强制所有的默认prop都对应一个非必须的proptype
    // https://github.com/yannickcr/eslint-plugin-react/blob/9e13ae2c51e44872b45cc15bf1ac3a72105bdd0e/docs/rules/default-props-match-prop-types.md
    'react/default-props-match-prop-types': [2, { allowRequiredDefaults: false }], // 采用

    // 继承React.PureComponent时，禁止使用shouldComponentUpdate
    // https://github.com/yannickcr/eslint-plugin-react/blob/9e13ae2c51e44872b45cc15bf1ac3a72105bdd0e/docs/rules/no-redundant-should-component-update.md
    'react/no-redundant-should-component-update': 2, // 采用s

    // 禁止存在未使用的state值
    // https://github.com/yannickcr/eslint-plugin-react/pull/1103/
    'react/no-unused-state': 2, // 采用

    // 强制布尔值属性命名的的一致性
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/boolean-prop-naming.md
    'react/boolean-prop-naming': 0, // 不采用

    // 防止常见的套管缺陷
    // https://github.com/yannickcr/eslint-plugin-react/blob/73abadb697034b5ccb514d79fb4689836fe61f91/docs/rules/no-typos.md
    'react/no-typos': 2, // 采用

    // 禁止在props和children中使用无意义的大括号
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
    'react/jsx-curly-brace-presence': [2, { props: 'never', children: 'never' }], // 采用

    // 每行一个jsx元素
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-one-expression-per-line.md
    // TODO: re-enable when an option for text children is available
    'react/jsx-one-expression-per-line': 0, // 不采用

    // 强制使用desconstruct的一致性
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/destructuring-assignment.md
    // TODO: re-enable when component detection is fixed
    'react/destructuring-assignment': 0, // 不采用

    // 禁止在this.setState中使用this.state
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/no-access-state-in-setstate.md
    'react/no-access-state-in-setstate': 2, // 采用

    // 禁止使用没有显式type属性的按钮元素
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/button-has-type.md
    'react/button-has-type': [2, {
      button: true,
      submit: true,
      reset: false,
    }], // 采用

    // 确保内联标签两边有空格
    'react/jsx-child-element-spacing': 0, // 不采用

    // 禁止在无状态组件中使用this
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/no-this-in-sfc.md
    'react/no-this-in-sfc': 2, // 采用

    // 检查jsx最大深度
    // https://github.com/yannickcr/eslint-plugin-react/blob/abe8381c0d6748047224c430ce47f02e40160ed0/docs/rules/jsx-max-depth.md
    'react/jsx-max-depth': 0, // 不采用

    // 禁止在jsx props之间存在多个空格
    // https://github.com/yannickcr/eslint-plugin-react/blob/ac102885765be5ff37847a871f239c6703e1c7cc/docs/rules/jsx-props-no-multi-spaces.md
    'react/jsx-props-no-multi-spaces': 2, // 采用

    // 不允许使用UNSAFE_ methods
    // https://github.com/yannickcr/eslint-plugin-react/blob/157cc932be2cfaa56b3f5b45df6f6d4322a2f660/docs/rules/no-unsafe.md
    'react/no-unsafe': 0, // 不采用
  }
};

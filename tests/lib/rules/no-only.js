const rule = require('../../../lib/rules/no-only');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();

ruleTester.run('no-only', rule, {
  valid: [
    'describe(function() {})',
    'describe.skip(function() {})',
    'it(function() {})',
    'describe(function() { it(function() {}); })',
    'obj.only()'
  ],
  invalid: [
    {
      code: 'describe.only()',
      errors: [{
        message: 'Unexpected describe.only',
        type: 'CallExpression',
        line: 1,
        column: 1
      }]
    },
    {
      code: 'it.only()',
      errors: [{
        message: 'Unexpected it.only',
        type: 'CallExpression',
        line: 1,
        column: 1
      }]
    },
    {
      code: 'describe(function() {it.only()})',
      errors: [{
        message: 'Unexpected it.only',
        type: 'CallExpression',
        line: 1,
        column: 22
      }]
    },
    {
      code: 'describe.only(function() {it.only()})',
      errors: [
        {
          message: 'Unexpected describe.only',
          type: 'CallExpression',
          line: 1,
          column: 1
        },
        {
          message: 'Unexpected it.only',
          type: 'CallExpression',
          line: 1,
          column: 27
        }
      ]
    }
  ]
});

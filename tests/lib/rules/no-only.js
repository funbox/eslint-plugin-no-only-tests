const RuleTester = require('eslint').RuleTester;
const rule = require('../../../lib/rules/no-only');

const ruleTester = new RuleTester();

ruleTester.run('no-only', rule, {
  valid: [
    'describe(function() {})',
    'describe.skip(function() {})',
    'it(function() {})',
    'describe(function() { it(function() {}); })',
    'obj.only()',
  ],
  invalid: [
    {
      code: 'describe.only()',
      errors: [{
        message: 'Unexpected describe.only',
        type: 'CallExpression',
        line: 1,
        column: 1,
        endLine: 1,
        endColumn: 14,
      }],
    },
    {
      code: 'it.only()',
      errors: [{
        message: 'Unexpected it.only',
        type: 'CallExpression',
        line: 1,
        column: 1,
        endLine: 1,
        endColumn: 8,
      }],
    },
    {
      code: 'describe(function() {it.only()})',
      errors: [{
        message: 'Unexpected it.only',
        type: 'CallExpression',
        line: 1,
        column: 22,
        endLine: 1,
        endColumn: 29,
      }],
    },
    {
      code: 'describe.only(function() {it.only()})',
      errors: [
        {
          message: 'Unexpected describe.only',
          type: 'CallExpression',
          line: 1,
          column: 1,
          endLine: 1,
          endColumn: 14,
        },
        {
          message: 'Unexpected it.only',
          type: 'CallExpression',
          line: 1,
          column: 27,
          endLine: 1,
          endColumn: 34,
        },
      ],
    },
  ],
});

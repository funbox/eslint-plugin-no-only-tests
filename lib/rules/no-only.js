module.exports = {
  meta: {
    docs: {
      description: 'disallow the use of describe.only() and it.only()',
      category: 'Best Practices',
      recommended: true,
    },
    schema: [],
  },

  create(context) {
    return {
      CallExpression(node) {
        const callee = node.callee;

        if (callee.type === 'MemberExpression') {
          if (['describe', 'it'].includes(callee.object.name) && callee.property.name === 'only') {
            context.report({
              node,
              loc: { start: callee.object.loc.start, end: callee.property.loc.end },
              message: `Unexpected ${callee.object.name}.only`,
            });
          }
        }
      },
    };
  },
};

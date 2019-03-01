module.exports = {
  meta: {
    docs: {
      description: 'disallow the use of describe.only() and it.only()',
      category: 'Best Practices',
      recommended: true
    },
    schema: []
  },

  create(context) {
    return {
      CallExpression(node) {
        const callee = node.callee;

        if (callee.type === 'MemberExpression') {
            const objectName = callee.object.name;

          if (['describe','it'].includes(objectName) && callee.property.name === 'only') {
              context.report({
                node,
                message: 'Unexpected only'
              });
          }
        }
      }
    }
  }
};

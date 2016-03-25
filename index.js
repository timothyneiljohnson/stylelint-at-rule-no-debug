const assign = require('object-assign');
const stylelint = require('stylelint');
const ruleName = 'no-debug';
const messages = stylelint.utils.ruleMessages(ruleName, {
  rejected: 'Remove debug statement'
});

const arrayContains = (searchItem, array) =>
  array.indexOf(searchItem) > -1;

module.exports = stylelint.createPlugin(ruleName, (enabled) =>
  (root, result) => {
    const validOptions = stylelint.utils.validateOptions(result, ruleName, {
      actual: enabled,
      possible: [true, false]
    });

    const checkForDebugStatement = (rule) => {
      if (enabled && JSON.stringify(rule).indexOf('@debug') > -1) {
        stylelint.utils.report({
          ruleName: ruleName,
          result: result,
          node: rule,
          message: messages.rejected
        });
      }
    };

    if (!validOptions) {
      return;
    }

    root.walkRules(checkForDebugStatement);
  }
);

module.exports.ruleName = ruleName;
module.exports.messages = messages;

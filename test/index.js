const ruleTester = require('stylelint-rule-tester');
var noDebug = require('..');

const messages = noDebug.messages;
const testRule = ruleTester(noDebug.rule, noDebug.ruleName);

const basics = (tr) => {
  tr.ok('');
  tr.ok('a {}');
  tr.ok('@import "foo.css";');
  tr.ok('a { top: 0; }');
};

testRule(true, (tr) => {
  basics(tr);

  tr.notOk('a { @debug $blue; color: $blue; }', messages.rejected);
  tr.ok('a { color: $blue; }');
});

testRule(false, (tr) => {
  basics(tr);

  tr.ok('a { @debug $blue; color: $blue; }');
});

var test = require('tape')
test('Demo Test', function(assert) {
  const actual = 1 + 1
  const expected = 2
  assert.equal(actual, expected, '1 + 1 = 2')
  assert.end()
})

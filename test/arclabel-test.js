var tape = require("tape"),
    arclabel = require("../");

tape("arclabel() returns the answer to the ultimate question of life, the universe, and everything.", function(test) {
  test.equal(arclabel.arclabel(), 42);
  test.end();
});

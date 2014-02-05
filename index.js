module.exports = function(min, max) {
  if (typeof max == 'undefined') {
    max = min;
  }
  var delta = max - min;
  return function (evt, next) {
    setTimeout(next, min + Math.random() * delta);
  }
}

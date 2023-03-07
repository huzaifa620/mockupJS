function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const data = [["x", "Performance"]];
var prevVal = getRandomInt(85, 90);
for (let index = 0; index < 30; index++) {
  var val = getRandomInt(85, 90);
  while (val == prevVal) {
    var val = getRandomInt(85, 90);
  }
  data.push([, val]);

  prevVal = val;
}

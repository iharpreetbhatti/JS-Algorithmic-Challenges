// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

function getVolumeOfCuboid(length, width, height) {
  return length * width * height;
}

let length = 2,
  width = 2,
  height = 4;

let result = getVolumeOfCuboid(length, width, height);
console.log(result);

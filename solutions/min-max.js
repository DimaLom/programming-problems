const getMinMax = (array) => {
  return array.reduce(
    (result, element) => {
      result.min > element && (result.min = element);
      result.max < element && (result.max = element);

      return result;
    },
    { min: array[0], max: array[0] }
  );
};

console.log(getMinMax([8, 5, 6, 7, 12, 54, 22, 12, 3]));

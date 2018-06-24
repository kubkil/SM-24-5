const calcStylePoints = (...stylePoints) => {
  let pointsForStyle = [...stylePoints];
  const maxIndex = pointsForStyle.indexOf(Math.max(...pointsForStyle));
  const minIndex = pointsForStyle.indexOf(Math.min(...pointsForStyle));

  pointsForStyle.splice(maxIndex, 1);
  pointsForStyle.splice(minIndex, 1);

  const pointsSum = pointsForStyle.reduce((acc, current) => acc + current);
  return pointsSum;
}

module.exports = calcStylePoints;

// dlaczego w package test:style nie działał - do zapytania we wtorek

const calcDistancePoints = require('./calculateDistancePoints');
const calcStylePoints = require('./calculateStylePoints');

const calcTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
  const distancePoints = calcDistancePoints(distance, hillSize, kPoint);
  const stylePoints = calcStylePoints(styleNotes);

  const totalPoints = distancePoints + stylePoints + windFactor + gateFactor;

  return totalPoints.toFixed(1);
}

module.exports = calcTotalPoints;

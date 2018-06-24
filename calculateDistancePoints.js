// czy może być calcDistancePoints(normal) zamiast 'normal'?

const calcDistancePoints = (distance, hillSize, kPoint) => {

  let points = 0;

  switch (hillSize) {
    case "normal":
      points = 60;
      points = points + (distance - kPoint) * 2;
      break;

    case "big":
      points = 60;
      points = points + (distance - kPoint) * 1.8;
      break;

    case "mammoth":
      points = 120;
      points = points + (distance - kPoint) * 1.2;
      break;
  }

  return points;
}

module.exports = calcDistancePoints;

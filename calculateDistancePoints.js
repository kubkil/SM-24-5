// czy może być calcDistancePoints(normal) zamiast 'normal'?

const calcDistancePoints = (distance, hillSize, kPoint) => {
  let points = 0;

  if (hillSize === 'normal' || hillSize === 'big') {
    points += 60;
    if (hillSize === 'normal') {
      if (distance > kPoint) {
        for (let i = kPoint; i < distance; i += 0.5) {
          points += 1;
        }
      } else if (distance < kPoint) {
        for (let i = distance; i < kPoint; i += 0.5) {
          points -= 1;
        }
      }
    } else if (hillSize === 'big') {
      if (distance > kPoint) {
        for (let i = kPoint; i < distance; i += 0.5) {
          points += 0.9;
        }
      } else if (distance < kPoint) {
        for (let i = distance; i < kPoint; i += 0.5) {
          points -= 0.9;
        }
      }
    }
  } else if (hillSize === 'mammoth') {
    points += 120;
    if (distance > kPoint) {
      for (let i = kPoint; i < distance; i += 0.5) {
        points += 0.6;
      }
    } else if (distance < kPoint) {
      for (let i = distance; i < kPoint; i += 0.5) {
        points -= 0.6;
      }
    }
  }

  const pointsForDistance = points.toFixed(1);
  return pointsForDistance;
}

module.exports = calcDistancePoints;

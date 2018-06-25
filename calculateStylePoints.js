const calcStylePoints = styleNotes => {
  const maxIndex = styleNotes.indexOf(Math.max(...styleNotes));
  styleNotes.splice(maxIndex, 1);

  const minIndex = styleNotes.indexOf(Math.min(...styleNotes));
  styleNotes.splice(minIndex, 1);

  const pointsSum = styleNotes.reduce((acc, current) => acc + current);
  return pointsSum;
}

module.exports = calcStylePoints;

// dlaczego w package test:style nie działał - do zapytania we wtorek

// const calcStylePoints = (...styleNotes) => {
//   let pointsForStyle = [...styleNotes];
//   console.log(pointsForStyle);
//   const maxIndex = pointsForStyle.indexOf(Math.max(...pointsForStyle));
//   const minIndex = pointsForStyle.indexOf(Math.min(...pointsForStyle));

//   pointsForStyle.splice(maxIndex, 1);
//   pointsForStyle.splice(minIndex, 1);

//   const pointsSum = pointsForStyle.reduce((acc, current) => acc + current);
//   return pointsSum;
// }

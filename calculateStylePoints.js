const calcStylePoints = (...stylePoints) => {
  let notesArray = [...stylePoints];
  const maxIndex = notesArray.indexOf(Math.max(...notesArray));
  const minIndex = notesArray.indexOf(Math.min(...notesArray));

  notesArray.splice(maxIndex, 1);
  notesArray.splice(minIndex, 1);

  const notesSum = notesArray.reduce((acc, current) => acc + current);
  return notesSum;
}

module.exports = calcStylePoints;

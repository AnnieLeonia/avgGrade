function CalculateAvgGrade() {
  lines = document.getElementById("textarea").value.split("\n");
  totalPoints = 0;
  countingGrade = 0;

  for (var i = 0; i < lines.length; i++) {
    res = lines[i].split("\t");
    if (!isNaN(res[5])) {
      totalPoints += res[3] * res[5];
      countingGrade += parseFloat(res[3]);
    }
    avgGrade = (totalPoints / countingGrade).toFixed(2);
    document.getElementById("yourGrade").innerHTML = avgGrade;
  }
}

function CalculateAvgGrade3() {
  lines = document.getElementById("textarea").value.split("\n");
  totalPoints = 0;
  countingGrade = 0;

  for (var i = 0; i < lines.length; i++) {
    if (lines[i]) {
      pointsStr = lines[i].split(" | ")[1].replace(",", ".");
      pointsFlo = parseFloat(pointsStr.substring(0, pointsStr.length - 3));
      grade = lines[i + 1].substring(7, 8);
      if (!isNaN(grade)) {
        countingGrade += pointsFlo * grade;
        totalPoints += pointsFlo;
      }
      i++;
    }
  }
  avgGrade = (countingGrade / totalPoints).toFixed(2);
  document.getElementById("yourGrade").innerHTML = avgGrade;
}

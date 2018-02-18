  function CalculateAvgGrade(){

    lines = document.getElementById("textarea").value.split('\n')
    totalPoints = 0
    countingGrade = 0

    for(var i = 0;i < lines.length;i++){
      res = lines[i].split('\t')
      if(!isNaN(res[5])){
        totalPoints += res[3] * res[5]
        countingGrade += parseFloat(res[3])
      }
      avgGrade = (totalPoints / countingGrade).toFixed(2);
      document.getElementById("yourGrade").innerHTML = avgGrade
    }
  }
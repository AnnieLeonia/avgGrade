def avrageGrade(gradesFile):
  grades = open(gradesFile, "r")
  subject = grades.readlines()
  totalPoints, countingGrade = 0, 0

  for word in subject:
    res = word.split('\t')
    totalPoints += float(res[3]) * int(res[5])
    countingGrade += float(res[3])

  return float("{0:.2f}".format(totalPoints / countingGrade))

print(avrageGrade("grades.txt"))
  

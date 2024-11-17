function getAverage( scores){
    let sum=0;
    let count=0;
    for(let score of scores){
      sum+=score;
      count++;
    }
    if(count>0){
      return sum/count;
    }
    else{
    return "0";
    }
  }
  const average=getAverage([70,60,50,90]);
  const output=getAverage([]);
  console.log(average);
  console.log(output);
  
  function getGrade(score) {
    let grade;
    if(score==100){
      return grade="A++";
    }
    else if(score>90 && score<99){
      return grade="A";
    }
    else if(score>80 && score<89){
      return grade="B";
    }
    else if(score>70 && score<79){
      return grade="C";
    }
    else if(score>60 || score<69){
      return grade="D";
    }
    else if(score>0 && score<59){
      return grade="F";
    }
  
  }
  
  console.log(getGrade(96));
  console.log(getGrade(82));
  console.log(getGrade(56));
  
  function hasPassingGrade(score) {
    return getGrade(score) !== "F";
  } 
  console.log(hasPassingGrade(96));
  console.log(hasPassingGrade(82));
  console.log(hasPassingGrade(56));

  function studentMsg(totalScores, studentScore) {
      const classAverage = getAverage(totalScores);
    const studentGrade = getGrade(studentScore);

    //ternary operator passOrFail
    const passOrFail = studentScore < 60 ? "you failed the course." : "you passed the course.";

    //alternative way of representaing the ternary operator passOrFail
    //if (studentScore < 60) {
//   passOrFail = "you failed the course.";
// } 
//else
 //{
//   passOrFail = "you passed the course.";
// }
    return `Class average: ${classAverage}. Your grade: ${studentGrade}. ${passOrFail}`
  }
  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
  
  
  
function calculateGrades() {
    // Get the input values
    const calculusScore = parseFloat(document.getElementById('calculusScore').value);
    const softwareEngineeringScore = parseFloat(document.getElementById('softwareEngineeringScore').value);
    const dataStructuresScore = parseFloat(document.getElementById('dataStructuresScore').value);
    const operatingSystemsScore = parseFloat(document.getElementById('operatingSystemsScore').value);
    const basicElectronicsScore = parseFloat(document.getElementById('basicElectronicsScore').value);
    const programmingScore = parseFloat(document.getElementById('programmingScore').value);
    const databaseSystemsScore = parseFloat(document.getElementById('databaseSystemsScore').value);
  
    // Calculate the average
    const totalScores = [calculusScore, softwareEngineeringScore, dataStructuresScore, operatingSystemsScore, basicElectronicsScore, programmingScore, databaseSystemsScore];
    const average = getAverage(totalScores);
  
    // Get the grades for each subject
    const calculusGrade = getGrade(calculusScore);
    const softwareEngineeringGrade = getGrade(softwareEngineeringScore);
    const dataStructuresGrade = getGrade(dataStructuresScore);
    const operatingSystemsGrade = getGrade(operatingSystemsScore);
    const basicElectronicsGrade = getGrade(basicElectronicsScore);
    const programmingGrade = getGrade(programmingScore);
    const databaseSystemsGrade = getGrade(databaseSystemsScore);
  
    // Display the results
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      
      <p>Calculus: ${calculusScore}, Grade: ${calculusGrade}</p>
      <p>Software Engineering: ${softwareEngineeringScore}, Grade: ${softwareEngineeringGrade}</p>
      <p>Data Structures: ${dataStructuresScore}, Grade: ${dataStructuresGrade}</p>
      <p>Operating Systems: ${operatingSystemsScore}, Grade: ${operatingSystemsGrade}</p>
      <p>Basic Electronics: ${basicElectronicsScore}, Grade: ${basicElectronicsGrade}</p>
      <p>Programming: ${programmingScore}, Grade: ${programmingGrade}</p>
      <p>Database Systems: ${databaseSystemsScore}, Grade: ${databaseSystemsGrade}</p>
      <p>Score Average: ${average},${average > 40 ? 'You passed the course.' : 'You failed the course.'}</p>
  
    `;
  }
  
  function getAverage(scores) {
    let sum = 0;
    let count = 0;
    for (let score of scores) {
      sum += score;
      count++;
    }
    return count > 0 ? sum / count : 0;
  }
  
  function getGrade(score) {
    if (score >= 70) {
      return "A";
    } else if (score >= 60) {
      return "B";
    } else if (score >= 50) {
      return "C";
    } else if (score >= 40) {
      return "D";
    } else {
      return "F";
    }
  }
  function clearInputs() {
    document.getElementById('calculusScore').value = '';
    document.getElementById('softwareEngineeringScore').value = '';
    document.getElementById('dataStructuresScore').value = '';
    document.getElementById('operatingSystemsScore').value = '';
    document.getElementById('basicElectronicsScore').value = '';
    document.getElementById('programmingScore').value = '';
    document.getElementById('databaseSystemsScore').value = '';
    document.getElementById('result').innerHTML = '';
  }
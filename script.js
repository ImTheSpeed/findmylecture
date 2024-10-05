// script.js

function findLocation() {
  const code = document.getElementById("codeInput").value;
  let result = "";

  // Basic structure for recognizing codes
  const buildingLetter = code[0];
  const floor = code[1];
  const room = code.slice(2);

  const buildings = {
    'M': 'Administrative building',
    'A': 'Applied Health Sciences Technology',
    'B': 'Physical Therapy',
    'C': 'Dentistry',
    'D': 'Medicine',
    'E': 'Nursing',
    'G': 'Pharmacy',
    'H': 'Administrative Sciences',
    'I': 'Social and Human Sciences',
    'J': 'Media Production',
    'K': 'Food Industries',
    'L': 'Art and Design',
    'N': 'Engineering',
    'O': 'Architecture',
    'P': 'Computer Sciences and Engineering',
    'Q': 'Science'
  };

  // Check if code starts with a valid building letter
  if (buildings[buildingLetter]) {
    result = `${buildings[buildingLetter]}, ${floor}th floor, Room ${room}`;
  } else {
    result = "Invalid code, please try again!";
  }

  document.getElementById("result").innerText = result;
}

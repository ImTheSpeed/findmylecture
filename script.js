function findLocation() {
  const code = document.getElementById("codeInput").value;
  let result = "";

  // Split the code into parts
  const parts = code.split(" ");

  // Extract the building letter
  const buildingLetter = parts[0][0];

  // Extract the floor and room
  let floor = "";
  let room = "";
  if (parts[0].length > 1) {
    floor = parts[0][1];
    room = parts[0].slice(2);
  } else {
    floor = parts[1][0];
    room = parts[1].slice(1);
  }

  // Extract the lecture hall (if present)
  let lectureHall = "";
  if (parts.length > 1) {
    lectureHall = parts[1];
  }

  // Map the building letter to the building name
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

  // Construct the result string
  if (buildings[buildingLetter]) {
    result = `${buildings[buildingLetter]}`;
    if (lectureHall) {
      result += `, ${lectureHall}`;
    }
    result += `, ${floor}th floor, Room ${room}`;
  } else {
    result = "Invalid code, please try again! , Make sure the code is in capital letters ( take it copy from SIS )";
  }

  document.getElementById("result").innerText = result;
}

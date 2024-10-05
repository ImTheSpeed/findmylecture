function findLocation() {
  const code = document.getElementById("codeInput").value.trim();
  let result = "";

  // Split the code into parts based on uppercase letters and spaces
  const parts = code.split(/(?=[A-Z])/);

  // Extract the building letter
  const buildingLetter = parts[0][0];

  // Initialize variables for floor, room, and lecture hall
  let floor = "";
  let room = "";
  let lectureHall = "";
  let codeWithoutBuilding = code.substring(1); // Code without the first letter (building letter)

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

  // Check if the input contains "LH" and treat it as Lecture Hall
  if (codeWithoutBuilding.includes("LH")) {
    lectureHall = "Lecture Hall"; // Automatically set "Lecture Hall"
    let lhPart = codeWithoutBuilding.replace("LH", ""); // Remove "LH" to handle the rest
    floor = lhPart.substring(0, 1); // Extract floor number
    room = lhPart.substring(1); // Extract room number
  } else {
    // If there is no "LH", continue parsing the rest
    if (codeWithoutBuilding.length >= 2) {
      floor = codeWithoutBuilding[0]; // First character after building letter is floor
      room = codeWithoutBuilding.substring(1); // Remaining characters are room number
    } else {
      result = "Invalid code, please try again!";
    }
  }

  // Construct the result string
  if (buildings[buildingLetter]) {
    result = `${buildings[buildingLetter]}`;
    if (lectureHall) {
      result += `, ${lectureHall}`;
    }
    if (floor) {
      if (floor === "G") {
        result += `, Ground floor`;
      } else {
        result += `, ${floor}th floor`;
      }
    }
    if (room) {
      result += `, Room ${room}`;
    }
  } else {
    result = "Invalid code, please try again!";
  }

  // Display the result
  document.getElementById("result").innerText = result;
}

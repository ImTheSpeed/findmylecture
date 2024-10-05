function findLocation() {
  const code = document.getElementById("codeInput").value.trim();
  let result = "";

  // Split the code into parts (using both space and potentially no space as delimiters)
  const parts = code.split(/ |(?=[A-Z])/);

  // Extract the building letter
  const buildingLetter = parts[0];

  // Initialize variables for floor, room, and lecture hall
  let floor = "";
  let room = "";
  let lectureHall = "";

  // Handle cases like "L LH302" (Building + Lecture Hall + Floor + Room)
  if (parts[1] && parts[1].startsWith('LH')) {
    lectureHall = "Lecture Hall";  // Explicitly set "Lecture Hall"
    if (parts[1].length > 2) {
      floor = parts[1].substring(2, 3); // Extract floor number
      room = parts[1].substring(3); // Extract room number
    }
  } 
  // Handle cases like "NG23" or "L1 H302"
  else if (parts[1]) {
    // If floor and room are combined in second part (e.g., NG23 or N1 H302)
    if (parts[1].length > 1) {
      floor = parts[1].substring(0, 1); // Extract floor
      room = parts[1].substring(1); // Extract room
    }
    // If lecture hall and room are given separately (e.g., L1 H302)
    if (parts.length > 2) {
      if (parts[2].startsWith('LH')) {
        lectureHall = "Lecture Hall";
        if (parts[2].length > 2) {
          floor = parts[2].substring(2, 3); // Extract floor
          room = parts[2].substring(3); // Extract room
        }
      } else {
        lectureHall = parts[2].substring(0, 2); // Extract lecture hall
        room = parts[2].substring(2); // Extract room
      }
    }
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

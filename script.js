function findLocation() {
  const code = document.getElementById("codeInput").value.trim();
  let result = "";

  // Split the code into parts (using both space and potentially no space as delimiters)
  const parts = code.split(/ |(?=[A-Z])/);

  // Extract the building letter
  const buildingLetter = parts[0];

  // Extract the floor, room and lecture hall 
  let floor = "";
  let room = "";
  let lectureHall = "";

  // Handle cases where floor and room are combined (e.g., "LH302")
  if (parts[1].length > 2) {
    lectureHall = parts[1].substring(0, 2);
    floor = parts[1].substring(2, 3);
    room = parts[1].substring(3);
  } else {
    // Handle cases where floor and room are separate (e.g., "L1 H302")
    if (parts.length > 2) {
      floor = parts[1];
      lectureHall = parts[2].substring(0, 2);
      room = parts[2].substring(2);
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
      result += `, ${floor}th floor`;
    }
    if (room) {
      result += `, Room ${room}`;
    } 
  } else {
    result = "Invalid code, please try again!";
  }

  document.getElementById("result").innerText = result;
}

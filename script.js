function findLocation() {
  const code = document.getElementById("codeInput").value.trim();
  let result = "";

  // Split the code into parts (adjusting for cases with and without spaces)
  const parts = code.match(/([A-Z]+)([0-9]+)/);

  if (!parts || parts.length < 3) {
    document.getElementById("result").innerText = "Invalid code, please try again!";
    return;
  }

  const buildingLetter = parts[1]; // Building code
  const numericPart = parts[2]; // Floor and room number

  let floor = "";
  let room = "";

  // Handle cases where floor and room are combined
  if (numericPart.length >= 2) {
    floor = numericPart[0]; // First digit is the floor
    room = numericPart.slice(1); // Remaining digits are the room
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

    // Determine floor description
    if (floor === "G") {
      result += `, Ground floor`;
    } else if (floor) {
      const floorSuffix = floor === "1" ? "st" : floor === "2" ? "nd" : floor === "3" ? "rd" : "th";
      result += `, ${floor}${floorSuffix} floor`;
    }

    if (room) {
      result += `, Room ${room.padStart(2, '0')}`; // Pad room number with leading zero if needed
    }
  } else {
    result = "Invalid code, please try again!";
  }

  // Display the result
  document.getElementById("result").innerText = result;
}

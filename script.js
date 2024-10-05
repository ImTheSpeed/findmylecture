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

    // Check if the input contains "LH" and treat it as Lecture Hall
    for (let i = 0; i < parts.length; i++) {
        if (parts[i].includes("LH")) {
            lectureHall = "Lecture Hall"; // Automatically set "Lecture Hall"
            let lhPart = parts[i].replace("LH", ""); // Remove "LH" to handle the rest
            if (lhPart.length > 1) {
                floor = lhPart.substring(0, 1); // Extract floor number
                room = lhPart.substring(1); // Extract room number
            }
        }
    }

    // If "LH" was not part of the input, continue normal parsing
    if (!lectureHall && parts[1]) {
        // If floor and room are combined in second part (e.g., NG23 or N1 H302)
        if (parts[1].length > 1) {
            floor = parts[1].substring(0, 1); // Extract floor
            room = parts[1].substring(1); // Extract room
        }
        // If lecture hall and room are given separately (e.g., L1 H302)
        if (parts.length > 2) {
            lectureHall = parts[2].substring(0, 2); // Extract lecture hall
            room = parts[2].substring(2); // Extract room
        }
    }

    // Map the building letter to the building name and color
    const buildings = {
        'M': { name: 'Administrative building', color: '#000000' },
        'A': { name: 'Applied Health Sciences Technology', color: '#4f2c02' },
        'B': { name: 'Physical Therapy', color: '#00ff48' },
        'C': { name: 'Dentistry', color: '#ff9c00' },
        'D': { name: 'Medicine', color: '#c72500' },
        'E': { name: 'Nursing', color: '#88c700' },
        'G': { name: 'Pharmacy', color: '#82b6bb' },
        'H': { name: 'Administrative Sciences', color: '#540c58' },
        'I': { name: 'Social and Human Sciences', color: '#000000' }, // No color provided
        'J': { name: 'Media Production', color: '#0030ff' },
        'K': { name: 'Food Industries', color: '#000000' }, // No color provided
        'L': { name: 'Art and Design', color: '#4e00ff' },
        'N': { name: 'Engineering', color: '#f0ff00' },
        'O': { name: 'Architecture', color: '#000000' }, // No color provided
        'P': { name: 'Computer Sciences and Engineering', color: '#0030ff' },
        'Q': { name: 'Science', color: '#ff00cc' }
    };

    // Construct the result string
    if (buildings[buildingLetter]) {
        const buildingInfo = buildings[buildingLetter];
        result += `<span style="color:${buildingInfo.color};">${buildingInfo.name}</span>`;
        
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
    document.getElementById("result").innerHTML = result;
}

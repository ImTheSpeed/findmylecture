function findLocation() {
    // Get input and convert to uppercase to make it case-insensitive
    const code = document.getElementById("codeInput").value.trim().toUpperCase();
    let result = "";

    // Special cases
    const specialCases = {
        'HLH001': 'Auditorium 1',
        'J101': 'Auditorium 2',
        'CRI122': 'Human Sciences Floor 1 Room 22',
        'CRI242': 'Human Sciences Floor 2 Room 42',
        'CRI246': 'Human Sciences Floor 2 Room 46',
        'GCR201': 'Pharmacy Floor 2 Room 01',
        'GCR301': 'Pharmacy Floor 3 Room 01',
        'GLH001': 'Pharmacy Lecture Hall Ground Floor Room 001'
    };

    // Check if the input matches one of the special cases
    if (specialCases[code]) {
        result = specialCases[code];
    } else {
        // Check if the code contains "LH"
        const isLectureHall = code.includes("LH");
        let buildingLetter = code[0];
        let floor = "";
        let room = "";

        // Handle different lengths based on whether it's a Lecture Hall code or not
        if (isLectureHall) {
            // Handle LH case
            const lhParts = code.split("LH");
            if (lhParts[0].length === 1 && lhParts[1].length > 0) {
                buildingLetter = lhParts[0][0];
                floor = lhParts[1][0]; // The first character after LH
                room = lhParts[1].substring(1); // The rest is the room number
            }
        } else {
            // Handle regular cases without LH
            if (code.length === 4) { // Format: J204
                floor = code[1];
                room = code.substring(2);
            } else if (code.length === 5) { // Format: K LH22
                floor = code[1];
                room = code.substring(2);
            } else if (code.length === 6) { // Format: L LH202
                floor = code[2]; // 2nd character
                room = code.substring(3);
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
            if (isLectureHall) {
                result += `, Lecture Hall`;
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
    }

    // Display the result
    document.getElementById("result").innerHTML = result;
}

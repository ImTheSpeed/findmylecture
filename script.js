function findLocation() {
    let code = document.getElementById("codeInput").value.trim().toUpperCase();
    code = code.replace(/\s+/g, '');  // Remove spaces
    let result = "";

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

    if (specialCases[code]) {
        result = specialCases[code];
    } else {
        const isLectureHall = code.includes("LH");
        const isClassRoom = code.includes("CR");
        let buildingLetter = code[0];
        let floor = "";
        let room = "";

        if (isLectureHall) {
            const lhParts = code.split("LH");
            if (lhParts[0].length === 1 && lhParts[1].length > 0) {
                buildingLetter = lhParts[0][0];
                floor = lhParts[1][0]; 
                room = lhParts[1].substring(1); 
            }
        } else if (isClassRoom) {
            const crParts = code.split("CR");
            if (crParts[0].length === 1 && crParts[1].length > 0) {
                buildingLetter = crParts[0][0];
                floor = crParts[1][0]; 
                room = crParts[1].substring(1);
            }
        } else {
            if (code.length === 4) { 
                floor = code[1];
                room = code.substring(2);
            } else if (code.length === 5) { 
                floor = code[1];
                room = code.substring(2);
            } else if (code.length === 6) { 
                floor = code[2]; 
                room = code.substring(3);
            }
        }

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

        if (buildings[buildingLetter]) {
            result = `${buildings[buildingLetter]}`;
            if (isLectureHall) {
                result += `, Lecture Hall`;
            } else if (isClassRoom) {
                result += `, Class Room`;
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

    document.getElementById("result").innerHTML = result;
}

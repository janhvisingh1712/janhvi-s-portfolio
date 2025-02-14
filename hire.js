function openDialog() {
    document.getElementById("gmailDialog").style.display = "flex";
}

function closeDialog() {
    document.getElementById("gmailDialog").style.display = "none";
}

function toggleFreelanceBox() {
    let box = document.getElementById("freelanceBox");
    box.style.display = (box.style.display === "flex") ? "none" : "flex";
}

function sendEmail() {
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    let mailtoLink = `mailto:your-email@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
}

function showDropdown() {
    document.getElementById("dropdown").style.display = "block";
}

function hideDropdown() {
    setTimeout(() => {
        document.getElementById("dropdown").style.display = "none";
    }, 200);
}

function redirectTo(url) {
    window.location.href = url;
}

function filterSuggestions() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let dropdown = document.getElementById("dropdown");
    let options = dropdown.getElementsByTagName("div");

    for (let option of options) {
        if (option.innerText.toLowerCase().includes(input)) {
            option.style.display = "block";
        } else {
            option.style.display = "none";
        }
    }

    dropdown.style.display = input ? "block" : "none";
}

function handleEnter(event) {
    if (event.key === "Enter") {
        let searchQuery = document.getElementById("searchInput").value;
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    }
}

// Typewriter effect for the overview text
document.addEventListener("DOMContentLoaded", function() {
    const text = "Equipped with a BTech degree along with a fervor for UI/UX design, Artificial Intelligence, and Data Analytics, I am flexible, a fast learner, and a problem solver, which allows me to successfully integrate into any team. While I have no prior experience, in my opinion, I am a readily creative and eager learner which makes me a welcome addition to any company.\n\nI am very motivated towards achieving goals and work best in settings where they are required to learn or work with others. Projects are approached from a problem solving perspective making sure that not only the work is done, but it is done excellently. Analyzing problems, critical thinking, and adaptability are essential in this fast paced world and, I am ready to embrace it.\n\nI am able to participate in many types of teams because of my communication and teamwork skills. I value and practice active listening and collaboration, and initiative so I can ascertain the need of the project and provide business-oriented solutions. I tend to fully embrace feedback and view every problem as a chance to improve and develop my abilities.\n\nI am currently working on CalmPulse, a mental health tracker app, and through this project, I am applying UI and UX best practices as well as prototyping and front end development techniques to provide a good user interaction experience.";
    const headerText = "AI Overview";
    const iconHTML = '<img src="https://cdn.builder.io/api/v1/image/assets/ea1e5708404045aa8b9bb1f7eaf34b63/fbf7e0ccb499d8df05740a5ce9340e66a71d00f840edc8bce059d2486f73fcc8?apiKey=ea1e5708404045aa8b9bb1f7eaf34b63&" class="overview-icon" alt=""/>';
    
    let index = 0;
    const speed = 5; // Typing speed in milliseconds

    function typeWriter() {
        if (index < headerText.length) {
            document.getElementById("overviewTitle").innerHTML += headerText.charAt(index);
        } else if (index === headerText.length) {
            document.getElementById("overviewTitle").innerHTML += iconHTML;
        } else if (index > headerText.length && (index - headerText.length - 1) < text.length) {
            document.getElementById("overviewText").innerHTML += text.charAt(index - headerText.length - 1);
        }
        index++;
        if (index <= headerText.length + text.length + 1) {
            setTimeout(typeWriter, speed);
        }
    }

    document.getElementById("overviewTitle").innerHTML = ""; // Clear any existing content
    document.getElementById("overviewText").innerHTML = ""; // Clear any existing content
    typeWriter();
});
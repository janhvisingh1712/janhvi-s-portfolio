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
    let
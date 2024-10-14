let phonebook = [];
let id = 1;

function setAvatar() {
    const avatarUrl = document.getElementById("image-url").value;
    document.getElementById("avatar").style.backgroundImage = `url(${avatarUrl})`;
}

function setUsername() {
    const username = document.getElementById("username").value;
    const displayUsername = document.getElementById("display-username");
    displayUsername.textContent = username;
    displayUsername.href = "https://www.facebook.com/ninestevf";
}

function addEntry() {
    const name = document.getElementById("name").value;
    const tel = document.getElementById("tel").value;
    if (name && tel) {
        const tableBody = document.getElementById("phonebook-body");
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${id++}</td>
            <td>${name}</td>
            <td>${tel}</td>
        `;
        tableBody.appendChild(row);
        phonebook.push({ name, tel });
        document.getElementById("name").value = '';
        document.getElementById("tel").value = '';
    }
}

function exportCSV() {
    let csvContent = "data:text/csv;charset=utf-8,No.,Name,Phone Number\n";
    phonebook.forEach((entry, index) => {
        csvContent += `${index + 1},${entry.name},${entry.tel}\n`;
    });
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "phonebook.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

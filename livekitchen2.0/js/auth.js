// Authentication Functions

function authenticate() {
    const id = document.getElementById("adminID").value;
    const pass = document.getElementById("adminPass").value;
    if (id === "2222" && pass === "1234") return true;
    alert("Invalid Credentials!");
    return false;
}

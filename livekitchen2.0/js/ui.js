// UI Navigation and Section Management

function showSection(event, id) {
    document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
    document.getElementById(id).classList.add("active");
    document.querySelectorAll("nav button").forEach(btn => btn.classList.remove("active-nav"));
    event.currentTarget.classList.add("active-nav");
    if (id === 'menu-list') displayInventory();
}

function displayInventory() {
    const inventory = JSON.parse(localStorage.getItem("foodInventory")) || {};
    const tbody = document.getElementById("foodListBody");
    
    if (Object.keys(inventory).length === 0) {
        tbody.innerHTML = "<tr><td colspan='6' style='text-align:center;'>No items in menu. Add items to get started!</td></tr>";
        return;
    }
    
    tbody.innerHTML = Object.keys(inventory).map(id => `
        <tr>
            <td><b>${id}</b></td>
            <td>${inventory[id].name}</td>
            <td style="color:var(--primary-dark); font-weight:600;">${inventory[id].restaurant}</td>
            <td>${inventory[id].category || 'Uncategorized'}</td>
            <td><span class="status-pill status-${inventory[id].status.replace(' ', '')}">${inventory[id].status}</span></td>
            <td>
                <button class="action-btn delete-btn" onclick="deleteFoodItemDirect('${id}')" style="padding: 5px 10px; width: auto;">Delete</button>
            </td>
        </tr>
    `).join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    displayInventory();
});


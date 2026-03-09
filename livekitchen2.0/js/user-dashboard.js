// User Dashboard Functions

function showSection(event, id) {
    document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
    document.getElementById(id).classList.add("active");
    document.querySelectorAll("nav button").forEach(btn => btn.classList.remove("active-nav"));
    event.currentTarget.classList.add("active-nav");
    if (id === 'menu') displayInventory();
}

function displayInventory() {
    const inventory = JSON.parse(localStorage.getItem("foodInventory")) || {};
    const tbody = document.getElementById("foodListBody");
    
    if (Object.keys(inventory).length === 0) {
        tbody.innerHTML = "<tr><td colspan='4' style='text-align:center;'>No items available. Check back later!</td></tr>";
        return;
    }
    
    tbody.innerHTML = Object.keys(inventory).map(id => {
        const item = inventory[id];
        return `
            <tr>
                <td><strong>${item.name}</strong></td>
                <td style="color:var(--primary-dark); font-weight:600;">${item.restaurant}</td>
                <td>${item.category || 'General'}</td>
                <td><span class="status-pill status-${item.status.replace(' ', '')}">${item.status}</span></td>
            </tr>
        `;
    }).join('');
}

function searchFood() {
    const id = document.getElementById("searchFoodID").value.trim();
    let inventory = JSON.parse(localStorage.getItem("foodInventory")) || {};
    const resultDiv = document.getElementById("searchResult");
    
    if (id && inventory[id]) {
        const item = inventory[id];
        resultDiv.innerHTML = `
            <div class="card" style="border-left: 5px solid var(--primary);">
                <p><strong>Item:</strong> ${item.name}</p>
                <p><strong>Restaurant:</strong> ${item.restaurant}</p>
                <p><strong>Category:</strong> ${item.category || 'General'}</p>
                <p><strong>Status:</strong> <span class="status-pill status-${item.status.replace(' ', '')}">${item.status}</span></p>
            </div>`;
        document.getElementById("searchFoodID").value = "";
    } else if (id) {
        resultDiv.innerHTML = "<p style='color: var(--danger); font-weight: 600;'>❌ Item not found</p>";
        document.getElementById("searchFoodID").value = "";
    } else {
        resultDiv.innerHTML = "<p style='color: var(--text-muted);'>Enter an item ID to search</p>";
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    displayInventory();
});

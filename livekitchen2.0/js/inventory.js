// Admin Inventory Management Functions

// Common Food Names Database with South Indian & Non-Veg Options
const commonFoodNames = [
    // South Indian Tiffin (Breakfast)
    "Idli",
    "Masala Idli",
    "Sambar Idli",
    "Plain Dosa",
    "Masala Dosa",
    "Ghee Roast Dosa",
    "Cheese Dosa",
    "Paneer Dosa",
    "Chicken Dosa",
    "Egg Dosa",
    "Uttapam",
    "Masala Uttapam",
    "Onion Uttapam",
    "Tomato Uttapam",
    "Upma",
    "Rava Upma",
    "Vegetable Upma",
    "Poha",
    "Aloo Poha",
    "Puffed Rice Upma",
    "Puttu",
    "Kaya Toast",
    "Pesarattu",
    "Gunjhavada",
    "Appam",
    "Stew Appam",
    "Paratha",
    "Aloo Paratha",
    "Paneer Paratha",
    "Chicken Paratha",
    "Puri",
    "Aloo Puri",
    "Chole Puri",
    "Bhatura",
    
    // South Indian Lunch
    "Sambar Rice",
    "Lemon Rice",
    "Coconut Rice",
    "Tamarind Rice",
    "Tomato Rice",
    "Peas Rice",
    "Garlic Rice",
    "Mint Rice",
    "Curd Rice",
    "Ghee Rice",
    "Vegetable Biryani",
    "Dum Biryani",
    "Mixed Vegetable Curry",
    "Brinjal Fry",
    "Potato Fry",
    "Capsicum Fry",
    "Cauliflower Fry",
    "Beans Fry",
    "Spinach Curry",
    "Bottle Gourd Curry",
    "Pumpkin Curry",
    "Beetroot Curry",
    "Carrot Curry",
    "Radish Curry",
    "Drumstick Curry",
    "Okra Fry",
    "Chikhalies",
    "Pappu (Lentils)",
    "Moong Dal",
    "Masoor Dal",
    "Chickpea Curry",
    "Black Chickpea Curry",
    
    // South Indian Dinner
    "Paneer Butter Masala",
    "Paneer Tikka",
    "Mattar Paneer",
    "Shahi Paneer",
    "Paneer Do Pyaza",
    "Tandoori Paneer",
    "Methi Paneer",
    "Labrador Paneer",
    "Mixed Vegetables",
    "Vegetable Manchurian",
    "Gobi Manchurian",
    "Mushroom Fry",
    "Mushroom Curry",
    "Corn Curry",
    "Baby Corn Fry",
    "Cheese Paratha",
    "Butter Naan",
    "Garlic Naan",
    "Paneer Naan",
    "Roti",
    "Naan",
    "Chapati",
    "Bajra Roti",
    "Wheat Roti",
    
    // Non-Veg - Chicken
    "Chicken Biryani",
    "Hyderabadi Dum Biryani",
    "Chicken Butter Masala",
    "Chicken Tandoori",
    "Chicken Tikka Masala",
    "Chicken Do Pyaza",
    "Chicken Chettinad",
    "Chicken Lababdar",
    "Chicken Handi",
    "Chicken Salan",
    "Chicken Kofta",
    "Chicken Shami Kebab",
    "Chicken Galauti Kebab",
    "Chicken Seekh Kebab",
    "Chicken Shashlik",
    "Chicken Achari",
    "Chicken Jalfrezi",
    "Chicken Kolapuri",
    "Chicken Nilgiri Kebab",
    "Chicken 65",
    "Chicken Lollipop",
    "Pepper Chicken",
    "Chilli Chicken",
    "Cashew Chicken",
    "Chicken Kolhapuri",
    "Chicken Varuval",
    "Chicken Fry",
    "Chicken Peri Peri",
    "Smoky Chicken",
    "Tandoori Chicken",
    "Chicken Mughlai",
    "Chicken Yakhni",
    
    // Non-Veg - Fish & Sea Food
    "Fish Biryani",
    "Fish Fryer",
    "Fish Curry",
    "Fish Amritsari",
    "Fish Fry",
    "Baked Fish",
    "Grilled Fish",
    "Fish Manchurian",
    "Fish Tandoori",
    "Fish Tikka",
    "Fish Kolapuri",
    "Surmai Fry",
    "Pomfret Fry",
    "Pomfret Tandoori",
    "Prawn Curry",
    "Prawn Fry",
    "Shrimp Scampi",
    "Butter Garlic Prawns",
    "Tandoori Prawns",
    "Prawn Biryani",
    "Coconut Shrimp",
    "Chilli Prawns",
    "Crab Curry",
    "Baked Crab",
    "Squid Fry",
    "Calamari Fry",
    
    // Non-Veg - Mutton/Lamb
    "Mutton Biryani",
    "Goat Biryani",
    "Mutton Curry",
    "Godamba Mutton",
    "Mutton Rogan Josh",
    "Mutton Keema",
    "Mutton Nihari",
    "Mutton Burrah",
    "Mutton Seekh Kebab",
    "Mutton Kofta",
    "Mutton Galauti Kebab",
    "Mutton Shami Kebab",
    "Mutton Tandoori",
    "Lamb Chops",
    "Lamb Tandoori",
    "Mutton Paya",
    "Mutton Brain Masala",
    "Mutton Liver Fry",
    "Mutton Fry",
    
    // Non-Veg - Egg
    "Egg Biryani",
    "Egg Curry",
    "Egg Fry",
    "Scrambled Eggs",
    "Omelette",
    "Masala Omelette",
    "Paneer Omelette",
    "Cheese Omelette",
    "Egg Fried Rice",
    "Boiled Eggs",
    "Egg Bhurji",
    "Murgh Mussallam",
    
    // South Indian Snacks & Appetizers
    "Samosa",
    "Vegetable Samosa",
    "Paneer Samosa",
    "Meat Samosa",
    "Cheese Samosa",
    "Bonda",
    "Vegetable Bonda",
    "Paneer Bonda",
    "Chicken Bonda",
    "Vada",
    "Medu Vada",
    "Masala Vada",
    "Chikhalies",
    "Pakora",
    "Onion Pakora",
    "Paneer Pakora",
    "Brinjal Pakora",
    "Vegetable Pakora",
    "Chicken Pakora",
    "Fish Pakora",
    "Prawn Pakora",
    "Spinach Pakora",
    "Potato Pakora",
    "Aloo Tikki",
    "Croquettes",
    "Spring Rolls",
    "Vegetable Spring Rolls",
    "Prawn Spring Rolls",
    "Chicken Spring Rolls",
    "Wonton",
    "Chicken Wonton",
    "Prawn Wonton",
    "Hakka Noodles",
    "Chow Mein",
    "Chow Chow",
    "Fried Rice",
    "Egg Fried Rice",
    "Paneer Fried Rice",
    "Chicken Fried Rice",
    "Shrimp Fried Rice",
    "Vegetable Fried Rice",
    "Cheese Balls",
    "Paneer Cube Fry",
    "Gobi Manchurian",
    "Manchow Soup",
    "Hot & Sour Soup",
    "Corn Soup",
    "Vegetable Soup",
    "Chicken Soup",
    "Tomato Shorba",
    "Bread Pakora",
    "Bread Bhaji",
    "Potato Pappad",
    "Rice Pappad",
    "Murukku",
    "Chivda Mix",
    "Mixture",
    "Banana Chips",
    "Potato Chips",
    "Beetroot Chips",
    "Jackfruit Chips",
    "Dry Fruit Snacks",
    "Namkeen",
    "Bhujia",
    "Mathri",
    "Chakli",
    "Khichdi",
    "Chikhalies Rice",
    "Green Peas Snacks",
    
    // Special Non-Veg Snacks
    "Chicken Nuggets",
    "Chicken Wings",
    "Spicy Chicken Wings",
    "Fish Fingers",
    "Prawn Toast",
    "Seekh Kabab",
    "Shami Kabab",
    "Galauti Kabab",
    "Chicken Kabab",
    "Mutton Kabab",
    "Cutlet",
    "Vegetable Cutlet",
    "Paneer Cutlet",
    "Chicken Cutlet",
    "Fish Cutlet",
    
    // Traditional South Indian Items
    "Rasam",
    "Sambhar",
    "Chutney - Coconut",
    "Chutney - Cilantro",
    "Chutney - Tomato",
    "Pickle - Mango",
    "Pickle - Lime",
    "Pickle - Chilli",
    "Pickle - Mixed",
    "Papad",
    "Poppadom",
    
    // Continental/Asian
    "Margherita Pizza",
    "Caesar Salad",
    "Greek Salad",
    "Chicken Pasta",
    "Spaghetti Carbonara",
    "Pad Thai",
    "Tom Yum Soup",
    "Fried Rice",
    "Sushi Roll",
];

let currentCategoryFilter = ""; // Track current filter

// Filter Food Names as user types
function filterFoodNames() {
    const input = document.getElementById("foodName");
    const inputValue = input.value.toLowerCase();
    const foodList = document.getElementById("foodNameList");
    
    // Clear previous list
    foodList.innerHTML = "";
    
    if (inputValue.length === 0) {
        foodList.classList.remove("active");
        return;
    }
    
    // Filter matching food names
    const matches = commonFoodNames.filter(name => 
        name.toLowerCase().includes(inputValue)
    );
    
    if (matches.length === 0) {
        foodList.innerHTML = '<li class="no-results">No matching foods found</li>';
        foodList.classList.add("active");
        return;
    }
    
    // Show matching options
    matches.slice(0, 10).forEach(name => {
        const li = document.createElement("li");
        li.textContent = name;
        li.onclick = function() {
            document.getElementById("foodName").value = name;
            foodList.classList.remove("active");
        };
        foodList.appendChild(li);
    });
    
    foodList.classList.add("active");
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.food-name-dropdown');
    if (dropdown && !dropdown.contains(event.target)) {
        document.getElementById("foodNameList")?.classList.remove("active");
    }
});

function addFoodItem() {
    const id = document.getElementById("foodID").value.trim();
    const name = document.getElementById("foodName").value.trim();
    const restaurant = document.getElementById("foodRestaurant").value.trim();
    const status = document.getElementById("foodStatus").value;
    const category = document.getElementById("foodCategory").value;

    // Validation
    if (!id || !name || !restaurant || !category) { 
        alert("Please fill all fields!"); 
        return; 
    }

    let inventory = JSON.parse(localStorage.getItem("foodInventory")) || {};
    
    // Check if item already exists
    if (inventory[id]) {
        alert("Item with this ID already exists! Use a different ID.");
        return;
    }

    inventory[id] = { name, restaurant, status, category };
    localStorage.setItem("foodInventory", JSON.stringify(inventory));

    alert("Item added successfully!");
    
    // Clear form
    document.getElementById("foodID").value = "";
    document.getElementById("foodName").value = "";
    document.getElementById("foodRestaurant").value = "";
    document.getElementById("foodStatus").value = "Available";
    document.getElementById("foodCategory").value = "";
    
    // Refresh menu list
    if (document.getElementById("menu-list")) {
        displayInventory();
    }
}

function deleteFoodItem() {
    const id = document.getElementById("deleteID").value.trim();
    
    if (!id) {
        alert("Please enter a Food ID to delete!");
        return;
    }

    let inventory = JSON.parse(localStorage.getItem("foodInventory")) || {};
    
    if (inventory[id]) {
        if (confirm(`Are you sure you want to delete "${inventory[id].name}"?`)) {
            delete inventory[id];
            localStorage.setItem("foodInventory", JSON.stringify(inventory));
            alert("Item deleted successfully!");
            document.getElementById("deleteID").value = "";
            displayInventory();
        }
    } else { 
        alert("Item ID not found!"); 
    }
}

function deleteFoodItemDirect(id) {
    let inventory = JSON.parse(localStorage.getItem("foodInventory")) || {};
    
    if (inventory[id]) {
        if (confirm(`Are you sure you want to delete "${inventory[id].name}"?`)) {
            delete inventory[id];
            localStorage.setItem("foodInventory", JSON.stringify(inventory));
            alert("Item deleted successfully!");
            displayInventory();
        }
    } else { 
        alert("Item not found!"); 
    }
}

function searchFood() {
    const id = document.getElementById("searchFoodID").value.trim();
    let inventory = JSON.parse(localStorage.getItem("foodInventory")) || {};
    displaySearchResult(id, inventory);
}

function displaySearchResult(id, inventory) {
    const resultDiv = document.getElementById("searchResult");
    
    if (inventory[id]) {
        const item = inventory[id];
        resultDiv.innerHTML = `
            <div class="card" style="border-left: 5px solid var(--primary);">
                <p><strong>Item:</strong> ${item.name}</p>
                <p><strong>Restaurant:</strong> ${item.restaurant}</p>
                <p><strong>Category:</strong> ${item.category || 'Uncategorized'}</p>
                <p><strong>Status:</strong> <span class="status-pill status-${item.status.replace(' ', '')}">${item.status}</span></p>
            </div>`;
    } else {
        resultDiv.innerHTML = "<p style='color:red;'>Item not found.</p>";
    }
}

function filterByCategory(category) {
    currentCategoryFilter = category;
    
    // Update active button styling
    document.querySelectorAll('.category-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Mark clicked category as active
    if (category !== '') {
        event.currentTarget.classList.add('active');
    }
    
    displayCategoryFilter();
}

function displayCategoryFilter() {
    const inventory = JSON.parse(localStorage.getItem("foodInventory")) || {};
    const tbody = document.getElementById("categoryFilterBody");
    
    let filteredItems = Object.keys(inventory);
    
    // Filter by category if one is selected
    if (currentCategoryFilter !== '') {
        filteredItems = filteredItems.filter(id => 
            inventory[id].category === currentCategoryFilter
        );
    }
    
    if (filteredItems.length === 0) {
        const message = currentCategoryFilter 
            ? `No items found in ${currentCategoryFilter} category.`
            : "No items in inventory. Add items to get started!";
        tbody.innerHTML = `<tr><td colspan='5' style='text-align:center; color: var(--text-muted);'>${message}</td></tr>`;
        return;
    }
    
    tbody.innerHTML = filteredItems.map(id => `
        <tr>
            <td><b>${id}</b></td>
            <td>${inventory[id].name}</td>
            <td style="color:var(--primary-dark); font-weight:600;">${inventory[id].restaurant}</td>
            <td>${inventory[id].category || 'Uncategorized'}</td>
            <td><span class="status-pill status-${inventory[id].status.replace(' ', '')}">${inventory[id].status}</span></td>
        </tr>
    `).join('');
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

// Initialize inventory on page load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize demo inventory if empty
    let inventory = JSON.parse(localStorage.getItem("foodInventory")) || {};
    
    if (Object.keys(inventory).length === 0) {
        inventory["F001"] = {
            name: "Margherita Pizza",
            restaurant: "Italian Kitchen",
            status: "Available",
            category: "Main Course"
        };
        inventory["F002"] = {
            name: "Caesar Salad",
            restaurant: "Garden Fresh",
            status: "Available",
            category: "Appetizers"
        };
        inventory["F003"] = {
            name: "Chocolate Cake",
            restaurant: "Sweet Bakery",
            status: "Limited",
            category: "Desserts"
        };
        inventory["F004"] = {
            name: "Fresh Orange Juice",
            restaurant: "Juice Bar",
            status: "Available",
            category: "Beverages"
        };
        inventory["F005"] = {
            name: "French Fries",
            restaurant: "Burger Palace",
            status: "Available",
            category: "Sides"
        };
        localStorage.setItem("foodInventory", JSON.stringify(inventory));
    }
    
    // Initialize category filter display
    if (document.getElementById("categoryFilterBody")) {
        displayCategoryFilter();
    }
});

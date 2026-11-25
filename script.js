// SPENDWISE - INTERACTIVE BUDGET TRACKER

// 1. Store budget and expenses

let budget = 30000;

let expenses = [];

// 2. Select HTML elements

const budgetDisplay = document.getElementById("total-budget");
const expensesDisplay = document.getElementById("total-expenses");
const balanceDisplay = document.getElementById("remaining-balance");
const messageDisplay = document.getElementById("budget-message");

const expenseForm = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");

// Display initial budget

budgetDisplay.textContent = budget;

// 3. Calculate total expenses using a loop

function calculateTotal() {

    let total = 0;

    for (let i = 0; i < expenses.length; i++) {

        total += expenses[i].amount;

    }

    return total;
}

// 4. Update dashboard

function updateDashboard() {

    let totalExpenses = calculateTotal();

    let remainingBalance = budget - totalExpenses;

    expensesDisplay.textContent = totalExpenses;
    balanceDisplay.textContent = remainingBalance;

    // Decision making

    if (remainingBalance < 0) {

        messageDisplay.textContent = "Warning! You have exceeded your budget.";

    } else if (remainingBalance === 0) {

        messageDisplay.textContent = "You have used your entire budget.";

    } else {

        messageDisplay.textContent = "Good job! You are within your budget.";

    }

    // Display expense records using a loop

    expenseList.innerHTML = "";

    for (let i = 0; i < expenses.length; i++) {

        let item = document.createElement("li");

        item.textContent =
            expenses[i].name + " - KSh " +
            expenses[i].amount + " (" +
            expenses[i].category + ")";

        expenseList.appendChild(item);

    }

}

// 5. Handle form submission using an event listener

expenseForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Collect user input

    let name = document.getElementById("expense-name").value;

    let amount = Number(document.getElementById("expense-amount").value);

    let category = document.getElementById("expense-category").value;

    // Validate input

    if (name.trim() === "" || amount <= 0 || !Number.isFinite(amount) || !category) {

        alert("Please enter valid expense details.");

        return;

    }

    // Store expense in array

    expenses.push({

        name: name,
        amount: amount,
        category: category

    });

    // Update dashboard

    updateDashboard();

    // Clear form

    expenseForm.reset();

});

// Display initial information

updateDashboard();
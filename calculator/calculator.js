const calculatorHistory = [];

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
   return a - b;
}

function multiplication(a, b) {
    return a * b;
}

// FIX 1: Added parameters (a, b) and checked if b is 0
function divide(a, b) {
    if (b === 0) {
        return "Error (Cannot divide by zero)";
    }
    return a / b;
}

function calculate(a, operator, b) {
    let result;
    
    // Route inputs to the correct arithmetic function based on operator
    switch (operator) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '*':
            result = multiplication(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
        default: 
            result = "Error: Invalid Operator";
    }

    // FIX 2 & 3: Kept these lines INSIDE calculate() and used backticks (``)
    const calculationEntry = `${a} ${operator} ${b} = ${result}`;

    // Store calculator info in the array
    calculatorHistory.push(calculationEntry);

    return result;
} // FIX 2: The calculate function now properly ends here

// FIX 4: Cleaned up the nested functions and pointed the loop to calculatorHistory
function displayHistory() {
    console.log("\n=== CALCULATOR HISTORY LOG ===");
    
    if (calculatorHistory.length === 0) {
        console.log("No calculations have been performed yet.");
        return;
    }

    // Standard basic loop using the correct array name
    for (let i = 0; i < calculatorHistory.length; i++) {
        console.log((i + 1) + ". " + calculatorHistory[i]);
    }
}

// === RUNNING THE CALCULATOR ===
calculate(3, "*", 3);
displayHistory();
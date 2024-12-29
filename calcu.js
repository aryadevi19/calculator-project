
    const inputField = document.getElementById("calcuinput");
    const buttons = document.querySelectorAll(".number");
    const resetButton = document.querySelector(".lastrow[type='reset']");
    const equalsButton = document.querySelector(".lastrow:nth-child(2)");
    
    // Append clicked button value to the input field
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;
            if (value === "DEL") {
                inputField.value = inputField.value.slice(0, -1); // Remove last character
            } else if (value === "x") {
                inputField.value += "*"; // Replace 'x' with '*'
            } else {
                inputField.value += value;
            }
        });
    });

    // Reset button functionality
    resetButton.addEventListener("click", () => {
        inputField.value = "";
    });

    // Calculate result on "=" button click
    equalsButton.addEventListener("click", () => {
        try {
            inputField.value = eval(inputField.value); // Evaluate the expression
        } catch (error) {
            inputField.value = "Error";
        }
    });

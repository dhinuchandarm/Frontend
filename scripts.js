async function calculate() {

    // Get values from the input fields
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;

    try {
        // Send request to the backend API
        const response = await fetch("http://localhost:5000/calculate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                num1: num1,
                num2: num2,
                operation: operation
            })
        });

        // Convert response to JSON
        const data = await response.json();

        // Display the result
        document.getElementById("result").innerText = "Result: " + data.result;

    } catch (error) {
        document.getElementById("result").innerText =
            "Error: Unable to connect to the server.";
        console.error(error);
    }
}
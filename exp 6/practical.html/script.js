function convertToFahrenheit() {
    const celsiusInput = document.getElementById('celsiusInput');
    const result = document.getElementById('result');
    const celsius = parseFloat(celsiusInput.value);

    if (isNaN(celsius)) {
        result.textContent = "Please enter a valid number.";
        return;
    }

    const fahrenheit = (celsius * 9/5) + 32;
    result.textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
}

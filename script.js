document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.getElementById("downloadButton");
    const sellButton = document.getElementById("sellButton");

    // Event listener for clicking the Download button
    downloadButton.addEventListener("click", function() {
        window.location.href = "https://proxlightapps.gumroad.com/";
    });

    // Event listener for clicking the Sell button
    sellButton.addEventListener("click", function() {
        window.location.href = "mailto:Proxlight02@gmail.com?subject=Sell GUI&body=Please provide the details of your GUI for selling, including the price, description, and screenshot.";
    });
});

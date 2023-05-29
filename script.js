// Get the buttons elements
const dashboardButton = document.getElementById('dashboard-button');
const analyzeDataButton = document.getElementById('analyze-data-button');
const correlationButton = document.getElementById('correlation-button');
const linearRegressionButton = document.getElementById('linear-regression-button');

// Add click event listeners
dashboardButton.addEventListener('click', () => {
    // Redirect to the realtimedashboard.html page
    window.location.href = 'realtimedashboard.html';
});

analyzeDataButton.addEventListener('click', () => {
    // Redirect to the timeseriesanalysis.html page
    window.location.href = 'Time Series Analysis.html';
});

correlationButton.addEventListener('click', () => {
    // Redirect to the correlation.html page
    window.location.href = 'correlation.html';
});

linearRegressionButton.addEventListener('click', () => {
    // Redirect to the linearreg.html page
    window.location.href = 'linearreg.html';
});

<script>
    function redirectToMonth(month) {
        // Customize this function to perform the desired action or redirect to the appropriate page for each month
        switch (month) {
            case 'January':
                window.location.href = 'january.html'; // Replace 'january.html' with the actual URL or filename of January's page
                break;
            case 'February':
                window.location.href = 'february.html'; // Replace 'february.html' with the actual URL or filename of February's page
                break;
            case 'March':
                window.location.href = 'march.html'; // Replace 'march.html' with the actual URL or filename of March's page
                break;
            case 'April':
                window.location.href = 'april.html'; // Replace 'april.html' with the actual URL or filename of April's page
                break;
            case 'May':
                window.location.href = 'may.html'; // Replace 'may.html' with the actual URL or filename of May's page
                break;
            case 'June':
                window.location.href = 'june.html'; // Replace 'june.html' with the actual URL or filename of June's page
                break;
            case 'July':
                window.location.href = 'july.html'; // Replace 'july.html' with the actual URL or filename of July's page
                break;
            case 'August':
                window.location.href = 'august.html'; // Replace 'august.html' with the actual URL or filename of August's page
                break;
            case 'September':
                window.location.href = 'september.html'; // Replace 'september.html' with the actual URL or filename of September's page
                break;
            case 'October':
                window.location.href = 'october.html'; // Replace 'october.html' with the actual URL or filename of October's page
                break;
            case 'November':
                window.location.href = 'november.html'; // Replace 'november.html' with the actual URL or filename of November's page
                break;
            case 'December':
                window.location.href = 'monthlyreportmain.html'; // Replace 'december.html' with the actual URL or filename of December's page
                break;
            default:
                // Handle the default case or provide a fallback action
                break;
        }
    }
</script>


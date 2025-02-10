document.addEventListener("DOMContentLoaded", function () {
    
    const updateReportButton = document.getElementById("updateReport");

    
    function updateReportData() {
        
        let report = JSON.parse(localStorage.getItem("reportObject")) || { assists: 0, absence: 0, male: 0, female: 0 };
        
        
        const reportTableBody = document.getElementById("reportTableBody");
        const totalStudents = report.assists + report.absence;

        // Insert data in the local storage
        reportTableBody.innerHTML = `
            <tr>
                <td><strong>${report.assists}</strong></td>
                <td><strong>${report.absence}</strong></td>
                <td><strong>${totalStudents}</strong></td>
            </tr>
        `;

        
        const ctx = document.getElementById('genderChart').getContext('2d');
        
        
        if (window.genderChart && typeof window.genderChart.destroy === 'function') {
            window.genderChart.destroy(); 
        }

        // New Graphic
        window.genderChart = new Chart(ctx, {
            type: 'bar', 
            data: {
                labels: ['MALE', 'FEMALE'], 
                datasets: [{
                    label: 'NUMBER OF STUDENTS',
                    data: [report.male, report.female], 
                    backgroundColor: ['#010bff', '#ff4d9b'], 
                    borderColor: ['#0056b3', '#e94d30'], 
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Action of the botton
    updateReportButton.addEventListener("click", function () {
        
        let report = JSON.parse(localStorage.getItem("reportObject")) || { assists: 0, absence: 0, male: 0, female: 0 };

        
        updateReportData();
    });

    
    updateReportData();
});


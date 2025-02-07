document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.getElementById("studentTableBody");
    const reportButton = document.getElementById("generateReport");

    // Function 
    function loadReportData() {
        let report = JSON.parse(localStorage.getItem("reportObject")) || { assits: 0, absence: 0 };

        console.log("Datos del reporte:", report); 

        let totalStudents = report.assits + report.absence;

        // Insert data in the local storage
        tableBody.innerHTML = `
            <tr>
                <td><strong>${report.assits}</strong></td>
                <td><strong>${report.absence}</strong></td>
                <td><strong>${totalStudents}</strong></td>
            </tr>
        `;
    }

    // Action of the botton "REPORT"
    reportButton.addEventListener("click", loadReportData);
});
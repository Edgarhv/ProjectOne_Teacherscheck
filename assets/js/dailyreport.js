document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.getElementById("studentTableBody");

    // Obtain data from local storage
    let students = JSON.parse(localStorage.getItem("students")) || [];

    // Count present and absent student
    let presentCount = students.filter(student => student.present === "yes").length;
    let absentCount = students.filter(student => student.present === "no").length;

    // Generate count students
    tableBody.innerHTML = `
        <tr>
            <td><strong>${presentCount}</strong></td>
            <td><strong>${absentCount}</strong></td>
        </tr>
    `;
});

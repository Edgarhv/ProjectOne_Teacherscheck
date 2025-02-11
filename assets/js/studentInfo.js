reportButton = document.getElementById('generateReport');
// console.log(JSON.parse(localStorage.getItem('studentsArray')));
let info = JSON.parse(localStorage.getItem('studentsArray')) || [];
console.log(info);

const tableBody = document.querySelector('#tableBody');

// function genderValue (array) {
//     gender = []
//     array.forEach((selectItem, i) => {
//     let selecterGender = selectItem.gender;
//     if (selecterGender == 1){
//         console.log('male')
//         gender.push('male')
//     }
//     else if (selecterGender == 2){
//         gender.push('female')
//     }
//     console.log(gender)
    
//    }
   
//    );
// };

function generateTable(array) {

    array.forEach((selectItem, i) => {
    let tr = document.createElement('tr');
    let th = document.createElement('th');
    let tdStudent = document.createElement('td');
    let tdGender = document.createElement('td');
    let tdBirthdate = document.createElement('td');
    let tdEmail = document.createElement('td');
    let tdContact = document.createElement('td');
    let tdAbsence = document.createElement('td');
    let tdCheckColumn = document.createElement('td'); // Celda para el checkbox
    let tdErrorColumn = document.createElement('td'); // Celda para el radio y label


    let tdCheckInput = document.createElement('input');
    let tdChecklabel = document.createElement('label');
    let tdErr = document.createElement('input');
    let tdErrLabel = document.createElement('label');
    
 // scope=row
    id = i + 1;
    selectItem.id = id;
    th.setAttribute('scope', 'row');
    th.textContent = id;// enumerar fila

    // Extraemos las propiedade
    tdStudent.textContent = selectItem.studentName;
    tdGender.textContent = selectItem.gender;
    tdBirthdate.textContent = selectItem.birthdate;
    tdEmail.textContent = selectItem.email;
    tdContact.textContent = selectItem.contact;
    tdAbsence.textContent = selectItem.absence;
    

    // Checkbox
    tdCheckInput.setAttribute('type', 'checkbox');
    tdCheckInput.classList.add('btn-check');
     // tdErr.setAttribute('name', `options-outlined${i}`);
    tdCheckInput.setAttribute('id', `btn-check-outlined${i}`);
    tdCheckInput.checked = true;
    tdChecklabel.classList.add('btn', 'btn-outline-success');
    tdChecklabel.setAttribute('for', `btn-check-outlined${i}`);
    tdChecklabel.textContent = '';

    tdErr.setAttribute('type', 'checkbox');
    tdErr.classList.add('btn-check');
    tdErr.setAttribute('id', `btn-check-outlined2${i}`);
    tdErr.setAttribute('autocomplete', 'off');
    tdErrLabel.classList.add('btn', 'btn-outline-danger');
    tdErrLabel.setAttribute('for', `btn-check-outlined2${i}`);
    tdErrLabel.textContent = 'Del'; 
    tdErrLabel.setAttribute('data-bs-toggle', 'tooltip');
    tdErrLabel.setAttribute('data-bs-placement', 'right');
    tdErrLabel.setAttribute('title', 'Use this check-box to delete an student. You should activate the checkbox and then click \'save\' button.');

    // Estructura html
    tableBody.appendChild(tr);
    tr.appendChild(th);
    tr.appendChild(tdStudent);
    tr.appendChild(tdGender);
    tr.appendChild(tdBirthdate);
    tr.appendChild(tdEmail);
    tr.appendChild(tdContact);
    tr.appendChild(tdAbsence);

    //Checkbox colum
    tdCheckColumn.appendChild(tdCheckInput);
    tdCheckColumn.appendChild(tdChecklabel);
    tr.appendChild(tdCheckColumn);

    //Del Colum
    tdErrorColumn.appendChild(tdErr);
    tdErrorColumn.appendChild(tdErrLabel);
    tr.appendChild(tdErrorColumn);

    setTimeout(() => {
        new bootstrap.Tooltip(tdErrLabel);
    }, 100);
  });
}

//Function to save information for Daily Report
let reportObject = {
    assists: 0,
    absence: 0,
    male: 0,
    female: 0
};

function saveAttendance(event) {
    let assists = 0;
    let absence = 0;
    let male = 0;
    let female = 0;

    for (let i = info.length - 1; i >= 0; i--) {
        let obj = info[i];
        let attendance = document.getElementById(`btn-check-outlined${i}`);
        let del = document.getElementById(`btn-check-outlined2${i}`);

        if (del.checked === true) {
            info.splice(i, 1);
            continue;
        }

        if (attendance.checked === true) {
            assists++;
        } else {
            obj.absence++;
            absence++;
        }

        if (obj.gender === 'M') {
            male++;
        } else if (obj.gender === 'F') {
            female++;
        }
    }
    
    //save the report in the local storage
    reportObject.assists = assists;
    reportObject.absence = absence;
    reportObject.male = male;
    reportObject.female = female;
    localStorage.setItem('reportObject', JSON.stringify(reportObject));
    localStorage.setItem('studentsArray', JSON.stringify(info));
    console.log('Array actualizado:', JSON.parse(localStorage.getItem('studentsArray')));
    console.log('Reporte actualizado:', JSON.parse(localStorage.getItem('reportObject')));
}

function goToStudentInfo(event) {
    const url = 'dailyreport.html';
    document.location.href = url;
}

saveButton = document.querySelector('#save');
saveButton.addEventListener('click', saveAttendance);

generateTable(info);
reportButton.addEventListener('click', goToStudentInfo);

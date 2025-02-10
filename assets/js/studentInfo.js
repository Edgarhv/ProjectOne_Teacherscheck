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
    // let tdPhoto = document.createElement('td'); //for photo
    let tdCheckInput = document.createElement('input');
    let tdChecklabel = document.createElement('label');
    let tdErr = document.createElement('input');
    let tdErrLabel = document.createElement('label');
    

    // scope=row
    id = i + 1;
    selectItem.id = id;
    th.setAttribute('scope', 'row');
    th.textContent = id; // enumerar fila

    // Extraemos las propiedades
    tdStudent.textContent = selectItem.studentName;
    // tdPhoto.textContent = selectItem.photo;
    tdGender.textContent = selectItem.gender;
    tdBirthdate.textContent = selectItem.birthdate;
    tdEmail.textContent = selectItem.email;
    tdContact.textContent = selectItem.contact;
    tdAbsence.textContent = selectItem.absence;
    tdErrLabel.textContent = 'Danger Radio';

    // Checkbox
    tdCheckInput.setAttribute('type', 'checkbox');
    tdCheckInput.classList.add('btn-check');
    tdCheckInput.setAttribute('id', `btn-check-outlined${i}`);
    tdCheckInput.checked = true;
    tdChecklabel.classList.add('btn', 'btn-outline-success');
    tdChecklabel.setAttribute('for', `btn-check-outlined${i}`);
    tdChecklabel.textContent = ''; // 

    tdErr.setAttribute('type', 'checkbox');
    tdErr.classList.add('btn-check');
    // tdErr.setAttribute('name', `options-outlined${i}`); 
    tdErr.setAttribute('id', `btn-check-outlined2${i}`);
    tdErr.setAttribute('autocomplete', 'off');
    tdErr.classList.add('btn-check');
    tdErrLabel.classList.add('btn', 'btn-outline-danger');
    tdErrLabel.setAttribute('for', `btn-check-outlined2${i}`);
    tdErrLabel.textContent = 'Del'; 

    // Estructura html
    tableBody.appendChild(tr);
    tr.appendChild(th);
    
    tr.appendChild(tdStudent);
    tr.appendChild(tdGender);
    tr.appendChild(tdBirthdate);
    tr.appendChild(tdEmail);
    tr.appendChild(tdContact);
    tr.appendChild(tdAbsence);

    // Checkbox column
    tdCheckColumn.appendChild(tdCheckInput);
    tdCheckColumn.appendChild(tdChecklabel);
    tr.appendChild(tdCheckColumn);

    // Del column
    tdErrorColumn.appendChild(tdErr);
    tdErrorColumn.appendChild(tdErrLabel);
    tr.appendChild(tdErrorColumn);
  });
}

//Function to save total number of assits, absence for Daily Report
let reportObject = {
    assits : Number,
    absence : Number
}
function saveAttendance(event) {
    assist = 0;    
    absence = 0;   
    //We have to iterate backwards so we don't have a problmen with the id because of the splice function
    for (let i = info.length - 1; i >= 0; i--) {
        let obj = info[i];
        let attendance = document.getElementById(`btn-check-outlined${i}`);
        let del = document.getElementById(`btn-check-outlined2${i}`);
        if (del.checked === true) {
            // console.log('Eliminando estudiante:', obj);
            info.splice(i, 1);  // eliminate actual element of the obj
            continue;  // next student, don't interate over this one
        }
        if (attendance.checked === true) {
            // console.log('es true');
            assist++;
        } else {
            obj.absence ++;  
            absence++;
        }
    }
    // Guardar el reporte en localStorage
    reportObject.assits = assist;
    reportObject.absence = absence;
    localStorage.setItem('reportObject', JSON.stringify(reportObject));
    // Guardar el array actualizado de estudiantes
    localStorage.setItem('studentsArray', JSON.stringify(info));
    console.log('Array actualizado:', JSON.parse(localStorage.getItem('studentsArray')));
}

function goToStudentInfo(event) {
    const url = 'dailyreport.html';
    document.location.href = url;
}

saveButton = document.querySelector('#save');
saveButton.addEventListener('click',saveAttendance);

generateTable(info);
reportButton.addEventListener('click', goToStudentInfo);

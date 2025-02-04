reportButton = document.getElementById('generateReport');
// console.log(JSON.parse(localStorage.getItem('studentsArray')));
let info = JSON.parse(localStorage.getItem('studentsArray')) || [];
console.log(info);

const tableBody = document.querySelector('#tableBody');

function generateTable(array) {
  array.forEach((selectItem, i) => {
    let tr = document.createElement('tr');
    let th = document.createElement('th');
    let tdStudent = document.createElement('td');
    let tdBirthdate = document.createElement('td');
    let tdEmail = document.createElement('td');
    let tdContact = document.createElement('td');
    let tdAbsence = document.createElement('td');
    let divCheck = document.createElement('div');
    let tdCheckInput = document.createElement('input');
    let tdChecklabel = document.createElement('label');
    console.log(selectItem.absence)
    // scope=row
    th.setAttribute('scope', 'row');
    th.textContent = i + 1; // enumerar fila
    // Extraemos las propiedades
    tdStudent.textContent = selectItem.studentName;
    tdBirthdate.textContent = selectItem.birthdate;
    tdEmail.textContent = selectItem.email;
    tdContact.textContent = selectItem.contact;
    tdAbsence.textContent = selectItem.absence;
    // Checkbox
    tdCheckInput.setAttribute('type', 'checkbox');
    tdCheckInput.classList.add('btn-check');
    tdCheckInput.setAttribute('id', `btn-check-outlined${i}`);
    tdCheckInput.checked = true; // predeterminado false
    tdChecklabel.classList.add('btn', 'btn-outline-success');
    tdChecklabel.setAttribute('for', `btn-check-outlined${i}`);

    // Estructura html
    tableBody.appendChild(tr);
    tr.appendChild(th);
    tr.appendChild(tdStudent);
    tr.appendChild(tdBirthdate);
    tr.appendChild(tdEmail);
    tr.appendChild(tdContact);
    tr.appendChild(tdAbsence);
    tr.appendChild(divCheck);
    divCheck.classList.add('form-check');
    divCheck.appendChild(tdCheckInput);
    divCheck.appendChild(tdChecklabel);
  });
}
const reportObject = {
    assits : Number,
    absence : Number
}
function saveAttendance (event) {
    i = 0;  //contador for loop
    assist = 0;    //assist counter
    absence = 0;    //absence counter
    //iterate over each cheackbutton
    for (i; i < info.length; i++) {
        obj = info[i];
        attendance = document.getElementById(`btn-check-outlined${i}`);
        if (attendance.checked == true){
            console.log('es true');
            assist ++;
        }
        else if(attendance.checked == false){
            obj.absence ++;
            absence ++;
        }
        else {
            console.log('No data for attendance');
        }
    }
    reportObject.assits = assist;
    reportObject.absence = absence;
    //Save reportObject {assits: #, absence : #} on Ls
    localStorage.setItem('reportObject', JSON.stringify(reportObject) || {});
    console.log(JSON.parse(localStorage.getItem('reportObject')))
    //Save updated absence studentsArray info value
    localStorage.setItem('studentsArray', JSON.stringify(info));
}
function goToStudentInfo(event) {
    // Supongamos que 'StudentInfo.html' está en la misma carpeta
    const url = 'dailyreport.html';
    document.location.href = url;
  }

saveButton = document.querySelector('#save');
saveButton.addEventListener('click',saveAttendance);
generateTable(info);
reportButton.addEventListener('click', goToStudentInfo);

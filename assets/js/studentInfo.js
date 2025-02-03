info = JSON.parse(localStorage.getItem('studentsArray'))
const tableBody = document.querySelector('#tableBody');
let tr = document.createElement('tr');
let th = document.createElement('th');
let tdStudent = document.createElement('td');
let tdBirthdate = document.createElement('td');

function generateTable (array) {
    arrayLength = array.length;
    i = 0
    for (i; i < arrayLength; i++ )  {
        //Select array index[i]
        selectItem = array[i];
        //Take the values in our object into an Array named valuesItem
        valuesItem = Object.values(selectItem)
        //Create all table row elements
        tr = document.createElement('tr');
        th = document.createElement('th');
        //Create td element by each column
        tdStudent = document.createElement('td');
        tdBirthdate = document.createElement('td');
        tdEmail = document.createElement('td');
        tdContact = document.createElement('td');
        tdAbsences = document.createElement('button');
        //set th Attributes
        th.setAttribute('scope', 'row');
        //set TextContents
        th.textContent = i + 1;
        tdStudent.textContent = valuesItem[0];
        tdBirthdate.textContent = valuesItem[1];
        tdEmail.textContent = valuesItem[2];
        tdContact.textContent = valuesItem[3];
        tdAbsences.textContent = '->';
        //appending childs
        tableBody.appendChild(tr);
        tr.appendChild(th);
        tr.appendChild(tdStudent);
        tr.appendChild(tdBirthdate);
        tr.appendChild(tdEmail);
        tr.appendChild(tdContact);
        tr.appendChild(tdAbsences);
    }
}

generateTable(info)
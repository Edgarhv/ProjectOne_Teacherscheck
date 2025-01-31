//Select the id's from querys
let studentName = document.getElementById('name');
let birthdate = document.getElementById('birthdate');
let email = document.getElementById('email');
let contact = document.getElementById('contact');
let saveButton = document.getElementById('saveStudent');
// Create an empty students array where will be save the students data
const studentsArray = JSON.parse(localStorage.getItem('studentsArray')) || [];

function saveStudentForm (event) {
    console.log('hi from the function saveStudentForm');
    studentInfo = {
        studentName : studentName.value,
        birthdate : birthdate.value,
        email : email.value,
        contact : contact.value
    }
    // console.log(studentInfo)
    studentsArray.push(studentInfo);
    console.log(studentsArray);
    localStorage.setItem('studentsArray', JSON.stringify(studentsArray));
    console.log('This is our locaStorage info: ');
    console.log(JSON.parse(localStorage.getItem('studentsArray')));
};

saveButton.addEventListener('click', saveStudentForm);




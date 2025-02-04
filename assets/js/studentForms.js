//Select the id's from querys
let studentName = document.getElementById('name');
let birthdate = document.getElementById('birthdate');
let email = document.getElementById('email');
let contact = document.getElementById('contact');
let saveButton = document.getElementById('saveStudent');
// Create an empty students array where will be save the students data
const studentsArray = JSON.parse(localStorage.getItem('studentsArray')) || [];
//select student info Button from html
let studentInfoBtn = document.getElementById('studentInfoBtn');

function saveStudentForm (event) {
    console.log('hi from the function saveStudentForm');
    let studentInfo = {
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

function goToStudentInfo (event) {
    url = '../pages/studentInfo.html';
    moveUrl(url);
};

function moveUrl (url) {
    document.location.href = (url);
}
saveButton.addEventListener('click', saveStudentForm);
studentInfoBtn.addEventListener('click', goToStudentInfo);




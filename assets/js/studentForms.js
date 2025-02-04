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
// Constants needed for validation
const isString = /^[a-zA-Z ]+$/;
const isDigit = /^\d{10}$/;
const emailSyntax = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g;

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

function notvalid() {
    if (!isString.test(studentName.value) || !emailSyntax.test(email.value) || (!isDigit.test(contact.value) && contact.value.length !== 10) || !birthdate.value) {
        return true;
    };
    return false;
};

function validationAlert() {
    const errorObject = {};

    if (!isString.test(studentName.value)) {
        errorObject.nameError = "\n - Enter a valid name"
    };
    if (!birthdate.value) {
        errorObject.dateError = "\n - Enter a valid date"
    };
    if (!emailSyntax.test(email.value)) {
        errorObject.emailError = "\n - Enter a valid e-mail"
    };
    if (!isDigit.test(contact.value)) {
        errorObject.contactError = "\n - Enter a valid number"
    };

    if (errorObject) {
        let errorText = "The following error(s) raised!"
        for (const key in errorObject) {
         errorText += errorObject[key]
        }
        alert(errorText)
    }
};

saveButton.addEventListener('click', function(){
    // Validation filter
    if (notvalid()) {
        validationAlert()
    } else {
    saveStudentForm();
    // Reset input value
    studentName.value = "";
    birthdate.value = "";
    email.value = "";
    contact.value = "";
    }
});

studentInfoBtn.addEventListener('click', goToStudentInfo);




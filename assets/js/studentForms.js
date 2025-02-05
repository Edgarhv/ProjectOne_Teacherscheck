const studentName = document.getElementById('name');
const birthdate = document.getElementById('birthdate');
const email = document.getElementById('email');
const contact = document.getElementById('contact');
const saveButton = document.getElementById('saveStudent');
const studentInfoBtn = document.getElementById('studentInfoBtn');

// Cargamos o creamos el array
const studentsArray = JSON.parse(localStorage.getItem('studentsArray')) || [];

=======
//select student info Button from html
let studentInfoBtn = document.getElementById('studentInfoBtn');
// Constants needed for validation
const isString = /^[a-zA-Z ]+$/;
const isDigit = /^\d{10}$/;
const emailSyntax = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g;



function saveStudentForm(event) {
  event.preventDefault();

  const studentInfo = {
    studentName: studentName.value,
    birthdate: birthdate.value,
    email: email.value,
    contact: contact.value,
    absence : 0
  };


  studentsArray.push(studentInfo);
  localStorage.setItem('studentsArray', JSON.stringify(studentsArray));
  console.log('localStorage ahora:', JSON.parse(localStorage.getItem('studentsArray')));
}

function goToStudentInfo (event) {
    url = '/Users/michelleguzman/Desktop/projects/ProjectOne_Teacherscheck/assets/pages/studentInfo.html';
    moveUrl(url);
};


function goToStudentInfo(event) {
  // Supongamos que 'StudentInfo.html' está en la misma carpeta
  const url = 'StudentInfo.html';
  document.location.href = url;
}


saveButton.addEventListener('click', saveStudentForm);
=======
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

const studentName = document.getElementById('name');
const birthdate = document.getElementById('birthdate');
const email = document.getElementById('email');
const contact = document.getElementById('contact');
const saveButton = document.getElementById('saveStudent');
const studentInfoBtn = document.getElementById('studentInfoBtn');
let countruns = 0
// Cargamos o creamos el array
const studentsArray = JSON.parse(localStorage.getItem('studentsArray')) || [];

// Constants needed for validation
const isString = /^[a-zA-Z ]+$/;
const isDigit = /^\d{10}$/;
// const emailSyntax = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const emailSyntax = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;


//We take the value on gender, if it == '1' it meas Male, if =='2' its Female
function saveStudentForm(event) {
//   event.preventDefault();
    if (gender.value == '1') {
        genderStr = 'M'
    } else if(gender.value == '2') {
        genderStr = 'F'
    } 

  const studentInfo = {
    studentName: studentName.value,
    birthdate: birthdate.value,
    email: email.value,
    contact: contact.value,
    gender: genderStr,
    absence : 0, 
    del : false
  };

  studentsArray.push(studentInfo);
  localStorage.setItem('studentsArray', JSON.stringify(studentsArray));
  console.log('localStorage ahora:', JSON.parse(localStorage.getItem('studentsArray')));
}


// function goToStudentInfo (event) {
//     url = '../pages/studentInfo.html';
//     moveUrl(url);
// };

function goToStudentInfo (event) {
    url = 'studentInfo.html';
    moveUrl(url);
};

function goToStudentInfo(event) {
  // Supongamos que 'StudentInfo.html' está en la misma carpeta
  const url = 'studentInfo.html';
  document.location.href = url;
}

// saveButton.addEventListener('click', saveStudentForm);

function notvalid() {
    console.log("");
    console.log(countruns,") inside notvalid:");
    console.log("name: ",!isString.test(studentName.value)," email: ", !emailSyntax.test(email.value)," number: ", !isDigit.test(contact.value)," date: ", !birthdate.value);
    if (gender.value === 1) {
        gender.value = 'male'
    } else if (gender.value === 2) {
        gender.value = 'female'
    }

    
    if (
        !isString.test(studentName.value) || 
        !emailSyntax.test(email.value) || 
        (!isDigit.test(contact.value) && contact.value.length !== 10) || 
        !birthdate.value ||
        gender.value === 1 ||
        gender.value === 2
    
    ) 
        {
        return true;

    };
    return false;
    
};

function validationAlert() {
    const errorObject = {};
    console.log(gender.value)
    // if (gender.value !== 1) {
    //     console.log('gender no es 1')

    // }

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
    if (gender.value != 1 && gender.value != 2) {
        errorObject.genderError = '\n - Gender no valido'
    } 
    if (Object.keys(errorObject).length) {
        console.log("errorObject: ",errorObject);
        
        let errorText = "The following error(s) raised!"
        for (const key in errorObject) {
         errorText += errorObject[key]
        }
        alert(errorText)
    }
};

saveButton.addEventListener('click', function(){
    console.log(notvalid());
    
    countruns ++
    // Validation filter
    if (notvalid()) {
        console.log("");
    console.log(countruns,") inside validalert:");
    console.log("name: ",!isString.test(studentName.value)," email: ", !emailSyntax.test(email.value)," number: ", !isDigit.test(contact.value)," date: ", !birthdate.value);
        validationAlert()
    } else {
    saveStudentForm();

    // Reset input value
    // studentName.value = "";
    // birthdate.value = "";
    // email.value = "";
    // contact.value = "";
    }
});

studentInfoBtn.addEventListener('click', goToStudentInfo);

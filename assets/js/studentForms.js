const studentName = document.getElementById('name');
const birthdate = document.getElementById('birthdate');
const email = document.getElementById('email');
const contact = document.getElementById('contact');
const saveButton = document.getElementById('saveStudent');
const studentInfoBtn = document.getElementById('studentInfoBtn');
const fileInput = document.getElementById('customFile2');
const teacherName = document.getElementById('teacherSpanId');
const closeButton = document.getElementById('closebutton');
const cancelButton = document.getElementById('cancelbutton');
const confirmButton = document.getElementById('savebutton');
const modalEl = document.getElementById('modalID');
const pElement = document.getElementById('pElement');

// Change teacher's name
teacherName.textContent = localStorage.getItem('teacherName');
// Cargamos o creamos el array
const studentsArray = JSON.parse(localStorage.getItem('studentsArray')) || [];

// Constants needed for validation
const isString = /^[a-zA-Z ]+$/;
const isDigit = /^\d{10}$/;
const emailSyntax = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const emailSyntax = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;


//We take the value on gender, if it == '1' it meas Male, if =='2' its Female

function saveStudentForm(event) {
//   event.preventDefault();
    if (gender.value == '1') {
        genderStr = 'M'
    } else if(gender.value == '2') {
        genderStr = 'F'
    } 
    // console.log('file value')
    // console.log(fileInput.value)
    // img = document.createElement('img');
    // img.Textcontent = fileInput.value
    // document.appendChild(img)
  const studentInfo = {
    studentName: studentName.value,
    birthdate: birthdate.value,
    email: email.value,
    contact: contact.value,
    gender: genderStr,
    // photo : new FileReader(fileInput.value),
    absence : 0, 
    del : false
  };

  studentsArray.push(studentInfo);
  localStorage.setItem('studentsArray', JSON.stringify(studentsArray));
  console.log('localStorage ahora:', JSON.parse(localStorage.getItem('studentsArray')));

  // Reset input value
  studentName.value = "";
  birthdate.value = "";
  email.value = "";
  contact.value = "";
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
    if (
        !isString.test(studentName.value) || 
        !emailSyntax.test(email.value) || 
        !isDigit.test(contact.value) || 
        !birthdate.value
    ) 
    {
        return true;
    };
        return false;
};

function validationAlert() {
    const errorObject = {};

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
        errorObject.genderError = '\n - Enter valid gender'
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

// Display selected IMG
function displaySelectedImage(event, elementId) {
    const selectedImage = document.getElementById(elementId);
    const fileInput = event.target;

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            selectedImage.src = e.target.result;
        };

        reader.readAsDataURL(fileInput.files[0]);
    }
}

saveButton.addEventListener('click', function(){
    // Validation filter
    if (notvalid()) {
        validationAlert();
    } else {
        modalEl.setAttribute('style','display:block');
        pElement.textContent = "Confirm changes?"
        confirmButton.setAttribute('style','display:block;');
        cancelButton.setAttribute('style','display:block;');
    
    }
});

confirmButton.addEventListener('click', function(){    
    saveStudentForm();
    pElement.textContent = "Changes confrimed ✅"
    cancelButton.setAttribute('style','display:none;');
    confirmButton.setAttribute('style','display:none;');
});

closeButton.addEventListener('click',function () {
modalEl.setAttribute('style','display:none;');
})
cancelButton.addEventListener('click',function () {
modalEl.setAttribute('style','display:none;');
})

studentInfoBtn.addEventListener('click', goToStudentInfo);

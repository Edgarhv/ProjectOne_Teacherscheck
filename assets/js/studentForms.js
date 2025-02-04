const studentName = document.getElementById('name');
const birthdate = document.getElementById('birthdate');
const email = document.getElementById('email');
const contact = document.getElementById('contact');
const saveButton = document.getElementById('saveStudent');
const studentInfoBtn = document.getElementById('studentInfoBtn');

// Cargamos o creamos el array
const studentsArray = JSON.parse(localStorage.getItem('studentsArray')) || [];

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

function goToStudentInfo(event) {
  // Supongamos que 'StudentInfo.html' está en la misma carpeta
  const url = 'StudentInfo.html';
  document.location.href = url;
}

saveButton.addEventListener('click', saveStudentForm);
studentInfoBtn.addEventListener('click', goToStudentInfo);

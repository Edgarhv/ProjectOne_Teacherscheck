document.getElementById('loginButton').addEventListener('click', function() {
    // Lista de maestros permitidos
    const teachers = ['Michelle', 'William', 'Luis', 'Edgar']; // Asegúrate de que estos nombres estén correctos
    
    // Obtener el nombre del maestro ingresado y quitar los espacios al principio y al final
    const teacherName = document.getElementById('teacherName').value.trim();
    
    console.log('Nombre ingresado:', teacherName); // Muestra el nombre ingresado en la consola

    // Validar que el nombre esté en la lista de maestros
    if (teachers.includes(teacherName)) {
        // Si el nombre es válido, redirigir a la página de estudiantes
        window.location.href = 'student_form.html'; // Asegúrate de que esta ruta sea correcta
    } else {
        // Si el nombre no es válido, mostrar un mensaje de error
        console.log('No valid Name'); // Muestra en consola que el nombre no es válido
        alert('The Teacher Name is not valid. Please enter a correct name.');
    }
});

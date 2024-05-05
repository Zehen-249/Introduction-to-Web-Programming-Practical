function validateForm() {
    let fName = document.getElementById('fName').value;
    let lName = document.getElementById('lName').value;
    let rollno = document.getElementById('rollno').value;
    let address = document.getElementById('address').value;
    let year = document.querySelector('input[name="year"]:checked');
    let courses = document.querySelectorAll('input[name="courses"]:checked');
    
    if (fName.trim() == '' || lName.trim() == '' || rollno.trim() == '' || address.trim() == '' || year == null || courses.length === 0){
        alert('Please fill out all fields');
        return false;
    }
    alert('Form Submited')
    return true;
}
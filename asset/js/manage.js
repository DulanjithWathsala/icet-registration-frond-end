

function searchStudent() {
    const email = document.getElementById("email").value;

    fetch(`http://localhost:8080/student?email=${email}`)
        .then(res => res.json())
        .then(data => {
            displayStudent(data);
        })
        .catch(error => {
            clear();
            console.log(error);
            alert("Student not found...");
        })
}


function deleteStudent() {
    const email = document.getElementById("email").value;

    if (confirm("Are you sure you want to delete this student?")) {
        fetch(`http://localhost:8080/student?email=${email}`, {
            method: "DELETE"
        })
            .then(() => {
                clear();
                document.getElementById("btn-delete").disabled = true;
                document.getElementById("email").value = "";

                const toastLiveExample = document.getElementById('liveToast');
                const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
                toastBootstrap.show();
            })
    }
}


function displayStudent(data) {
    document.getElementById("firstName").value = data.firstName;
    document.getElementById("lastName").value = data.lastName;
    document.getElementById("dob").value = data.dob;
    document.getElementById("nationality").value = data.nationality;
    document.getElementById("gender").value = data.gender;
    document.getElementById("phoneNum").value = data.phoneNum;

    document.getElementById("btn-delete").disabled = false;
}

function clear() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("nationality").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("phoneNum").value = "";

    document.getElementById("btn-delete").disabled = true;
}
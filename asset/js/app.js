function loadingScreen() {
    // Show loading screen
    document.getElementById("loadingScreen").style.display = "flex";

    setTimeout(function () {
        // Hide loading screen
        document.getElementById("loadingScreen").style.display = "none";


        const toastLiveExample = document.getElementById('liveToast');
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
        toastBootstrap.show();

        clearInputFields();
    }, 1000); // Simulate 1-second network request
}

function clearInputFields() {
    document.getElementById("txt-first-name").value = "";
    document.getElementById("txt-last-name").value = "";
    document.getElementById("input-date").value = "";
    document.getElementById("txt-nationality").value = "";
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById("email").value = "";
    document.getElementById("phone-num").value = "";
}


function submitStudent() {

    let requestBody = {
        "firstName": undefined,
        "lastName": undefined,
        "dob": undefined,
        "nationality": undefined,
        "gender": undefined,
        "email": undefined,
        "phoneNum": undefined
    }

    requestBody.firstName = document.getElementById("txt-first-name").value;
    requestBody.lastName = document.getElementById("txt-last-name").value;
    requestBody.dob = document.getElementById("input-date").value;
    requestBody.nationality = document.getElementById("txt-nationality").value;
    requestBody.gender = document.querySelector('input[name="gender"]:checked').value;
    requestBody.email = document.getElementById("email").value;
    requestBody.phoneNum = document.getElementById("phone-num").value;

    fetch("http://localhost:8080/student", {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
            "Content-type": "application/json"
        }
    })
        .then(() => {
            loadingScreen();
        })
}



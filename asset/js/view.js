

function populateTable() {
    fetch("http://localhost:8080/students")
        .then(res => res.json())
        .then(data => {
            let table = document.getElementById("tableBody");

            for (let index = 0; index < data.length; index++) {
                let row = `<tr>
                                <td>${data[index].studentId}</td>
                                <td>${data[index].firstName}</td>
                                <td>${data[index].lastName}</td>
                                <td>${data[index].dob}</td>
                                <td>${data[index].nationality}</td>
                                <td>${data[index].gender}</td>
                                <td>${data[index].email}</td>
                                <td>${data[index].phoneNum}</td>
                          </tr>`;

                table.innerHTML += row;
            }
        })

}

document.addEventListener("DOMContentLoaded", function () {
    populateTable();
})
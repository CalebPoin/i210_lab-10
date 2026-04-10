fetch("student.json")
  .then(response => response.json())
  .then(data => {

    let container = document.getElementById("student-container");

    for (let i = 0; i < data.length; i++) {
        let student = data[i];

        let text = `<div class = "text" > <p> ${student.name} </p> <p> Major: ${student.major} </p> <p> Grade: ${student.grade} </p> </div>`;

        container.innerHTML += text;
    }

  });
let employees = [];
function startAction() {
    let name = document.querySelector("#name").value.trim();
    let profession = document.querySelector("#profession").value.trim();
    let age = document.querySelector("#age").value.trim();
    let error = document.querySelector(".error");
    let success = document.querySelector(".success");
    let start = document.querySelector(".start");

    console.log("Hello");

    if ((profession === '') || (name === '') || (age === '')) {
        error.innerText = "Error: Please Make sure All the fields are filled before adding in an employee !";
        success.innerText = "";
        return;
    }

    success.innerText = "Success: Employee Added !";
    error.innerText = "";

    let id = employees.length + 1;

    let employee = { id, name, profession, age };

    employees.push(employee);

    document.querySelector("#name").value = '';
    document.querySelector("#profession").value = '';
    document.querySelector("#age").value = '';

    if(employees.length>0){
        start.innerText='';
    }
    
    updateList();
}
function updateList() {
    let list = document.querySelector("#list");
    list.innerHTML = '';
    employees.forEach((employees) => {
        let li = document.createElement('li');
        li.className = 'employeeAdded';
        li.textContent = `Name:${employees.name} Profession:${employees.profession} Age:${employees.age}`;
        let delbtn = document.createElement('button');
        delbtn.className = 'removebtn';
        delbtn.textContent = 'Delete User';
        delbtn.onclick = () => delEmployee(employee.id);
        li.appendChild(delbtn);
        list.appendChild(li);
    });
}
function delEmployee(id) {
    let index = employees.findIndex((employees) => employees.id === id);
    if (index !== -1) {
        employees.splice(index, 1);
        updateEmployeeList();
    }
    if(employees.length=0){
        start.innerText='You have 0 Employees.';
    }
}
let employees = [];
function startAction() {
const name = document.querySelector("#name").value.trim();
const profession = document.querySelector("#profession").value.trim();
const age = document.querySelector("#age").value.trim();
const error = document.querySelector(".error");
const success = document.querySelector(".success");
const start = document.querySelector(".start");
if (profession === '' || name === '' || age === '') {
error.innerText = "Error: Please make sure all fields are filled before adding an employee!";
success.innerText = "";
 return;
}
success.innerText = "Success: Employee added!";
error.innerText = "";
const id = employees.length + 1;
const employee = { id, name, profession, age };
employees.push(employee);
document.querySelector("#name").value = '';
document.querySelector("#profession").value = '';
document.querySelector("#age").value = '';
if (employees.length > 0) {
start.innerText = '';
}
    updateList();
}

function updateList() {
    const list = document.querySelector("#list");
    if (employees.length < 1) {
        document.querySelector(".start").textContent = 'You have 0 Employees.';
        document.querySelector(".error").textContent ='';
        document.querySelector(".success").textContent='';
    }
    list.innerHTML = '';
    employees.forEach((employee) => {
        const li = document.createElement('li');
        li.className = 'employeeAdded';
        li.textContent = `Name: ${employee.name}   Profession: ${employee.profession}   Age: ${employee.age}`;
        const delbtn = document.createElement('button');
        delbtn.className = 'removebtn';
        delbtn.textContent = 'Delete User';
        delbtn.onclick = () => delEmployee(employee.id);
        li.appendChild(delbtn);
        list.appendChild(li);
    });
}
function delEmployee(id) {
    const index = employees.findIndex((emp) => emp.id === id);
    if (index !== -1) {
        employees.splice(index, 1);
        updateList();
    }
}

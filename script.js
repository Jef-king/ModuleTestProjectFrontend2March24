let employees=[];
function startAction(){
    let name=document.querySelector("#name").value.trim();
    let profession=document.querySelector("#profession").value.trim();
    let age=document.querySelector("#age").value.trim();
    let error=document.querySelector(".error");
    let success=document.querySelector(".success");
    console.log("Hello");
    if((profession==='')||(name==='')||(age==='')){
        error.innerText="Error: Please Make sure All the fields are filled before adding in an employee !";
        success.innerText="";
    }else{
        success.innerText="Success: Employee Added !";
        error.innerText="";
    }

}
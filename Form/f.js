const user = document.querySelector(".form-group");
const form = document.querySelector("form");
user.addEventListener("mouseenter" , function(e){
    user.style.color = "red";
})
form.addEventListener("submit" , function(e){
    e.preventDefault();
    const isrequired = checkrequired([user,email ,pass , cpass]);
} );
function checkrequired(inputarray){
let isvalid = true;
inputarray.forEach(element => {
    if(element.value.trim() === ""){
        showError(element , `$formatFieldName{element} is required`);
        isvalid = false;

    }else{
        showSuccess(element);
    }
    return isvalid;
});
function formatFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};
}

const email = document.querySelector("#email");
const pass = document.querySelector("#pass");
const cpass = document.querySelector("#cpass");

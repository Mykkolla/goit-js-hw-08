import throttle from 'lodash.throttle';
const FEEDBACKITEM = "feedback-form-state";

const formMain = document.querySelector('.feedback-form');
const formInput = document.querySelector('.feedback-form input');
const formText = document.querySelector('.feedback-form textarea');



formMain.addEventListener('input', throttle(hendlerFormInput, 500));
formMain.addEventListener('submit', hendSubmitForm);


const inputEx = {};

function hendlerFormInput (e) {   
const { target: inputallForm } = e;
if (formInput.value === '' && formText.value === "") {
    localStorage.removeItem(FEEDBACKITEM);
}
else {
    inputEx[inputallForm.name] = inputallForm.value
    localStorage.setItem(FEEDBACKITEM, JSON.stringify(inputEx));
}  
}


// const inputEx = {
//     email: formInput.value,
//     message: formText.value
// };


function hendSubmitForm (e) {
    e.preventDefault();
    if (formInput.value.trim() === "" || formText.value === '') {
        alert("Введите данные!");
        return;
      }
    console.log(inputEx);
    e.target.reset();
    localStorage.removeItem(FEEDBACKITEM);
}
returnTextereaForm();

function returnTextereaForm () {
    const localGet = localStorage.getItem(FEEDBACKITEM); 
    if (localGet) {
        const parsedSettings = JSON.parse(localGet);
        formText.value = parsedSettings.message;
        formInput.value = parsedSettings.email;
    }
}
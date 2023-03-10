import throttle from 'lodash.throttle';
const FEEDBACKITEM = "feedback-form-state";

const formMain = document.querySelector('.feedback-form');
const formInput = document.querySelector('.feedback-form input');
const formText = document.querySelector('.feedback-form textarea');



formMain.addEventListener('input', throttle(hendlerFormInput, 1000));
formMain.addEventListener('submit', hendSubmitForm);


const inputEx = {};

function hendlerFormInput (e) {   
const { target: inputallForm } = e;
inputEx[inputallForm.name] = inputallForm.value
localStorage.setItem(FEEDBACKITEM, JSON.stringify(inputEx));
}

function hendSubmitForm (e) {
    e.preventDefault();
    if (formInput.value.trim() === "") {
        alert("Введите данные!");
        return false;
      }
      console.log(inputEx);
    e.target.reset();
    localStorage.removeItem(FEEDBACKITEM);

}
returnTextereaForm();

function returnTextereaForm () {
    const localGet = localStorage.getItem(FEEDBACKITEM); 
    const parsedSettings = JSON.parse(localGet);

    if (parsedSettings) {
        formText.value = parsedSettings.message;
        formInput.value = parsedSettings.email;
    }
    formText.value = "type message";
    formInput.value = "type email";


}
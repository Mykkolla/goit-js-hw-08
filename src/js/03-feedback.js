import throttle from 'lodash.throttle';
const FEEDBACKITEM = "feedback-form-state";

const formMain = document.querySelector('.feedback-form');
const formInput = document.querySelector('.feedback-form input');
const formText = document.querySelector('.feedback-form textarea');



formMain.addEventListener('input', throttle(hendlerFormInput, 500));
formMain.addEventListener('submit', hendSubmitForm);

// const inputEx = {};



function hendlerFormInput (e) {   
// const { target: inputallForm } = e;
// inputEx[inputallForm.name] = inputallForm.value
const inputEx = {
    email: formInput.value,
    message: formText.value
};
return localStorage.setItem(FEEDBACKITEM, JSON.stringify(inputEx));
}


function hendSubmitForm (e) {
    e.preventDefault();
    // if (formInput.value.trim() === "" || formText.value === '') {
    //     alert("Введите данные!");
    //     return;
    //   }
    const formData = {
        email: formInput.value,
        message: formText.value,
      };
      console.log(formData);
    localStorage.removeItem(FEEDBACKITEM);
    e.target.reset();
    formInput.value = '';
    formText.value = '';
    
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

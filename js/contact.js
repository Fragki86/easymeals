/*------------------------  Contact Form variables -----------------------------*/
const form = document.querySelector("#contact-form");
const Name = document.querySelector("#name");
const NameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const content = document.querySelector("#content");
const contentError = document.querySelector("#contentError");
const button = document.querySelector("button");
const success = document.querySelector("#success-message");


/*------------------------  Newsletter Form variables -----------------------------*/
const newsLetterForm = document.querySelector("#newsletter-form");
const emailNewsletter = document.querySelector("#email-newsletter");
const emailNewsletterError = document.querySelector("#email-newsletterError");
const submitMail = document.querySelector("#sign-up-button");




/*------------------------   Event Listeners -----------------------------*/
form.addEventListener("submit", formValidation);
newsLetterForm.addEventListener("submit", newsLetterValidation);



/*------------------------   Contact form functions -----------------------------*/
function checkLength (value, letters) {
    if (value.trim().length > letters) {
        return true;
    } else {
        return false;
    }
}


function checkEmail (email) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailCheck = regEx.test(email);
    return emailCheck
}



function formValidation(event) {
    event.preventDefault();

    if (checkLength(Name.value, 4) === true) {
        NameError.style.display = "none";
    } else {
        NameError.style.display = "block";
    }

    if (checkLength(content.value, 24) === true) {
        contentError.style.display = "none";
    } else {
        contentError.style.display = "block";
    }

    if (checkEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(subject.value, 14) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }
        
    if (checkLength(Name.value, 4) && checkLength(content.value, 25) && checkEmail(email.value) && checkLength(subject.value, 15)) {
        success.style.display = "flex";
        form.reset();        
    } else {
        success.style.display = "none";
    }
}



/*------------------------   Clear Document Function -----------------------------*/

document.addEventListener('mouseup', clear)

function clear() {
    const clickToRemove = document.querySelector("#success-message");
    if (!clickToRemove.contains(clear.target)) {
        clickToRemove.style.display = 'none';
    }
};



/*------------------------  Newsletter validation -----------------------------*/
function newsLetterValidation(event) {
    event.preventDefault();

    if (checkEmail(emailNewsletter.value) === true) {
        emailNewsletterError.style.display = "none";
        
    } else {
        emailNewsletterError.style.display = "block";
    }



    if (checkEmail(emailNewsletter.value)) {
        newsLetterForm.reset();
        submitMail.style.backgroundColor = "green";
        submitMail.innerText = "Welcome";
        submitMail.disabled = true; 
    }
}

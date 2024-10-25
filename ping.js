document.getElementById('submit-button').addEventListener('click',function (e) {

    e.preventDefault();

    const email=document.getElementById('email');
    const warningMessage=document.querySelector('p');
    const mainContent=document.querySelector('main');
    const succeedMessage=document.querySelector('.succeed');

    warningMessage.style.display = 'none';
    email.classList.remove('error-border');

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailPattern.test(email.value)) {

        warningMessage.style.display = 'block';
        email.classList.add('error-border');
        
    } else {

        mainContent.style.display = 'none';
        succeedMessage.style.display = 'block';
        
    }
    
})
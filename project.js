const questionBody = document.querySelectorAll('.faq-question-body');
const openBtn = document.querySelectorAll('.open');
const closeBtn = document.querySelectorAll('.close');

questionBody.forEach(question => {
    question.classList.remove('active');
});

openBtn.forEach(open =>{
    open.addEventListener('click', (e)=>{
        const btn = e.currentTarget;
        const displayAnswer = e.currentTarget.parentElement.parentElement.nextElementSibling;
        const displayCloseBtn = e.currentTarget.nextElementSibling;
        
        questionBody.forEach(question => {
            question.classList.remove('active');
        });
        openBtn.forEach(otherOpen => {
            otherOpen.style.display = 'block';  // Show all open buttons
        });
        
        closeBtn.forEach(otherClose => {
            otherClose.style.display = 'none';  // Hide all close buttons
        });
        
        displayCloseBtn.style.display = 'block';
        displayAnswer.classList.add('active');
        btn.style.display = 'none'
        

       
    })
})

closeBtn.forEach(close =>{
    close.addEventListener('click', (e)=>{
        const btn = e.currentTarget;
        const hideAnswer = e.currentTarget.parentElement.parentElement.nextElementSibling;
        const displayOpenBtn = e.currentTarget.previousElementSibling;

        hideAnswer.classList.remove('active');
        displayOpenBtn.style.display = 'block';
        btn.style.display = 'none'
        
    })
})
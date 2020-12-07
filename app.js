var input_email = document.querySelector('.input-em');
var label_email = document.querySelector('.label-in');
var banner_area = document.querySelector('.banner-area')


input_email.addEventListener('focus',()=>{
    label_email.classList.add('special');
})

input_email.addEventListener('focusout',()=>{
    if(label_email.classList.contains('special')){
        label_email.classList.remove('special')
    }
})


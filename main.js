const name = document.querySelector('.name')
const cardNameElement = document.querySelector('.card-name')
const cardNameElementMobile = document.querySelector('.card-name-mobile')
const cardNumber = document.querySelector('.card-number')
const cardNum = document.querySelector('.card-num')
const cardNumMobile = document.querySelector('.card-num-mobile')
const mm = document.querySelector('.mm')
const month = document.querySelector('.month')
const monthMobile = document.querySelector('.month-mobile')
const yy = document.querySelector('.yy')
const year = document.querySelector('.year')
const yearMobile = document.querySelector('.year-mobile')
const cv = document.querySelector('.cv')
const cvcNumber = document.querySelector('.cvc-number')
const cvcNumberMobile = document.querySelector('.cvc-number-mobile')

const nameActive = document.querySelector('.name-active')
const numActive = document.querySelector('.num-active')
const mmActive = document.querySelector('.mm-active')
const cvcActive = document.querySelector('.cvc-active')

const confirmButton = document.querySelector('.confirm-btn')
const continueButton = document.querySelector('.continue-btn')
const completedState = document.querySelector('.completed-state-right')
const form = document.querySelector('form')

cv.maxLength = "3";
name.maxLength = "25"
cardNumber.maxLength = "19"
mm.maxLength = "2"
yy.maxLength = "2"





const formValidate = () => {
    if (name.value == '') {
        nameActive.classList.remove('hidden')
    } else if (name.value !== '') {
        nameActive.classList.add('hidden')
    }
    if (cardNumber.value == '' || cardNumber.value.length < 19) {
        numActive.classList.remove('hidden')
    } else if (cardNumber.value !== '') {
        numActive.classList.add('hidden')
    }
    if (mm.value == '' || yy.value == '') {
        mmActive.classList.remove('hidden')
    } else if (mm.value !== '' && yy.value !== '') {
        mmActive.classList.add('hidden')
    }
    if (cv.value == '' || cv.value.length < 3) {
        cvcActive.classList.remove('hidden')
    } else if (cv.value !== '') {
        cvcActive.classList.add('hidden')
    }
    if (name.value !== '' && cardNumber.value !== '' && mm.value !== '' && cv.value !== '') {
        form.classList.add('hidden')
        completedState.classList.remove('hidden')
    }
}

const continueBtn = () => {
    location.reload(true)
}

confirmButton.addEventListener('click', formValidate)
continueButton.addEventListener('click', continueBtn)

name.addEventListener('input', function (e) {
    const input = e.target.value.replace(/[^A-Za-z\s]/g, ''); // Remove all non-numeric characters
    e.target.value = input;
    cardNameElement.textContent = input.toUpperCase();
    cardNameElementMobile.textContent = input.toUpperCase();
});


cardNumber.addEventListener('input', function (e) {
    const input = e.target.value.replace(/\D/g, ''); // Remove all non-letter characters
    const formattedInput = input.replace(/(\d{4})(?=\d)/g, '$1 '); // add spaces every 4 digits
    e.target.value = formattedInput;
    cardNum.textContent = formattedInput;
    cardNumMobile.textContent = formattedInput;
});

mm.addEventListener('input', (e) => {
    const input = e.target.value.replace(/\D/g, ''); // Remove all non-letter characters
    e.target.value = input;
    month.textContent = input.toUpperCase();
    monthMobile.textContent = input.toUpperCase();
    if (input > 12) {
        month.textContent = '00'
        monthMobile.textContent = '00'
    }
})

yy.addEventListener('input', (e) => {
    const input = e.target.value.replace(/\D/g, ''); // Remove all non-letter characters
    e.target.value = input;
    year.textContent = input.toUpperCase();
    yearMobile.textContent = input.toUpperCase();
})

cv.addEventListener('input', (e) => {
    const input = e.target.value.replace(/\D/g, ''); // Remove all non-letter characters
    e.target.value = input;
    cvcNumber.textContent = input.toUpperCase();
    cvcNumberMobile.textContent = input.toUpperCase();
})
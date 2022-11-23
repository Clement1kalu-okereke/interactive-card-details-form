const cardHolderName = document.querySelector('#cardHolderName')
const cardNumber = document.querySelector('#cardNumber')
const monthInput = document.querySelector('#month')
const yearInput = document.querySelector('#year')
const cvcInput = document.querySelector('#cvcInput')

const cardNumberHolder = document.querySelector('.cardNumber')
const nameHolder = document.querySelector('.name')
const monthHolder = document.querySelector('.month')
const yearHolder = document.querySelector('.year')
const cvcHolder = document.querySelector('.cvc')


const formEl = document.querySelector('.details')

cardHolderName.addEventListener('keyup', (e) => {
    if (e.target.value) {
        nameHolder.innerText = e.target.value.toUpperCase()
    }
    else {
        nameHolder.innerText = 'JANE APPLESEED'
    }
})

cardNumber.addEventListener('keyup', (e) => {
    if (e.target.value) {
        cardNumberHolder.innerText = e.target.value
        if (e.target.value.length > 0) {
            if (
                e.target.value.length === 4 ||
                e.target.value.length === 9 ||
                e.target.value.length === 14
            ) {
                e.target.value += ' '
            }
        }
    } else {
        cardNumberHolder.innerText = '0000 0000 0000 0000'
    }
})

cvcInput.addEventListener('keyup', (e) => {
    if (e.target.value) {
        cvcHolder.innerText = e.target.value
    } else {
        cvcHolder.innerText = '000'
    }
})

monthInput.addEventListener('keyup', (e) => {
    if (e.target.value) {
        monthHolder.innerText = e.target.value
    } else {
        monthHolder.innerText = '00'
    }
})
yearInput.addEventListener('keyup', (e) => {
    if (e.target.value) {
        yearHolder.innerText = e.target.value
    } else {
        yearHolder.innerText = '00'
    }
})

formEl.addEventListener('submit', (e) => {
    let submitReadyMonth = false
    let submitReadyYear = false
    let submitReadynumber = false
    // let submitReadyname = false
    let submitReadycvc = false
    let submitReadyGeneral = false
    e.preventDefault()
    //Check if month and year input fields are blank
    if (!monthInput.value || !yearInput.value) {
        document.querySelector('fieldset').children[3].style.display = 'block'
        if (!monthInput.value) {
            monthInput.style.borderColor = 'var(--Red-input-errors)'
        } else {
            monthInput.style.borderColor = 'none'
        }
        if (!yearInput.value) {
            yearInput.style.borderColor = 'var(--Red-input-errors)'
        } else {
            yearInput.style.borderColor = 'none'
        }
    } else {
        document.querySelector('fieldset').children[3].style.display = 'none'

        submitReadyMonth = true
        submitReadyYear = true
    }

    //Check if cvc Input is blank
    if (!cvcInput.value) {
        cvcInput.nextElementSibling.style.display = 'block'
        cvcInput.style.borderColor = 'var(--Red-input-errors)'
    } else {
        cvcInput.nextElementSibling.style.display = 'none'
        let regularExp = /^\d+$/
        let cvcInputValue = cvcInput.value
        // console.log(regularExp.test(cvcInputValue))

        if (!regularExp.test(cvcInputValue)) {
            cvcInput.style.borderColor = 'var(--Red-input-errors)'
            cvcInput.nextElementSibling.style.display = 'block'
            cvcInput.nextElementSibling.innerText = 'Wrong Format'
        }
        submitReadycvc = true;
    }


    //Check  the format of the cardNumber if it contains alphabets
    let digitRegExp = /^\d+$/
    let cardNumberValueNoWhiteSpace = cardNumber.value.replace(/\s/g, '')

    if (!digitRegExp.test(cardNumberValueNoWhiteSpace)) {
        cardNumber.style.borderColor = 'var(--Red-input-errors)'
        cardNumber.nextElementSibling.style.display = 'block'
        cardNumber.nextElementSibling.innerText = 'Wrong Format'
    } else {
        cardNumber.style.borderColor = 'none'
        cardNumber.nextElementSibling.style.display = 'none'
        submitReadynumber = true;
    }


    if (
        submitReadyMonth &&
        submitReadyYear &&
        submitReadycvc &&
        submitReadynumber
    ) {
        submitReadyGeneral = true
    } else {
        submitReadyGeneral = false
    }

    if (
        cardHolderName.value &&
        cardNumber.value &&
        monthInput.value &&
        yearInput.value &&
        cvcInput.value &&
        submitReadyGeneral
    ) {
        console.log('Thanks')
        console.log(formEl)
        formEl.innerHTML = `
            <img src='/images/icon-complete.svg' class='complete-icon' />
            <div class='thank-you'>
                <h1>Thank You</h1>
                <p>We've added your card details</p>
                <button class="continue"  onclick="window.location='/' " >Continue</button>
            </div>
            `
        formEl.style.alignItems = 'center'
    }

})



// worrywart
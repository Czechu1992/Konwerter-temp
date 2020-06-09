const input = document.querySelector('#input');
const unit = document.querySelector('#unit');
const roundSelect = document.querySelector('#round');
const convertBtn = document.querySelector('.convert');
const resetBtn = document.querySelector('.reset');
const resoult = document.querySelector('.resoult');

const kRosoult = document.querySelector('.kRosoult');
const CRosoult = document.querySelector('.CRosoult');
const FRosoult = document.querySelector('.FRosoult');


const checkForm = () => {
    inputValue = input.value;
    unitValue = unit.value;

    if (inputValue != '' && unitValue != 0) {
        clearError();
        convert(inputValue, unitValue);
    } else if (inputValue == '' && unitValue == 0) {
        input.classList.add('error');
        unit.classList.add('error');
    } else if (inputValue == '' && unitValue !== 0) {
        input.classList.add('error');
        unit.classList.remove('error');
    } else {
        unit.classList.add('error');
        input.classList.remove('error');
    }
}

const convert = (inputValue, unitValue) => {

    if (unitValue === 'kelvin') {
        k = parseFloat(inputValue);
        c = k - 273.15;
        f = (k * 1.8) - 459.67;
        
        kRosoult.innerText = round(k);
        CRosoult.innerText = round(c);
        FRosoult.innerText = round(f);
        resoult.classList.add('show', 'animate__animated', 'animate__fadeIn');

    } else if (unitValue === 'celsius') {
        c = parseFloat(inputValue);
        k = c + 273.15;
        f = (c * 1.8) + 32;
        
        kRosoult.innerText = round(k);
        CRosoult.innerText = round(c);
        FRosoult.innerText = round(f);
        resoult.classList.add('show', 'animate__animated', 'animate__fadeIn');

    } else if (unitValue === 'fahrenheit') {
        f = parseFloat(inputValue);
        c = (f - 32) / 1.8;
        k = (f + 459.67) * (5 / 9);

        kRosoult.innerText = round(k);;
        CRosoult.innerText = round(c);;
        FRosoult.innerText = round(f);;
        resoult.classList.add('show', 'animate__animated', 'animate__fadeIn');
    }
}

const clearAll = () => {
    input.value = '';
    unit.value = 0;
    roundSelect.value = 0;
    clearError()
    resoult.classList.remove('show', 'animate__animated', 'animate__fadeIn')
}

const clearError = () => {
    input.classList.remove('error');
    unit.classList.remove('error');
}

const round = n => {
    if (roundSelect.value == 0) {
        return n.toFixed((roundSelect.value));
    } else {
        return n.toFixed((roundSelect.value - 1));
    }
}

convertBtn.addEventListener('click', checkForm);
resetBtn.addEventListener('click', clearAll);
let defaultValue1 = 0;

document.getElementById('btn-count-1').addEventListener('click', function () {
    const countField = document.getElementById('count-field-1');
    defaultValue1++;
    countField.innerText = defaultValue1;
})
document.getElementById('reset-btn-1').addEventListener('click', function () {
    const countField = document.getElementById('count-field-1');
    defaultValue1 = 0;
    countField.innerText = '0';
})

let defaultValue2 = 0;
document.getElementById('btn-count-2').addEventListener('click', function () {
    const countField = document.getElementById('count-field-2');
    defaultValue2++;
    countField.innerText = defaultValue2;
})
document.getElementById('reset-btn-2').addEventListener('click', function () {
    const countField = document.getElementById('count-field-2');
    defaultValue2 = 0;
    countField.innerText = '0';
})


let defaultValue3 = 0;
document.getElementById('btn-count-3').addEventListener('click', function () {
    const countField = document.getElementById('count-field-3');
    defaultValue3++;
    countField.innerText = defaultValue3;
})
document.getElementById('reset-btn-3').addEventListener('click', function () {
    const countField = document.getElementById('count-field-3');
    defaultValue3 = 0;
    countField.innerText = '0';
})


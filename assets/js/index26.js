document.addEventListener('DOMContentLoaded', function() {
    let inpt1 = document.getElementById('input1');
    inpt1.addEventListener('input', function() {
        document.querySelector('.numbers-on-card').innerHTML = inpt1.value;
    })
});

document.addEventListener('DOMContentLoaded', function() {
    let inpt2 = document.getElementById('input2');
    inpt2.addEventListener('input', function() {
        document.querySelector('.h3').innerHTML = inpt2.value;
    })
});


let month = document.getElementById('expdate');
month.addEventListener('mouseup', setMonth);
function setMonth(){
    let h3month = document.querySelector('.h3_month').innerHTML = month.value;
};


let year = document.getElementById('year2');
year.addEventListener('mouseup', setYear);
function setYear(){
    let h3year = document.querySelector('.h3_year').innerHTML = year.value;
};


let locklet = /[A-Za-zA-Яа-яЁё]/g;
let takeinpt = document.querySelector('#input1');
takeinpt.oninput = function(){
    this.value = this.value.replace(locklet, '');
}

let locklet2 = /[0-9]/g;
let takeinpt2 = document.querySelector('#input2');
takeinpt2.oninput = function(){
    this.value = this.value.replace(locklet2, '');
}

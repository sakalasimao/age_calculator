
let myYear = document.querySelector('#yearInput');
let myMonth = document.querySelector('#monthInput');
let myDay = document.querySelector('#dayInput');
let btn = document.querySelector('#btn');
let res_year = document.querySelector('#res_year');
let res_month = document.querySelector('#res_month');
let res_day = document.querySelector('#res_day');

myDay.focus();

btn.addEventListener('click',()=>{

const agora = new Date();

if(myYear.value > agora.getFullYear()){
    console.log('ano maior')
}else if(!(myMonth.value >= 1 && myMonth.value <= 12)){
    console.log('mes invalido');
}else if(!(myDay.value >= 1 && myDay.value <= 31)){
    console.log('dia invalido');
}
else{


let yearCalc = (agora.getFullYear()) - myYear.value;

let monthCalc = myMonth.value*30;
let dayCalc = yearCalc*365;


    res_year.innerHTML = yearCalc;
    res_month.innerHTML = monthCalc;
    res_day.innerHTML = dayCalc;

}
   
});




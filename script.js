const bill = document.getElementById('bill');
const allButtons = document.querySelectorAll('.percent');
const customPercent = document.getElementById('tip');
const noOfPeople = document.getElementById('people');
const tipPerPerson = document.getElementById('tipperperson');
const totalPerPerson = document.getElementById('total');
//const errors = document.getElementById('');
const reset = document.querySelector('.reset');



reset.onclick = function (){
    location.reload();
}

noOfPeople.addEventListener ('input', (a) =>{
    let input = a.target.value;
    let peopleValue = Number(input);
    //console.log("your input is:", peopleValue);
    let content = document.getElementById('content');

    if(peopleValue === 0){
        noOfPeople.className = "error";
        content.className = "error";
    } else {
        noOfPeople.className = "";
        content.className = "";
    };
})

customPercent.addEventListener ('input', (event) =>{
    let input = event.target.value;
    let inputValue = Number(input);
    //console.log("your input is:", inputValue);

    let bValue = bill.valueAsNumber;
    let pValue = noOfPeople.valueAsNumber;

    let cash = bValue * (inputValue/100) / pValue;
    let totalTip = (((inputValue/100) * bValue) + bValue) / pValue;
    tipPerPerson.innerHTML ="$" + cash.toFixed(2);
    totalPerPerson.innerHTML = "$" + totalTip.toFixed(2);
    console.log(inputValue, cash, totalTip);
})

allButtons.forEach(bt =>{
    bt.addEventListener('click', (e) =>{
        //console.log(e.target.innerHTML);

        let bValue = bill.valueAsNumber;
        let pValue = noOfPeople.valueAsNumber;

        if(e.target.innerHTML === '5%'){
            let cash = bValue * (5/100) / pValue;
            let totalTip = (((5/100) * bValue) + bValue) / pValue;
            tipPerPerson.innerHTML ="$" + cash.toFixed(2);
            totalPerPerson.innerHTML = "$" + totalTip.toFixed(2);
            console.log(cash, totalTip);
        }
        else if(e.target.innerHTML === '10%'){
            let cash = bValue * (10/100) / pValue;
            let totalTip = (((10/100) * bValue) + bValue) / pValue;
            tipPerPerson.innerHTML ="$" + cash.toFixed(2);
            totalPerPerson.innerHTML = "$" + totalTip.toFixed(2);
            console.log(cash, totalTip);
        }
        else if(e.target.innerHTML === '15%'){
            let cash = bValue * (15/100) / pValue;
            let totalTip = (((15/100) * bValue) + bValue) / pValue;
            tipPerPerson.innerHTML = "$" + cash.toFixed(2);
            totalPerPerson.innerHTML = "$" + totalTip.toFixed(2);
            console.log(cash, totalTip);
        }
        else if(e.target.innerHTML === '25%'){
            let cash = bValue * (25/100) / pValue;
            let totalTip = (((25/100) * bValue) + bValue) / pValue;
            tipPerPerson.innerHTML = "$" + cash.toFixed(2);
            totalPerPerson.innerHTML = "$" + totalTip.toFixed(2);
            console.log(cash, totalTip);
        }
        else if(e.target.innerHTML === '50%'){
            let cash = bValue * (50/100) / pValue;
            let totalTip = (((50/100) * bValue) + bValue) / pValue;
            tipPerPerson.innerHTML = "$" + cash.toFixed(2);
            totalPerPerson.innerHTML = "$" + totalTip.toFixed(2);
            console.log(cash, totalTip);
        }
    })
});


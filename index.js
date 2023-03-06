// TARGETTING ALL BUTTONS AND INPUTS:
const calcContainer = document.querySelector(".calc-container")
const inputAmount = document.querySelector("#amt");
const inputInterest = document.querySelector("#interest");
const inputMonth = document.querySelector("#month");
const calcBtn = document.querySelector(".calculate");
const output = document.querySelector(".output-container");
const monthlyAmt = document.querySelector(".monthlyAmt");
const totalAmt = document.querySelector(".totalAmt");
const principleAmt = document.querySelector(".principleAmt");
const onlyEmiAmt = document.querySelector(".onlyEmiAmt");
const period = document.querySelectorAll(".period")
const monthBtn = document.querySelector(".mn");
const yearBtn = document.querySelector(".yr");
// console.log(monthBtn);

// ADDING EVENT LISTENER FOR MONTH BUTTON:
monthBtn.addEventListener('click',(e)=>{
    // alert("")
    e.preventDefault()
    monthBtn.classList.toggle("touch");
    yearBtn.classList.remove("touch");

    if(inputMonth.value >= 12){
        inputMonth.value = inputMonth.value/12;
    }

    calcBtn.addEventListener("click",(e)=>{
        e.preventDefault();

            let principleAmount = inputAmount.value;
            let interest = inputInterest.value / 1200; 
            let month = inputMonth.value
    
            let oneMonthEmiAmt = Math.round(principleAmount * interest * ((1 + interest)**month) / (((1 + interest)**month) -1));
            let totalEmiAmt = Math.round(oneMonthEmiAmt * month);
            let emiAmt = Math.round( Number(totalEmiAmt) - Number(principleAmount));
            
            monthlyAmt.innerText = `Amount to pay monthly: ${oneMonthEmiAmt}`;
            totalAmt.innerText = `Total Amount to pay: ${totalEmiAmt}`;
            principleAmt.innerText = `Credit Amount: ${principleAmount}`;
            onlyEmiAmt.innerText = `EMI Amount: ${emiAmt}`;
    })
})

// ADDING EVENT LISTENER FOR YEAR BUTTON:
yearBtn.addEventListener('click',(e)=>{
    // alert("")
    e.preventDefault()
    yearBtn.classList.toggle("touch");
    monthBtn.classList.remove("touch");

    if(inputMonth.value >= 1){
        inputMonth.value = inputMonth.value * 12;
    }

    calcBtn.addEventListener("click",(e)=>{
        e.preventDefault();
            let principleAmount = inputAmount.value;
            let interest = inputInterest.value / 1200; 
            let month = inputMonth.value * 12;
    
            let oneMonthEmiAmt = Math.round(principleAmount * interest * ((1 + interest)**month) / (((1 + interest)**month) -1));
            let totalEmiAmt = Math.round(oneMonthEmiAmt * month);
            let emiAmt = Math.round( Number(totalEmiAmt) - Number(principleAmount));
            
            monthlyAmt.innerText = `Amount to pay monthly: ${oneMonthEmiAmt}`;
            totalAmt.innerText = `Total Amount to pay: ${totalEmiAmt}`;
            principleAmt.innerText = `Credit Amount: ${principleAmount}`;
            onlyEmiAmt.innerText = `EMI Amount: ${emiAmt}`;
    })
})


// GIVING ALERTS:
calcBtn.addEventListener("click",(e)=>{
    if(inputAmount.value == "" && inputInterest.value == "" && inputMonth.value == ""){
        alert("Please fill all the input fields!!!");
    }
    else if (period[0].classList.contains("touch") == false && period[1].classList.contains("touch") == false) {
        alert("Please Select Month Or Year");
      }
})

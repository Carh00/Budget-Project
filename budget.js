const data = [
    [ 'Accountant', 55650 ],
    [ 'Advance Tractor/Trailer Driver', 53550 ],
    [ 'Agricultural Engineer', 56700 ],
    [ 'Architect', 53550 ],
    [ 'Auto Tech/Mechanic', 49350 ],
    [ 'Aviation Tech. Mechanic', 50400 ],
    [ 'Biologist', 54600 ],
    [ 'Bus Driver', 37800 ],
    [ 'Business Development Officer', 54600 ],
    [ 'Business Manager Hotel etc.', 61950 ],
    [ 'CNC Manufacturing', 80850 ],
    [ 'Carpenter', 47250 ],
    [ 'Chef', 52500 ],
    [ 'Chemist', 56700 ],
    [ 'Civil Engineering Technician', 68250 ],
    [ 'Commercial Driver', 51450 ],
    [ 'ComputerTechnician', 46200 ],
    [ 'Conserv./Environ. Science', 72450 ],
    [ 'Correctional Officer', 48300 ],
    [ 'Cosmetologist', 36750 ],
    [ 'Credit Union/Bank Manager', 61950 ],
    [ 'Daycare Director', 37800 ],
    [ 'Dentist', 115500 ],
    [ 'Detective', 60900 ],
    [ 'Diesel Tech/Mechanic', 55650 ],
    [ 'Doctor/Physician', 147000 ],
    [ 'Blectrician', 54600 ],
    [ 'Electronic Engineer', 75600 ],
    [ 'EMT', 34650 ],
    [ 'Energy Management PG&E', 106050 ],
    [ 'Engineer', 72450 ],
    [ 'Fashion Designer', 63000 ],
    [ 'Fire Fighter', 49350 ],
    [ 'Forest Ranger', 52500 ],
    [ 'Graphic/Media Designer', 58800 ],
    [ 'H/C HVAC', 63000 ],
    [ 'Highway Patrol', 84000 ],
    [ 'Home Inspector', 56700 ],
    [ 'Industrial Mechanic', 46200 ],
    [ 'Interior Designer', 49350 ],
    [ 'Investment Analyst', 66150 ],
    [ 'Lab Technician', 42000 ],
    [ 'Landscaper Horticulture', 48300 ],
    [ 'lawyer', 86100 ],
    [ 'Marketing/Sales Manager', 58800 ],
    [ 'Media/Communications', 45150 ],
    [ 'Medical RepairTech.', 52500 ],
    [ 'Military', 55650 ],
    [ 'Nurse', 66150 ],
    [ 'Nutitionist', 45150 ],
    [ 'Oceanographer', 69300 ],
    [ 'Pastor', 50400 ],
    [ 'PGBEATT Technician', 78750 ],
    [ 'Pharmacist', 105000 ],
    [ 'Photographer', 45150 ],
    [ 'Physical Therapist', 72450 ],
    [ 'Pilot Commercial', 78750 ],
    [ 'Plumber', 52500 ],
    [ 'Police Officer', 53550 ],
    [ 'Principal', 93450 ],
    [ 'Probation Officer', 44100 ],
    [ 'Psychologist', 77700 ],
    [ 'Retail Sales Associate', 34650 ],
    [ 'Social Worker', 50400 ],
    [ 'Solar Energy Tech.', 53550 ],
    [ 'Teacher', 52500 ],
    [ 'UPS/Fed Ex Driver', 68250 ],
    [ 'Veterinarian', 82950 ],
    [ 'Welder/Metal Specialist', 47250 ],
    [ 'Wind EnergyTechnician', 56700 ]
]
const jobOptions = document.getElementById('Job-Options');
const jobInput = document.getElementById('Job');
const annualInput = document.getElementById('Annual');
const monthlyInput = document.getElementById('Monthly');
const federalInput = document.getElementById('federal');
const statetaxesInput = document.getElementById('s-taxes');
const socialInput = document.getElementById('social');
const medicalInput = document.getElementById('medicare');
const stateInput = document.getElementById('state');
const retireInput = document.getElementById('retirement');
const moremedicalInput = document.getElementById('Medical');
const deductInput = document.getElementById('deductions');
const gmiInput = document.getElementById('GMI');
const tdInput = document.getElementById('TD');
const totalInput = document.getElementById('total-amount');

for(job of data){
    let newOption = document.createElement('option');
    newOption.value = job[1];
    newOption.innerText = job[0];
    jobOptions.appendChild(newOption);
}

jobOptions.addEventListener('change', calculate);

function calculate(){
    let grossAnnual = jobOptions.value,
        grossMonthly = jobOptions.value / 12;
    let TD = federalInput.value + statetaxesInput.value + socialInput.value + medicalInput.value + stateInput.value + retireInput.value + moremedicalInput.value;

    jobInput.value = jobOptions.options[jobOptions.selectedIndex].text;
    annualInput.value =  + grossAnnual;
    monthlyInput.value =  + grossMonthly;
    federalInput.value =  + (grossMonthly * .12).toFixed(2);
    statetaxesInput.value = + (grossMonthly * .07).toFixed(2);
    socialInput.value =  + (grossMonthly * .062).toFixed(2);
    medicalInput.value = + (grossMonthly * .014).toFixed(2);
    stateInput.value = + (grossMonthly * .01).toFixed(2);
    retireInput.value =  + (grossMonthly * .05).toFixed(2);
    moremedicalInput.value =+ (grossMonthly * 0 + 180).toFixed(2);
    
    // Total decuctions <----------------------------->
    deductInput.value = (Number(federalInput.value) + Number(statetaxesInput.value) + Number(socialInput.value) + Number(medicalInput.value) + Number(stateInput.value) + Number(retireInput.value) + Number(moremedicalInput.value)).toFixed(2);

    // calculation for the Net Montly 
    gmiInput.value = grossMonthly;
    tdInput.value = deductInput.value;
    totalInput.value = Number(grossMonthly) - Number(deductInput.value);
    NetCheckPayment()
}

/*
const withdrawlInput = document.getElementById('Withdrawl');
const depositsInput = document.getElementById('Deposit');
const GrandTotalInput = document.getElementById('T-Balance')

GrandTotalInput.addEventListener('change', addingtotal)

function addingtotal () {
    withdrawlInput.value = GrandTotalInput
    withdrawlInput.value = GrandTotalInput.options[GrandTotalInput.selectedIndex].text
}
*/
let Checkbook = document.getElementById("Checkbook");
let rows = document.getElementsByClassName("CheckbookBox");
function createNewCheck(){
    rows = document.getElementsByClassName("CheckbookBox");
    let rowNumber = rows.length;
    let row;
    let Calandar;
    let Description;
    let Withdrawl;
    let Deposit;
    let Balance;
    let CalandarTd;
    let DescriptionTd;
    let WithdrawlTd;
    let DepositTd;
    let BalanceTd;
    row = document.createElement('Tr')
    row.setAttribute('id',`Row${rowNumber}`)
    row.setAttribute('class',`CheckbookBox`)
    Calandar = document.createElement('input')
    Calandar.setAttribute('id',`${rowNumber}Col-1`)
    Calandar.setAttribute('type',`date`)
    Description = document.createElement('input')
    Description.setAttribute('id',`${rowNumber}Col0`)
    Description.setAttribute('placeholder','Transaction Description');
    Description.addEventListener("change", (e) => doCalcCheck());
    Withdrawl = document.createElement('input')
    Withdrawl.setAttribute('id',`${rowNumber}Col1`)
    Withdrawl.setAttribute('type',`number`)
    //Withdrawl.setAttribute('placeholder','Clothes, food, etc..');
    Withdrawl.addEventListener("change", (e) => doCalcCheck());
    Deposit = document.createElement('input')
    Deposit.setAttribute('id',`${rowNumber}Col2`)
    Deposit.setAttribute('type',`number`)
    //Deposit.setAttribute('placeholder','Gifts, Checks, etc..');
    Deposit.addEventListener("change", (e) => doCalcCheck());
    Balance = document.createElement('input')
    Balance.setAttribute('id',`${rowNumber}Col3`)
    Balance.setAttribute('disabled', '')
    Balance.setAttribute('placeholder','Total Amount');
    
    CalandarTd = document.createElement("Td");
    DescriptionTd = document.createElement("Td");
    WithdrawlTd = document.createElement("Td");
    DepositTd = document.createElement("Td");
    BalanceTd = document.createElement("Td");

    CalandarTd.appendChild(Calandar);
    DescriptionTd.appendChild(Description);
    WithdrawlTd.appendChild(Withdrawl);
    DepositTd.appendChild(Deposit);
    BalanceTd.appendChild(Balance);


    row.appendChild(CalandarTd);
    row.appendChild(DescriptionTd);
    row.appendChild(WithdrawlTd);
    row.appendChild(DepositTd);
    row.appendChild(BalanceTd);

    Checkbook.appendChild(row);
}

function doCalcCheck(){
    for(let i = 2;i<rows.length;i++){
        CheckCalc(i)
    }
}

function CheckCalc(row){
    rows = document.getElementsByClassName("CheckbookBox");
    let Description;
    let Withdrawl;
    let Deposit;
    let Balance;
    let prevVal;
    eval(`Description = document.getElementById("${row}Col0");`);
    eval(`Withdrawl = document.getElementById("${row}Col1");`);
    eval(`Deposit = document.getElementById("${row}Col2");`);
    eval(`Balance = document.getElementById("${row}Col3");`);

    let WithdrawlV = Withdrawl.value;
    if(Withdrawl.value==""){
        WithdrawlV = 0;
    }

    let DepositV = Deposit.value;
    if(Deposit.value==""){
        DepositV = 0;
    }

    if(row == 1){
        prevVal = document.getElementById("total-amount").value;
    }else{
        eval(`prevVal = document.getElementById("${row-1}Col3").value;`);
    }
    Balance.value = "$".concat((parseFloat(prevVal.replace("$",""))-parseFloat(WithdrawlV)+parseFloat(DepositV)).toFixed(2));

    if(row == rows.length-1){
        if(WithdrawlV!=0 || DepositV!=0 || Description.value!=""){
            createNewCheck();
        }
    }
}

function NetCheckPayment(){
    let Deposit = document.getElementById("1Col2");
    let Balance = document.getElementById("1Col3");
    Deposit.value = parseFloat(document.getElementById("total-amount").value.replace("$",""))
    Balance.value = "$".concat(parseFloat(document.getElementById("total-amount").value.replace("$","")))
}

createNewCheck();
  
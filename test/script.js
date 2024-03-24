//code for Net salary calculation
function taxableAmount(annualSalary) {
    if (annualSalary <= 288000) {
        return (annualSalary / 12)*(10/100);
    } else if (annualSalary <= 388000) {
        return 24000 + (annualSalary - 288000) * (25 / 100) / 12;
    } else if (annualSalary <= 6000000) {
        return 32334 + (annualSalary - 388000) * (30 / 100) / 12;
    } else if (annualSalary <= 9600000) {
        return 500000 + (annualSalary - 6000000) * (32.5 / 100) / 12;
    } else {
        return 800000 + (annualSalary - 9600000) * (35 / 100) / 12;
    }
}

function calculateNHIFDeductions(grossPay) {
    if (grossPay <= 5999) {
        return 150;
    } else if (grossPay <= 7999) {
        return 300;
    } else if (grossPay <= 11999) {
        return 400;
    } else if (grossPay <= 14999) {
        return 500;
    } else if (grossPay <= 19999) {
        return 600;
    } else if (grossPay <= 24999) {
        return 750;
    } else if (grossPay <= 29999) {
        return 850;
    } else if (grossPay <= 34999) {
        return 900;
    } else if (grossPay <= 39999) {
        return 950;
    } else if (grossPay <= 44999) {
        return 1000;
    } else if (grossPay <= 49999) {
        return 1100;
    } else if (grossPay <= 59999) {
        return 1200;
    } else if (grossPay <= 69999) {
        return 1300;
    } else if (grossPay <= 79999) {
        return 1400;
    } else if (grossPay <= 89999) {
        return 1500;
    } else if (grossPay <= 99999) {
        return 1600;
    } else {
        return 1700;
    }
}

function NSSFDeductions(pensionablePay) {
    const tierIUpperLimit = 7000;
    const tierIIUpperLimit = 36000;

    if (pensionablePay <= tierIUpperLimit) {
        return pensionablePay * 0.06;
    } else {
        return tierIUpperLimit * 0.06 + (pensionablePay - tierIUpperLimit) * 0.06;
    }
}

function calculateNetSalary(basicSalary, benefits) {
    const annualSalary = (basicSalary + benefits) * 12;
    const taxablePay = taxableAmount(annualSalary);
    const tax = taxablePay * (12 / 100); // Assuming 12% tax rate
    const nhifDeductions = calculateNHIFDeductions(basicSalary);
    const nssfContribution = NSSFDeductions(basicSalary);
    
    const grossSalary = basicSalary + benefits;
    const netSalary = grossSalary - tax - nhifDeductions - nssfContribution;
    
    return netSalary;
}
// code test of the function
const basicSalary = 200000; // basic salary in Ksh
const benefits = 100; // benefits in Ksh
const netSalary = calculateNetSalary(basicSalary, benefits);
console.log("Net Salary: " + netSalary + " Ksh");//netsalary solution

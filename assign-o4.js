// problem 01 
function calculateTax(income, expenses) {
    if (0 > income) {
        return "Invalid Input";
    } else if (expenses > income) {
        return "Invalid Input";
    }
    const difference = income - expenses;
    const tax = difference * .20;
    return tax;
}

// const totalTax = calculateTax(10000, 3000);
// console.log(totalTax);


// problem 02
function sendNotification(email) {
    const validetion = email.indexOf('@');
    if (validetion === -1) {
        return 'Invalid Email';
    }
    const userName = email.slice(0, validetion);
    const domainName = email.slice(validetion + 1);
    return (userName + " sent you an email from " + domainName);
}
// const email = sendNotification("zihad.ph@gmail.com");
// console.log(email);


// problem 03 
function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return 'Invalid Input';
    } 
    else {
        for(let i = 0; i<name.length; i++){
            const character = name[i];
            if (character >= '0' && character <= '9') {
                return true;
            }
        }
        return false;
    }
}
// const name = checkDigitsInName('jub12ayer');
// console.log(name);


// problem 04 
function calculateFinalScore(obj) {
    if (typeof obj !== 'object') {
        return "Invalid Input";
    }

    const rajibInfo = obj;
    const testScore = rajibInfo.testScore;
    const testScorePont = Math.min(testScore, 50);

    const schoolGrade = rajibInfo.schoolGrade;
    const schoolGradePont = Math.min(schoolGrade, 30);

    const isFamily = rajibInfo.isFamily;
    let parentProfession ;
    if(isFamily === true){
        parentProfession = 20;
    }
    else{
        parentProfession = 0;
    }

    const totalPoint = testScorePont + schoolGradePont + parentProfession;
    if (80 <= totalPoint) {
        return true;
    }
    return false;
}

// const rajibInfo = {
//     name: "Rajib",
//     testScore: 50,
//     schoolGrade: 30,
//     isFamily: false
// }
// const result = calculateFinalScore(rajibInfo);
// console.log(result);




// problem 5 
function waitingTime(waitingTimes, serialNumber) {

    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return 'Invalid Input';
    }
    let totalTime = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
        totalTime = totalTime + waitingTimes[i];
    }
    const length = waitingTimes.length;
    const averageTime = Math.round(totalTime / length);

    const interviewerBefor = serialNumber - 1;
    const remainingInterviewer = interviewerBefor - waitingTimes.length;

    const totalWaitingTime = averageTime * remainingInterviewer;
    return totalWaitingTime;

}
// const waitingTimes = [3, 5, 7, 11, 6];
// const serialNumber = 10;
// console.log(waitingTime(waitingTimes, serialNumber));

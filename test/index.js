// code for determining students grade
function gradeScored(mark) {
    if (mark > 79) {
        return 'A';
    } else if (mark >= 60 && mark <= 79) {
        return 'B';
    } else if (mark >= 50 && mark <= 59) {
        return 'C';
    } else if (mark >= 40 && mark <= 49) {
        return 'D';
    } else {
        return 'E';
    }
}
// prompt user to inputa students mark
function gradeCalculation() {
    const mark = parseInt(prompt("Input mark (between 0 and 100):"));
    // prompt box enables use to input value
    if (isNaN(mark) || mark < 0 || mark > 100) {
        console.log('error! Input a number between 0 and 100.');
    } else {
        const grade = gradeScored(mark);
        console.log(`The students scored: ${grade}`);
    }
}

// Run the program
gradeCalculation();

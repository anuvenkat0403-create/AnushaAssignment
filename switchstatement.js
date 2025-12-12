// 1. Create a function that takes a student's score as a parameter
function getGrade(score) {

    // 2. Declare and initialize the variable
    let grade = "";

    // 3. Use switch statement
    switch (true) {
        case (score >= 90 && score <= 100):
            grade = "A";
            break;

        case (score >= 80 && score < 90):
            grade = "B";
            break;

        case (score >= 70 && score < 80):
            grade = "C";
            break;

        case (score >= 60 && score < 70):
            grade = "D";
            break;

        case (score >= 0 && score < 60):
            grade = "F";
            break;

        default:
            grade = "Invalid Score";
    }

    // 4. Return the grade
    return grade;
}

// 5. Call the function and print the result
console.log(getGrade(92));   // A
console.log(getGrade(75));   // C
console.log(getGrade(50));   // F
console.log(getGrade(120));  // Invalid Score

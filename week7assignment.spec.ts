// Step 1: Define the enum for application environments
enum Environment {
    LOCAL,
    DEVELOPMENT,
    STAGING,
    PRODUCTION
}

// Step 2: Create a function that runs tests for a given environment
function runTests(env: Environment): void {
    switch(env) {
        case Environment.LOCAL:
            console.log("Running tests on LOCAL environment...");
            break;
        case Environment.DEVELOPMENT:
            console.log("Running tests on DEVELOPMENT environment...");
            break;
        case Environment.STAGING:
            console.log("Running tests on STAGING environment...");
            break;
        case Environment.PRODUCTION:
            console.log("Running tests on PRODUCTION environment...");
            break;
        default:
            console.log("Unknown environment!");
    }
}

// Step 3: Example calls to the runTests function
runTests(Environment.LOCAL);
runTests(Environment.DEVELOPMENT);
runTests(Environment.STAGING);
runTests(Environment.PRODUCTION);

const browserVersion = "Chrome";

function getBrowserVersion() {
  if (browserVersion === "Chrome") {
    var browserVersion1 = "Chrome - VAR Shadow";
    console.log("Inside IF block:", browserVersion);
  }

  console.log("Outside IF block (inside function):", browserVersion);
}

getBrowserVersion();
const browserVersion2 = "Chrome";

function getBrowserVersion() {
  if (browserVersion2 === "Chrome") {
    let browserVersion3 = "Chrome - VAR Shadow";
    console.log("Inside IF block:", browserVersion);
  }

  console.log("Outside IF block (inside function):", browserVersion);
}

getBrowserVersion();
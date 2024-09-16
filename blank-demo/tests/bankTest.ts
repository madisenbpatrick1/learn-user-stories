import Bank from "../src/bank";

//setup
const bank = new Bank();

//scenario 1
const account = bank.createAccount("John Doe", 29, "2938298");
if(account.accountNumber === "2938298") {
    console.log("Scenario 1 passed");
}
else {
    console.log("Scenario 1 failed");
}

//scenario 2
try {
    bank.createAccount("John Doe", 29, "2938298");
    console.log("Scenario 2 failed");
}
catch(_) {
    console.log("Scenario 2 passed");
}

//scenario 3
const depositedAccount = bank.deposit("2938298", 1000);
if(depositedAccount.balance === 1000) {
    console.log("Scenario 3 passed");
}
else {
    console.log("Scenario 3 failed");
}

//scenario 4
try {
    bank.deposit("1234567", 1000);
    console.log("Scenario 4 failed");
}
catch(_) {
    console.log("Scenario 4 passed");
}
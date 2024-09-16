import Bank from "../src/bank";

//setup
const bank = new Bank();

//scenario 1 - create
const account = bank.createAccount("John Doe", 29, "2938298");
if(account.accountNumber === "2938298") {
    console.log("Scenario 1 passed");
}
else {
    console.log("Scenario 1 failed");
}

//scenario 2 - failed bank account creation
try {
    bank.createAccount("John Doe", 29, "2938298");
    console.log("Scenario 2 failed");
}
catch(_) {
    console.log("Scenario 2 passed");
}

//scenario 3 - deposit of sufficient balance
const depositedAccount = bank.deposit("2938298", 1000);
if(depositedAccount.balance === 1000) {
    console.log("Scenario 3 passed");
}
else {
    console.log("Scenario 3 failed");
}

//scenario 4 - deposit of non-existent account
try {
    bank.deposit("1234567", 1000);
    console.log("Scenario 4 failed");
}
catch(_) {
    console.log("Scenario 4 passed");
}

//scenario 5 - withdrawal of sufficient balance
if(bank.withdraw("2938298", 500).balance === 500) {
    console.log("Scenario 5 passed");
}
else {
    console.log("Scenario 5 failed");
}

//scenario 6 - withdrawal of non-existent account
try {
    bank.withdraw("1234567", 500);
    console.log("Scenario 6 failed");
}
catch(_) {
    console.log("Scenario 6 passed");
}

//scenario 7 - withdrawal amount exceeds balance
try {
    bank.withdraw("2938298", 1500);
    console.log("Scenario 7 failed");
}
catch(_) {
    console.log("Scenario 7 passed");
}
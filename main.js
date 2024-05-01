import inquirer from "inquirer";
let mybalance = 10000; // Dollar
let myPin = 1234;
let PinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter Your Pin",
        type: "number",
    }
]);
if (PinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let OperationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please Slect option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    console.log(OperationAns);
    if (OperationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your pin",
                type: "number"
            }
        ]);
        mybalance -= amountAns.amount;
        console.log("your remaining balance is: " + mybalance);
    }
    else if (OperationAns.operation === "check balance") {
        console.log("yourbalance is:" + mybalance);
    }
}
else {
    console.log("Incorrect pin number");
}

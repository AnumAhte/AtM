//1
import inquirer from "inquirer";
let mYbalance:number=20000; //dollars
let pin:number=2020;
let pinAnswer= await inquirer.prompt
([
    {
name:"q1",
message:"Enter your Pin",
type:"number",
    }
])


if(pinAnswer.q1===pin){
    let operationAnswer= await inquirer.prompt
    ([{
name:"operation",
message:"Select one operation",
type:"list",
choices:["withdraw","check balance","fastcash"]
        }]);


   //2

 if(operationAnswer.operation==="withdraw") {
    let amountAnswer=await inquirer.prompt
    ([{
name:"amount",
message:"enter your amount",
type:"number",
    }]);


    if(amountAnswer.amount<=mYbalance){
    mYbalance-=amountAnswer.amount;
    console.log(`your remaining balance is ${mYbalance}`)
 }

 else{console.log("insufficient balance")}
 
}

//3
else if(operationAnswer.operation==="check balance")
{
    console.log(`Your balance is ${mYbalance}`)
}


//4
else if(operationAnswer.operation==="fastcash"){
    let fastcashAns=await inquirer.prompt(
        [
            {
                name:"fastcash",
                message:"how much amount you want to fastcash?",
                type:"list",
                choices:[1000,2000,5000,10000]
            }
        ]
    );
    mYbalance-=fastcashAns.fastcash
    console.log(`your remaining amount is:${mYbalance}`)
}}

else{console.log("Invalid Pin Code")}
const UserChoice = prompt("Chose from 1 ) rock , 2 ) paper ,3 ) scissors");
const tools=["rock","paper","scissors"];

if(UserChoice){
    console.log(`User Choice is ${UserChoice}`)
}else{
    alert("You did not choose anything");
}
let random=Math.floor(Math.random()*3);
ComputerChoice=tools[random];
console.log(`Computer Choice is ${ComputerChoice}`)
if(UserChoice===ComputerChoice){
    console.log("it is a TIE ");
}
else if(UserChoice==="rock"){
    if(ComputerChoice==="scissors"){
        console.log("You Won ! ");
    }else if(ComputerChoice==="paper"){
        console.log("You Lost !");
    }
}else if(UserChoice==="paper"){
    if(ComputerChoice==="rock"){
        console.log("You Won ! ");
    }else if(ComputerChoice==="scissors"){  
        console.log("You Lost !");
    }
}else if(UserChoice==="scissors"){
    if(ComputerChoice==="rock"){
        console.log("You Lost ! ");
    }else if(ComputerChoice==="paper"){  
        console.log("You Won !");
    }
}


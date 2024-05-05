let operations= document.querySelectorAll(".operators")
let displayResult=document.querySelector(".result h1")


let sum=()=>{
    let num1=parseInt(document.getElementById("number1").value)
    let num2=parseInt(document.getElementById("number2").value)
    
    displayResult.innerHTML=num1+num2
}


let diff=()=>{
    let num1=parseInt(document.getElementById("number1").value)
    let num2=parseInt(document.getElementById("number2").value)
    
    displayResult.innerHTML=num1-num2
}

let multi=()=>{
    let num1=parseInt(document.getElementById("number1").value)
    let num2=parseInt(document.getElementById("number2").value)
    
    displayResult.innerHTML=num1*num2
}
let div=()=>{
    let num1=parseInt(document.getElementById("number1").value)
    let num2=parseInt(document.getElementById("number2").value)
    
    displayResult.innerHTML=num1/num2
}



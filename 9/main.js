function evenOrOdd(num){
    if(num%2==0){
        document.write("even")
        return "Even"
    }else{
        document.write("odd")
        return "Odd"

    }
}

function votingEligibility(age){
    if(age <0){
        alert("Enter Valid Age")
    }else if(age>=0 && age<=18){
        document.write("Not Elligible")
        return "Not Elligible"
    }
    else{
        document.write("Elligible")
        return "Elligible"
    }
}


function greatestAmongThree(num1,num2,num3){
    if(num1>num2 && num1>num3){
        document.write(num1+" is greater")
        return num1 +" is greater"
    }else if(num2>num1 && num2>num3){
        document.write(num2+" is greater")
        return num2 +" is greater"
    }else{
        document.write(num3+" is greater")
        return num3 +" is greater"
    }
}

function table(num){
    for(let i=1;i<=10;i++){
        console.log(num+"x"+i+"="+(num*i))
    }
}
document.write("Even-Odd ")
let num=prompt("Enter number to check odd even ")
console.log(num+" is "+ evenOrOdd(num))

let age=prompt("Enter age to check Vote Elligibility ")
console.log(age+" is "+ votingEligibility(age))

let num1=prompt("Enter Num1 ")
let num2=prompt("Enter Num2 ")
let num3=prompt("Enter Num3 ")
console.log(greatestAmongThree(num1,num2,num3))

let number=prompt("Enter Number to print table ")
table(number)


const but1 = document.getElementById("1");
const but2 = document.getElementById("2");
const but3 = document.getElementById("3");
const but4 = document.getElementById("4");
const but5 = document.getElementById("5");
const but6 = document.getElementById("6");
const but7 = document.getElementById("7");
const but8 = document.getElementById("8");
const but9 = document.getElementById("9");
const but0 = document.getElementById("0");
const butplus = document.getElementById("+");
const butminus = document.getElementById("-");
const butdivide = document.getElementById("/");
const buttimes = document.getElementById("*");
const butequal = document.getElementById("=");
const text = document.getElementById("output");
const decimal = document.getElementById(".");
const clear = document.getElementById("clear");
const del = document.getElementById("del");
const buttons = document.getElementsByClassName("button");
const outputContainer = document.getElementById("outputContainer");
const Copy = document.getElementById("copyButton");
const mesg = document.getElementById("message");
let operations = [];
let equation = text.textContent;
butplus.addEventListener("click", function(){
    if (equation.charAt(equation.length - 1) == "+" || equation.charAt(equation.length - 1) == "-" || equation.charAt(equation.length - 1) == "/" || equation.charAt(equation.length - 1) == "*"){
        console.log("nah aint no way jit thinks he can put two operators after each other")
    } else{
        equation = equation + "+"
        text.textContent = equation
    }
})
butminus.addEventListener("click", function(){
    if (equation.charAt(equation.length - 1) == "+" || equation.charAt(equation.length - 1) == "-" || equation.charAt(equation.length - 1) == "/" || equation.charAt(equation.length - 1) == "*"){
        console.log("nah aint no way jit thinks he can put two operators after each other")
    } else{
        equation = equation + "-"
        text.textContent = equation
    }
    
})
buttimes.addEventListener("click", function(){
    if (equation.charAt(equation.length - 1) == "+" || equation.charAt(equation.length - 1) == "-" || equation.charAt(equation.length - 1) == "/" || equation.charAt(equation.length - 1) == "*"){
        console.log("nah aint no way jit thinks he can put two operators after each other")
    } else{
        equation = equation + "*"
        text.textContent = equation
    }
})
butdivide.addEventListener("click", function(){
    if (equation.charAt(equation.length - 1) == "+" || equation.charAt(equation.length - 1) == "-" || equation.charAt(equation.length - 1) == "/" || equation.charAt(equation.length - 1) == "*"){
        console.log("nah aint no way jit thinks he can put two operators after each other")
    } else{
        equation = equation + "/"
        text.textContent = equation
    }
})
butequal.addEventListener("click", function(){
    if (equation.charAt(equation.length - 1) == "+" || equation.charAt(equation.length - 1) == "-" || equation.charAt(equation.length - 1) == "/" || equation.charAt(equation.length - 1) == "*"){
        console.log("why is nigga trying to equalize an unfinished equation?? dumbass");
    } else if(equation.charAt(equation.length - 1) == "."){
        console.log("woow woow chill dont end off the equation with a decimal");
    } else{
        equation = String(eval(equation));
        text.textContent = equation;
    }
})
console.log(equation);
Copy.addEventListener("click", function(){
    mesg.style.display = "inline-block";
    let startTime = Date.now();
    let Opa = 0;
    let timer = setInterval(function(){
        Opa += 0.1
        mesg.style.opacity = String(Opa);
        if (Date.now() - startTime > 500){
            clearInterval(timer)
        }

    }, 50)
    
    navigator.clipboard.writeText(text.textContent);
    setTimeout(function(){
        let startTime2 = Date.now();
        let Opa2 = 1;
        let timer2 = setInterval(function(){
            Opa2 -= 0.1
            mesg.style.opacity = String(Opa2);
            if (Date.now() - startTime2 > 500){
                clearInterval(timer2)
            }

        }, 50)
    }, 2500)
    setTimeout(function(){
        mesg.style.display = "none";
    }, 3000)

    
})
clear.addEventListener("click", function(){
    equation = "0";
    operations = [];
    text.textContent = "0";
})
del.addEventListener("click", function(){
    if(equation != "0"){
        if (equation.length == 1){
            equation = "0";
            text.textContent = "0";
            operations = [];
            
        } else{
            let lastchar = equation.charAt(equation.length-1);
        
        
            equation = equation.slice(0, equation.length - 1)
            text.textContent = equation
        
            if (lastchar == "+"){
                operations.pop();
            } else if(lastchar == "-"){
                operations.pop();
            } else if(lastchar == "*"){
                operations.pop();
            } else if(lastchar == "/"){
                operations.pop();
            }
        }
        
    }
    

})

but1.addEventListener("click", function(){
    if(text.textContent == "0"){
        text.textContent = "1"
        equation = text.textContent;
    } else{
        text.textContent = text.textContent + "1"
        equation = text.textContent;
    }
    
})
but2.addEventListener("click", function(){
    if(text.textContent == "0"){
        text.textContent = "2"
        equation = text.textContent;
    } else{
        text.textContent = text.textContent + "2"
        equation = text.textContent;
    }
    
})
but3.addEventListener("click", function(){
    if(text.textContent == "0"){
        text.textContent = "3"
        equation = text.textContent;
    } else{
        text.textContent = text.textContent + "3"
        equation = text.textContent;
    }
    
})
but4.addEventListener("click", function(){
    if(text.textContent == "0"){
        text.textContent = "4"
        equation = text.textContent;
    } else{
        text.textContent = text.textContent + "4"
        equation = text.textContent;
    }
    
})
but5.addEventListener("click", function(){
    if(text.textContent == "0"){
        text.textContent = "5"
        equation = text.textContent;
    } else{
        text.textContent = text.textContent + "5"
        equation = text.textContent;
    }
    
})
but6.addEventListener("click", function(){
    if(text.textContent == "0"){
        text.textContent = "6"
        equation = text.textContent;
    } else{
        text.textContent = text.textContent + "6"
        equation = text.textContent;
    }
    
})
but7.addEventListener("click", function(){
    if(text.textContent == "0"){
        text.textContent = "7"
        equation = text.textContent;
    } else{
        text.textContent = text.textContent + "7"
        equation = text.textContent;
    }
    
})
but8.addEventListener("click", function(){
    if(text.textContent == "0"){
        text.textContent = "8"
        equation = text.textContent;
    } else{
        text.textContent = text.textContent + "8"
        equation = text.textContent;
    }
    
})
but9.addEventListener("click", function(){
    if(text.textContent == "0"){
        text.textContent = "9"
        equation = text.textContent;
    } else{
        text.textContent = text.textContent + "9"
        equation = text.textContent;
    }
    
})
but0.addEventListener("click", function(){
    if(text.textContent == "0"){
        console.log("why u pressing zero it already 0")
    } else{
        text.textContent = text.textContent + "0"
        equation = text.textContent;
    }
    
})
decimal.addEventListener("click", function(){
    let Index1 = equation.lastIndexOf("+");
    let Index2 = equation.lastIndexOf("-");
    let Index3 = equation.lastIndexOf("/");
    let Index4 = equation.lastIndexOf("*");
    let IndexList = [Index1, Index2, Index3, Index4];
    let Start = 0;
    let Check = IndexList.reduce((a, b) => Math.max(a, b), -Infinity);
    if (Check == -1){
        Start = 0;

    } else{
        Start = Check;
    }
    
    let checkSection = equation.slice(Start, equation.length)
    if (checkSection.indexOf(".") != -1){
        console.log("is nigga rlly trying to put two decimals in one number?")
    } else if(equation.charAt(equation.length - 1) == "+" || equation.charAt(equation.length - 1) == "-" || equation.charAt(equation.length - 1) == "*" || equation.charAt(equation.length - 1) == "/"){
        console.log("is nigga rlly trying to put a decimal after an operator?")
    } else {
        
        equation = equation + ".";
        text.textContent = equation;
    }
    
})
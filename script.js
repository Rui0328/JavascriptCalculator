const input = document.getElementById("input");
const display = document.getElementById("display");

let result;
let formula;
let lastInputWasOperator = false;
let previousFormula ="";
let remain = false;

const numbers = {
    "equals": "=",
    "zero": 0,
    "one": 1, 
    "two": 2, 
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "add": "+",
    "subtract": "-",
    "multiply": "*",
    "divide": "/",
    "decimal": ".",
    "clear" : "AC"
    }

      const setNumber = (event)=>{
        let num = event.target.value;
        if(remain && (num === "+" || num === "-" || num === "*" || num === "/")){
          previousFormula = display.textContent
          display.textContent ="";
          input.textContent = "";
          display.textContent = previousFormula;
          remain = false;
        }
       
    
        if (num === "+" || num === "-" || num === "*" || num === "/") {
            if(lastInputWasOperator){
               if(num === "-" && (input.textContent.slice(-1)==="*")){
                
               }
               else if(num === "+" && (input.textContent.slice(1,2)==="*" ||input.textContent.slice(2,3)==="*" )){
                input.textContent = input.textContent.slice(0,1);
                console.log("test");
               }
               else{
                display.textContent = display.textContent.slice(0,-1);
                input.textContent = input.textContent.slice(0,-1);
               }
            }
            input.textContent += display.textContent + num;
             display.textContent = "";
            lastInputWasOperator=true;
        }  else if (num === "0" && display.textContent === "0") {
            return;
        } 
        else if (num !== "0" && display.textContent === "0") {
            display.textContent = num; 
        } else if(num ==="." && display.textContent.includes(".")){
            return;
        }else if(input.textContent.slice(-2) ==="(-"){
          display.textContent += `${num})`;
          lastInputWasOperator=false;
        }
        else {
            display.textContent += num;
            lastInputWasOperator=false;
        }

      }


      const clearDisplay =()=>{
        input.textContent = "";
        display.textContent = 0;
        formula = "";
        result=0;
      }

      const calculate = ()=>{
        input.textContent += display.textContent;
        let formula = input.textContent;
        let result = eval(formula);
        previousFormula = result;
        remain = true;
        
        display.textContent = result;
        input.textContent = `${formula}=${result}`;

      }

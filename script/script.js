const clear_btn = document.querySelector('.clear-btn');
const display = document.querySelector('.display-number');
let output_str = ''


function onClear(){
    output_str = '';
    display.textContent = output_str;
}

clear_btn.addEventListener('click', onClear);

const calculator = document.querySelector('.calculator')

function onCalc(e){
    if(e.target.tagName == 'INPUT'){
        output_str += e.target.value
        display.textContent = output_str;

        if(e.target.value === '='){
            numbers = []
            val = ''
            num1 = 0
            num1check = true
            num2 = 0
            for (let i = 1; i < output_str.length; i++){
                val = output_str[i]
                j = i+1
                if ( val === "+" || val === "-" || val==="X" || val==="/"){
                    console.log(i)
                    num1 = output_str.slice(0, i);
                    if (num1check){
                        numbers.push(num1)
                        num1Check = false
                    }
                    num2 = output_str.slice(j, -1);
                    numbers.push(parseInt(num2))
                }
                if (val === "+"){
                    output_str = Number(num1) + Number(num2)
                    display.textContent = output_str;
                }else if(val === '-'){
                    output_str = Number(num1) - Number(num2);
                    display.textContent = output_str;
                }else if(val === 'X'){
                    output_str = Number(num1) * Number(num2);
                    display.textContent = output_str;
                }else if(val==="/"){
                    output_str = Number(num1) / Number(num2);
                    display.textContent = output_str;
                }

            }
            console.log(num1);
            console.log(num2);
            console.log(numbers);
        }   
        
    }
}



calculator.addEventListener('click', onCalc);


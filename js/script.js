const button_number = document.querySelectorAll('[data-number]');
const button_operation = document.querySelectorAll('[data-operation]');
const data_delete = document.querySelector('[data-delete]');
const data_clear = document.querySelector('[data-clear]');
const button_equal = document.querySelector('[data-equal]')

let previous_operand_text = document.querySelector('.previous');
let current_operand_text = document.querySelector('.current');
let previous_operand,current_operand;
let current_operation;

function add_number(button_number_para){
    button_number.forEach(button_number_para=>{
        button_number_para.addEventListener('click',()=>{
            if(button_number_para.textContent === '.' && current_operand_text.textContent.includes('.'))return
           current_operand_text.textContent += button_number_para.innerHTML;
           current_operand = current_operand_text.textContent; 
        })
    })
}
add_number();
button_operation.forEach(button_operation_para=>{
    button_operation_para.addEventListener('click',()=>{

        if(previous_operand_text.textContent.includes('/')||previous_operand_text.textContent.includes('+')||previous_operand_text.textContent.includes('-')||previous_operand_text.textContent.includes('*')){
            let result;
            const prev = parseFloat(previous_operand)
            const curr = parseFloat(current_operand)
            switch(current_operation){
                case'+':
                    result = curr + prev;
                break;
                case'-':
                    result= prev - curr;
                break;
                case'/':
                    result = prev / curr;
                break;
                case'*':
                    result = curr * prev;
                break;
                default:
                    break;
            }
            previous_operand_text.textContent = result + button_operation_para.innerHTML;
            current_operand_text.textContent=''
            current_operand=''
            previous_operand=result
            current_operation=button_operation_para.textContent
        }else{
            previous_operand = current_operand;
            current_operand=''
            previous_operand_text.textContent = previous_operand + button_operation_para.textContent
            current_operand_text.textContent=''
            current_operation = button_operation_para.textContent
        }
    })
})

button_equal.addEventListener('click',()=>{
    if(previous_operand_text.textContent.includes('/')||previous_operand_text.textContent.includes('+')||previous_operand_text.textContent.includes('-')||previous_operand_text.textContent.includes('*')){
        let result;
        const prev = parseFloat(previous_operand)
        const curr = parseFloat(current_operand)
        switch(current_operation){
            case'+':
                result = curr + prev;
            break;
            case'-':
                result= prev - curr;
            break;
            case'/':
                result = prev / curr;
            break;
            case'*':
                result = curr * prev;
            break;
            default:
                break;
        }
        current_operand_text.textContent=result;
        current_operand=result
        previous_operand_text.textContent=''
    }else{
        return
    }
})

data_delete.addEventListener('click',()=>{
    current_operand=current_operand.toString().slice(0,-1)
    current_operand_text.textContent=current_operand;
})

data_clear.addEventListener('click',()=>{
    current_operand=previous_operand=current_operation=current_operand_text.textContent=previous_operand_text.textContent;
})

function displayNumber(num){
    // let resultBox=document.querySelector('#id_result')
    // resultBox.value+=num
    id_result.value+=num
}

function clearBox(){
    id_result.value=" "
}

function evaluateExpression(){
    let curExp=id_result.value
    let result=eval(curExp)
    id_result.value=result
}

function backSpace(){
    let curValue=id_result.value
    let out=curValue.slice(0,-1)
    id_result.value=out
}
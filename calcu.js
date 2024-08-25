const displayData =(content)=>{
    result.value += content
}
const cntentClear =()=>{
    result.value = ""
}
const operationTo = ()=>{
    try{
    result.value = eval(result.value)
    }
    catch{
        result.value = "Invalid"
    }
}


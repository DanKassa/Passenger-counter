let count = 0
function increament(){
    count = count + 1 
    document.getElementById("count-el").innerHTML = count
    
}



function save(){
    let value = count + "-"
    document.getElementById("save").textContent += value
    count = 0
    document.getElementById("count-el").innerText = count
}



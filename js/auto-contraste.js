function toggleContrast() {
    var formElement = document.getElementById("form")
    
    if(formElement.className == "container"){
        formElement.className = "high-contrast";
    }else{
        formElement.className = "container"
    }
}

function autocontrastehome() {
    var bodyElement = document.querySelector("body")

    if(bodyElement.id == "bodyon"){
        bodyElement.className = "high-contrast";
        bodyElement.id = "bodyoff"
    }else{
        bodyElement.className = ""
        bodyElement.id = "bodyon"
    }
    
}

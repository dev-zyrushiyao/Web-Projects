// A tag navlist action listener
clickCity = (element) => {
    window.alert(`${element.innerText}`);
}

toCelsius = (farenheit) => {
    let celsius = (farenheit - 32) * 5/9;
    return celsius;
}

toFahrenheit = (celsius) => {
    let farenheit = (celsius * 9/5) + 32;
    return farenheit;
}


chosenTemp = (element) => {
    // console.log(element.value);

    window.alert("Loading weather report..");

let temp1 = document.querySelectorAll(".temp-1");   
let temp2 = document.querySelectorAll(".temp-2");   
    
    if (element.value == "fahrenheit"){    
        for (let i = 0; i < temp1.length ; i++){
        let parsedText1 = parseInt(temp1[i].innerText);
        let parsedText2 = parseInt(temp2[i].innerText);
        temp1[i].innerText = toFahrenheit(parsedText1).toFixed(1) + "°";
        temp2[i].innerText = toFahrenheit(parsedText2).toFixed(1) + "°";
    }

    }else if (element.value == "celsius"){
    
    for (let i = 0; i < temp1.length ; i++){
        parsedText1 = parseInt(temp1[i].innerText);
        parsedText2 = parseInt(temp2[i].innerText);
        temp1[i].innerText = toCelsius(parsedText1).toFixed(0) + "°";
        temp2[i].innerText = toCelsius(parsedText2).toFixed(0) + "°";
    }
    
    }
}

agreeBtn = () => {
    let cookieBox = document.querySelector("#cookie");
    cookieBox.remove();
}

shadeFX = (element) =>{
    element.classList.add("shade-hover");
    element.setAttribute("title", "Weather forecast");
}

undoShade = (element) => {
    element.classList.remove("shade-hover");
}
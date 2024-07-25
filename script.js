const convertButton = document.querySelector(".convert-button")
const selectConverted = document.querySelector(".select-current-converted")
const selectToConvert = document.querySelector(".select-current-to-convert")

function convertCurrency(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value")
    const currencyValueConverted = document.querySelector(".currency-value-converted")

    const dolarToDay = 5.65
    const euroToDay = 6.13
    const libra = 7.26
    const bitcoin = 365241.88
    
    currencyValueToConvert.innerText = new Intl.NumberFormat("pt-BR", {
        style: "currency", 
        currency: "BRL"
    }).format(inputCurrencyValue) 

    if(selectConverted.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToDay)
    }
    if(selectConverted.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToDay)
    }
    // if(selectConverted.value == "libra"){
    //     currencyValueConverted.innerHTML = new Intl.NumberFormat("",{
    //         style: "currency",
    //         currency: "LBR"
    //     })
    // }
}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name-converted")
    const currencyImage = document.querySelector(".currency-img-converted")
    
    if(selectConverted.value == "real"){
        currencyName.innerHTML = "Real Brasileiro"
        currencyImage.src = "./assets/2br.png"
    }
    if(selectConverted.value == "dolar"){
        currencyName.innerHTML = "Dolar Americano"
        currencyImage.src = "./assets/1usa.png"
    }
    if(selectConverted.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/3euro.png"
    }
    if(selectConverted.value == "libra"){
        currencyName.innerHTML = "Libra Esterlina"
        currencyImage.src = "./assets/1libra.png"
    }
    if(selectConverted.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/1bit.png"
    }

    convertCurrency()
}

function changeToCurrency(){
    const currencyNameToConvert = document.getElementById("currency-name-to-convert")
    const currencyImageToConvert = document.querySelector(".currency-img-to-convert")

    if(selectToConvert.value == "real"){
        currencyNameToConvert.innerHTML = "Real Brasileiro"
        currencyImageToConvert.src = "./assets/2br.png"
    }
    if(selectToConvert.value == "dolar"){
        currencyNameToConvert.innerHTML = "Dolar Americano"
        currencyImageToConvert.src = "./assets/1usa.png"
    }
    if(selectToConvert.value == "euro"){
        currencyNameToConvert.innerHTML = "Euro"
        currencyImageToConvert.src = "./assets/3euro.png"
    }
    if(selectToConvert.value == "libra"){
        currencyNameToConvert.innerHTML = "Libra Esterlina"
        currencyImageToConvert.src = "./assets/1libra.png"
    }
    if(selectToConvert.value == "bitcoin"){
        currencyNameToConvert.innerHTML = "Bitcoin"
        currencyImageToConvert.src = "./assets/1bit.png"
    }

    convertCurrency()
}

selectToConvert.addEventListener("change", changeToCurrency)
selectConverted.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertCurrency)
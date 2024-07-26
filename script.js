const button = document.querySelector(".convert-currency")
const currencySelect = document.querySelector(".currency-select-converted")
const currencySelectToConvert = document.querySelector(".currency-select-to-convert")
let currency = document.querySelector(".currency-value")
let inputCurrency = document.querySelector(".input-currency").value
let currencyConverted = document.querySelector(".currency-value-converted")


function convertCurrency() {
    currency = document.querySelector(".currency-value")
    inputCurrency = document.querySelector(".input-currency").value
    currencyConverted = document.querySelector(".currency-value-converted")

    const realToDolarToDay = 5.20
    const realToEuroToDay = 5.50
    const realToLibraToDay = 7.26
    const realToBitcoinToDay = 373082.73
    const realToIeneToDay = 0.037
    const realToRubloToDay = 0.066

    const dolarToEuroToDay = 1.09
    const dolarToLibraToDay = 1.29
    const dolarToBitcoinToDay = 66432.40
    const dolarToIeneToDay = 0.0065
    const dolarToRubloToDay = 0.012

    const euroToLibraToDay = 1.18
    const euroToBitcoinToDay = 61297.03
    const euroToIeneToDay = 0.006
    const euroToRubloToDay = 0.011

    const libraToBitcoinToDay = 51875.79
    const libraToIeneToDay = 0.0051
    const libraToRubloToDay = 0.0091

    const bitcoinToIeneToDay = 0.000000097
    const bitcoinToRubloToDay = 0.00000018

    const ieneToRubloToDay = 0.55

    if (currencySelect.value == "real" & currencySelectToConvert.value == "real") {
        currencyConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrency)
        currency.innerText = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrency)
    }
    if (currencySelect.value == "dolar" & currencySelectToConvert.value == "dolar") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency)
        currency.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency)
    }
    if (currencySelect.value == "euro" & currencySelectToConvert.value == "euro") {
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency)
        currency.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency)
    }
    if (currencySelect.value == "libra" & currencySelectToConvert.value == "libra") {
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrency)
        currency.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrency)
    }
    if (currencySelect.value == "bitcoin" & currencySelectToConvert.value == "bitcoin") {
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrency)
        currency.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrency)
    }
    if (currencySelect.value == "iene" & currencySelectToConvert.value == "iene") {
        currencyConverted.innerHTML = new Intl.NumberFormat('ja-JP', { 
            style: 'currency', 
            currency: 'JPY' 
        }).format(inputCurrency)
        currency.innerHTML = new Intl.NumberFormat('ja-JP', { 
            style: 'currency', 
            currency: 'JPY' 
        }).format(inputCurrency)
    }
    if (currencySelect.value == "rublo" & currencySelectToConvert.value == "rublo") {
        currencyConverted.innerHTML = new Intl.NumberFormat("ru-Mo", {
            style: "currency",
            currency: "RUB"
        }).format(inputCurrency)
        currency.innerHTML = new Intl.NumberFormat("ru-Mo", {
            style: "currency",
            currency: "RUB"
        }).format(inputCurrency)
    }

    if (currencySelect.value == "dolar" & currencySelectToConvert.value == "real") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency / realToDolarToDay)
    }
    if (currencySelect.value == "euro" & currencySelectToConvert.value == "real") {
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency / realToEuroToDay)
    }
    if (currencySelect.value == "libra" & currencySelectToConvert.value == "real") {
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrency / realToLibraToDay)
    }
    if (currencySelect.value == "bitcoin" & currencySelectToConvert.value == "real") {
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrency / realToBitcoinToDay)
    }
    if (currencySelect.value == "iene" & currencySelectToConvert.value == "real") {
        currencyConverted.innerHTML = new Intl.NumberFormat('ja-JP', { 
            style: 'currency', 
            currency: 'JPY' 
        }).format(inputCurrency / realToIeneToDay)
    }
    if(currencySelect.value == "rublo" & currencySelectToConvert.value == "real"){
        currencyConverted.innerHTML = new Intl.NumberFormat("ru-Mo", {
            style: "currency",
            currency: "RUB"
        }).format(inputCurrency / realToRubloToDay)
    }

    if (currencySelect.value == "real" & currencySelectToConvert.value == "dolar") {
        currencyConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(realToDolarToDay / inputCurrency)
    }
    if (currencySelect.value == "euro" & currencySelectToConvert.value == "dolar") {
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency / dolarToEuroToDay)
    }
    if (currencySelect.value == "libra" & currencySelectToConvert.value == "dolar") {
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrency / dolarToLibraToDay)
    }
    if (currencySelect.value == "bitcoin" & currencySelectToConvert.value == "dolar") {
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrency / dolarToBitcoinToDay)
    }
    if (currencySelect.value == "iene" & currencySelectToConvert.value == "dolar") {
        currencyConverted.innerHTML = new Intl.NumberFormat('ja-JP', { 
            style: 'currency', 
            currency: 'JPY' 
        }).format(inputCurrency / dolarToIeneToDay)
    }
    if(currencySelect.value == "rublo" & currencySelectToConvert.value == "dolar"){
        currencyConverted.innerHTML = new Intl.NumberFormat("ru-Mo", {
            style: "currency",
            currency: "RUB"
        }).format(inputCurrency / dolarToRubloToDay)
    }

    if (currencySelect.value == "real" & currencySelectToConvert.value == "euro") {
        currencyConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(realToEuroToDay / inputCurrency)
    }
    if (currencySelect.value == "dolar" & currencySelectToConvert.value == "euro") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(dolarToEuroToDay / inputCurrency)
    }
    if (currencySelect.value == "libra" & currencySelectToConvert.value == "euro") {
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrency / euroToLibraToDay)
    }
    if (currencySelect.value == "bitcoin" & currencySelectToConvert.value == "euro") {
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrency / euroToBitcoinToDay)
    }
    if (currencySelect.value == "iene" & currencySelectToConvert.value == "euro") {
        currencyConverted.innerHTML = new Intl.NumberFormat('ja-JP', { 
            style: 'currency', 
            currency: 'JPY' 
        }).format(inputCurrency / euroToIeneToDay)
    }
    if(currencySelect.value == "rublo" & currencySelectToConvert.value == "euro"){
        currencyConverted.innerHTML = new Intl.NumberFormat("ru-Mo", {
            style: "currency",
            currency: "RUB"
        }).format(inputCurrency / euroToRubloToDay)
    }

    if (currencySelect.value == "real" & currencySelectToConvert.value == "libra") {
        currencyConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(realToLibraToDay / inputCurrency)
    }
    if (currencySelect.value == "dolar" & currencySelectToConvert.value == "euro") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(dolarToLibraToDay / inputCurrency)
    }
    if (currencySelect.value == "euro" & currencySelectToConvert.value == "libra") {
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(euroToLibraToDay / inputCurrency)
    }
    if (currencySelect.value == "bitcoin" & currencySelectToConvert.value == "libra") {
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrency / libraToBitcoinToDay)
    }
    if (currencySelect.value == "iene" & currencySelectToConvert.value == "libra") {
        currencyConverted.innerHTML = new Intl.NumberFormat('ja-JP', { 
            style: 'currency', 
            currency: 'JPY' 
        }).format(inputCurrency / libraToIeneToDay)
    }
    if(currencySelect.value == "rublo" & currencySelectToConvert.value == "libra"){
        currencyConverted.innerHTML = new Intl.NumberFormat("ru-Mo", {
            style: "currency",
            currency: "RUB"
        }).format(inputCurrency / libraToRubloToDay)
    }

    if (currencySelect.value == "real" & currencySelectToConvert.value == "bitcoin") {
        currencyConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(realToBitcoinToDay / inputCurrency)
    }
    if (currencySelect.value == "dolar" & currencySelectToConvert.value == "bitcoin") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(dolarToBitcoinToDay / inputCurrency)
    }
    if (currencySelect.value == "euro" & currencySelectToConvert.value == "bitcoin") {
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(euroToBitcoinToDay / inputCurrency)
    }
    if (currencySelect.value == "libra" & currencySelectToConvert.value == "bitcoin") {
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(libraToBitcoinToDay / inputCurrency)
    }
    if (currencySelect.value == "iene" & currencySelectToConvert.value == "bitcoin") {
        currencyConverted.innerHTML = new Intl.NumberFormat('ja-JP', { 
            style: 'currency', 
            currency: 'JPY' 
        }).format(inputCurrency / bitcoinToIeneToDay)
    }
    if(currencySelect.value == "rublo" & currencySelectToConvert.value == "bitcoin"){
        currencyConverted.innerHTML = new Intl.NumberFormat("ru-Mo", {
            style: "currency",
            currency: "RUB"
        }).format(inputCurrency / bitcoinToRubloToDay)
    }

    if (currencySelect.value == "real" & currencySelectToConvert.value == "iene") {
        currencyConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(realToIeneToDay / inputCurrency)
    }
    if (currencySelect.value == "dolar" & currencySelectToConvert.value == "iene") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(dolarToIeneToDay / inputCurrency)
    }
    if (currencySelect.value == "euro" & currencySelectToConvert.value == "iene") {
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(euroToIeneToDay / inputCurrency)
    }
    if (currencySelect.value == "libra" & currencySelectToConvert.value == "iene") {
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(libraToIeneToDay / inputCurrency)
    }
    if (currencySelect.value == "bitcoin" & currencySelectToConvert.value == "iene") {
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(bitcoinToIeneToDay / inputCurrency)
    }
    if (currencySelect.value == "iene" & currencySelectToConvert.value == "bitcoin") {
        currencyConverted.innerHTML = new Intl.NumberFormat('ja-JP', { 
            style: 'currency', 
            currency: 'JPY' 
        }).format(inputCurrency / bitcoinToIeneToDay)
    }
    if(currencySelect.value == "rublo" & currencySelectToConvert.value == "iene"){
        currencyConverted.innerHTML = new Intl.NumberFormat("ru-Mo", {
            style: "currency",
            currency: "RUB"
        }).format(inputCurrency / ieneToRubloToDay)
    }

    
    if (currencySelect.value == "real" & currencySelectToConvert.value == "rublo") {
        currencyConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(realToRubloToDay / inputCurrency)
    }
    if (currencySelect.value == "dolar" & currencySelectToConvert.value == "rublo") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(dolarToRubloToDay / inputCurrency)
    }
    if (currencySelect.value == "euro" & currencySelectToConvert.value == "rublo") {
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(euroToRubloToDay / inputCurrency)
    }
    if (currencySelect.value == "libra" & currencySelectToConvert.value == "rublo") {
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(libraToRubloToDay / inputCurrency)
    }
    if (currencySelect.value == "bitcoin" & currencySelectToConvert.value == "rublo") {
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(bitcoinToRubloToDay / inputCurrency)
    }
    if (currencySelect.value == "iene" & currencySelectToConvert.value == "rublo") {
        currencyConverted.innerHTML = new Intl.NumberFormat('ja-JP', { 
            style: 'currency', 
            currency: 'JPY' 
        }).format(ieneToRubloToDay / inputCurrency)
    }
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name-converted")
    const currencyImage = document.querySelector(".currency-img-converted")

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImage.src = "./assets/real.png"
    }

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bit.png"
    }
    if(currencySelect.value == "iene"){
        currencyName.innerHTML = "Iene Japonês"
        currencyImage.src = "./assets/iene.png"
    }
    if(currencySelect.value == "rublo"){
        currencyName.innerHTML = "Rublo Russo"
        currencyImage.src = "./assets/rublo.png"
    }

    convertCurrency()
}

function changeCurrencyToConvert() {
    const currencyNameToConvert = document.getElementById("currency-name-to-convert")
    const currencyImageToConvert = document.querySelector(".currency-img-to-convert")

    if (currencySelectToConvert.value == "real") {
        currencyNameToConvert.innerHTML = "Real Brasileiro"
        currencyImageToConvert.src = "./assets/real.png"
        currency.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrency)
    }

    if (currencySelectToConvert.value == "dolar") {
        currencyNameToConvert.innerHTML = "Dólar Americano"
        currencyImageToConvert.src = "./assets/dolar.png"
        currency.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency)
    }

    if (currencySelectToConvert.value == "euro") {
        currencyNameToConvert.innerHTML = "Euro"
        currencyImageToConvert.src = "./assets/dolar.png"
        currency.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency)
    }

    if (currencySelectToConvert.value == "libra") {
        currencyNameToConvert.innerHTML == "Libra Esterlina"
        currencyImageToConvert.src = "./assets/libra.png"
        currency.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrency)
    }

    if (currencySelectToConvert.value == "bitcoin") {
        currencyNameToConvert.innerHTML = "Bitcoin"
        currencyImageToConvert.src = "./assets/bit.png"
        currency.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrency)
    }
    if(currencySelectToConvert.value == "iene"){
        currencyNameToConvert.innerHTML = "Iene Japonês"
        currencyImageToConvert.src = "./assets/iene.png"
        currency.innerHTML = new Intl.NumberFormat('ja-JP', { 
            style: 'currency', 
            currency: 'JPY' 
        }).format(inputCurrency)
    }
    if(currencySelectToConvert.value == "rublo"){
        currencyNameToConvert.innerHTML = "Rublo Russo"
        currencyImageToConvert.src = "./assets/rublo.png"
        currency.innerHTML = new Intl.NumberFormat("ru-Mo", {
            style: "currency",
            currency: "RUB"
        }).format(inputCurrency)
    }

    convertCurrency()
}

convertCurrency()

currencySelectToConvert.addEventListener("change", changeCurrencyToConvert)
currencySelect.addEventListener("change", changeCurrency)
button.addEventListener("click", convertCurrency)

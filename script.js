let convertBtn = document.querySelector("#btn-converter")
let selectCurrencyConverted = document.querySelector(".slct-moedas")
let selectCurrencyConvert = document.querySelector(".currency-select")
let currencyConverted = document.querySelector(".currency-converted")
let currencyToConvert = document.querySelector(".currency-value")

function convertValue() {
    let euroToday = 5.38
    let dolarToday = 4.98
    let libraToday = 6.29
    let bitcoinToday = 341.525

    let iptCurrency = document.querySelector("#ipt-valor").value

    if (selectCurrencyConvert.value == "real") {
        currencyToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",       // tipo: moeda
            currency: "BRL"          // tipo da moeda: real
        }).format(iptCurrency)
    
        if (selectCurrencyConverted.value == "dolar") {
            currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency", 
                currency: "USD"
            }).format(Number(iptCurrency / dolarToday))
        }
        else if (selectCurrencyConverted.value == "euro") {
            currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(Number(iptCurrency / euroToday))
        }
        else if (selectCurrencyConverted.value == "libra") {
            currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "GBP"
            }).format(Number(iptCurrency / libraToday))
        }
        else if (selectCurrencyConverted.value == "bitcoin") {
            currencyConverted.innerHTML = new Intl.NumberFormat("de-De", {
                style: "currency",
                currency: "BTC"
            }).format(Number(iptCurrency / bitcoinToday))
        }
    }
    else if (selectCurrencyConvert.value == "dolar") {
        currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",      
            currency: "USD"          
        }).format(iptCurrency)

        if (selectCurrencyConverted.value == "real") {
            currencyConverted.innerHTML = new Intl.NumberFormat("pt-br",{
                style: "currency",
                currency: "BRL"
            }).format(Number(iptCurrency * dolarToday))
        }
        else if (selectCurrencyConverted.value == "euro") {
            currencyConverted.innerHTML = new Intl.NumberFormat("de-DE",{
                style: "currency",
                currency: "EUR"
            }).format(Number(iptCurrency / 1.08))
        }
        else if (selectCurrencyConverted.value == "libra") {
            currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "GBP"
            }).format(Number(iptCurrency / 1.26))
        }
        else if (selectCurrencyConverted.value == "bitcoin") {
            currencyConverted.innerHTML = new Intl.NumberFormat("de-De", {
                style: "currency",
                currency: "BTC"
            }).format(Number(iptCurrency / 67))
        }
    }
    else if (selectCurrencyConvert.value == "euro") {
        currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",      
            currency: "EUR"          
        }).format(iptCurrency)

        if (selectCurrencyConverted.value == "real") {
            currencyConverted.innerHTML = new Intl.NumberFormat("pt-br",{
                style: "currency",
                currency: "BRL"
            }).format(Number(iptCurrency * euroToday))
        }
        else if (selectCurrencyConverted.value == "dolar") {
            currencyConverted.innerHTML = new Intl.NumberFormat("en-US",{
                style: "currency",
                currency: "USD"
            }).format(Number(iptCurrency * 1.08))
        }
        else if (selectCurrencyConverted.value == "libra") {
            currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "GBP"
            }).format(Number(iptCurrency / 1.17))
        }
        else if (selectCurrencyConverted.value == "bitcoin") {
            currencyConverted.innerHTML = new Intl.NumberFormat("de-De", {
                style: "currency",
                currency: "BTC"
            }).format(Number(iptCurrency / 65.5))
        }
    }
    else if (selectCurrencyConvert.value == "libra") {
        currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",      
            currency: "GBP"          
        }).format(iptCurrency)

        if (selectCurrencyConverted.value == "real") {
            currencyConverted.innerHTML = new Intl.NumberFormat("pt-br",{
                style: "currency",
                currency: "BRL"
            }).format(Number(iptCurrency * libraToday))
        }
        else if (selectCurrencyConverted.value == "dolar") {
            currencyConverted.innerHTML = new Intl.NumberFormat("en-US",{
                style: "currency",
                currency: "USD"
            }).format(Number(iptCurrency * 1.26))
        }
        else if (selectCurrencyConverted.value == "euro") {
            currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(Number(iptCurrency * 1.17))
        }
        else if (selectCurrencyConverted.value == "bitcoin") {
            currencyConverted.innerHTML = new Intl.NumberFormat("de-De", {
                style: "currency",
                currency: "BTC"
            }).format(Number(iptCurrency / 56))
        }
    }
    else if (selectCurrencyConvert.value == "bitcoin") {
        currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",      
            currency: "BTC"          
        }).format(iptCurrency)

        if (selectCurrencyConverted.value == "real") {
            currencyConverted.innerHTML = new Intl.NumberFormat("pt-br",{
                style: "currency",
                currency: "BRL"
            }).format(Number(iptCurrency * bitcoinToday))
        }
        else if (selectCurrencyConverted.value == "dolar") {
            currencyConverted.innerHTML = new Intl.NumberFormat("en-US",{
                style: "currency",
                currency: "USD"
            }).format(Number(iptCurrency * 67))
        }
        else if (selectCurrencyConverted.value == "euro") {
            currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(Number(iptCurrency * 65))
        }
        else if (selectCurrencyConverted.value == "libra") {
            currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "GBT"
            }).format(Number(iptCurrency * 55))
        }
    }
}

function changeSelect() {
    let typeConverted = document.querySelector(".type-converted")
    let flagImgConverted = document.querySelector(".img-bnd-converted") 

    if (selectCurrencyConverted.value == "dolar"){
        currencyConverted.innerHTML = "US$ 0.00"
        typeConverted.innerHTML = "Dolár Americano"
        flagImgConverted.src = "./Assets/estados-unidos.png"
    }
    else if (selectCurrencyConverted.value == "euro") {
        currencyConverted.innerHTML = "0,00 €"
        typeConverted.innerHTML = "Euro"
        flagImgConverted.src = "./Assets/euro.png"
    }
    else if (selectCurrencyConverted.value == "libra") {
        currencyConverted.innerHTML = "£0,00"
        typeConverted.innerHTML = "Libra"
        flagImgConverted.src = "./Assets/libra.png"
    }
    else if (selectCurrencyConverted.value == "bitcoin") {
        currencyConverted.innerHTML = "0,00 BTC"
        typeConverted.innerHTML = "Bitcoin"
        flagImgConverted.src = "./Assets/bitcoin.png"
    }
    else {
        currencyConverted.innerHTML = "R$ 0,00"
        typeConverted.innerHTML = "Real"
        flagImgConverted.src = "./Assets/brasil.png"
    }
    convertValue()
}

function changeSelectConvert() {
    let typeConvert = document.querySelector(".type-convert")
    let flagImgConvert = document.querySelector(".img-bnd")

    if (selectCurrencyConvert.value == "real"){
        currencyToConvert.innerHTML = "R$ 0,00"
        typeConvert.innerHTML = "Real"
        flagImgConvert.src = "./Assets/brasil.png"
    }
    else if (selectCurrencyConvert.value == "dolar"){
        currencyToConvert.innerHTML = "US$ 0.00"
        typeConvert.innerHTML = "Dolar Americano"
        flagImgConvert.src = "./Assets/estados-unidos.png"
    }
    else if (selectCurrencyConvert.value == "euro") {
        currencyToConvert.innerHTML = "0,00 €"
        typeConvert.innerHTML = "Euro"
        flagImgConvert.src = "./Assets/euro.png"
    }
    else if (selectCurrencyConvert.value == "libra") {
        currencyToConvert.innerHTML = "£0,00"
        typeConvert.innerHTML = "Libra"
        flagImgConvert.src = "./Assets/libra.png"
    }
    else if (selectCurrencyConvert.value == "bitcoin") {
        currencyToConvert.innerHTML = "0,00 BTC"
        typeConvert.innerHTML = "Bitcoin"
        flagImgConvert.src = "./Assets/bitcoin.png"
    }
}

selectCurrencyConvert.addEventListener("change", changeSelectConvert)
selectCurrencyConverted.addEventListener("change", changeSelect)
convertBtn.addEventListener("click", convertValue)


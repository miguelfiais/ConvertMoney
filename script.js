const button = document.getElementById("button-converter")
const select = document.getElementById("select-convertFor")



const convertValue = async () => {

    const input = document.getElementById("input-value").value
    const convertTo = document.getElementById("convert-to")
    const convertFor = document.getElementById("convert-for")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    const dollarPrice = data.USDBRL.high
    const euroPrice = data.EURBRL.high
    const bitcoinPrice = data.BTCBRL.high*1000

    convertTo.innerHTML = (new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(input));
    
    if(select.value==="US$ Dolar americano"){
        const result = (input / dollarPrice)
        convertFor.innerHTML = (new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(result));
    }
    if(select.value==="€ Euro"){
        const result = (input / euroPrice)
        convertFor.innerHTML = (new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(result));
    }
    if(select.value==="Bitcoin"){
        const result = (input / bitcoinPrice)
        convertFor.innerHTML = result
    }
    }

const changeConvert = () =>{

    const changeMoeda = document.getElementById("change-moeda")
    const changeImg = document.getElementById("img-for")
    if(select.value==="€ Euro"){
        changeMoeda.innerHTML = "Euro"
        changeImg.src = "./img/euro.png"

        
    }
    if(select.value==="US$ Dolar americano"){
        changeMoeda.innerHTML = "Dolar Americano"
        changeImg.src = "./img/estados-unidos (1) 1.png"
        
    }
    if(select.value==="Bitcoin"){
        changeMoeda.innerHTML = "Bitcoin"
        changeImg.src = "./img/bitcoin.png"
    }
    convertValue()
}

button.addEventListener("click", convertValue)
select.addEventListener("change",changeConvert)






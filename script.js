const button = document.getElementById("button-converter")
const select = document.getElementById("select-convertFor")

const dollarPrice = 5
const euroPrice = 5.43

const convertValue = () => {

    const input = document.getElementById("input-value").value
    const convertTo = document.getElementById("convert-to")
    const convertFor = document.getElementById("convert-for")

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
    }


const changeConvert = () =>{
    const changeMoeda = document.getElementById("change-moeda")
    const changeImg = document.getElementById("img-for")
    const textValue = document.getElementById("convert-for")
    if(select.value==="€ Euro"){
        changeMoeda.innerHTML = "Euro"
        changeImg.src = "./img/euro.png"

        
    }
    if(select.value==="US$ Dolar americano"){
        changeMoeda.innerHTML = "Dolar Americano"
        changeImg.src = "./img/estados-unidos (1) 1.png"
        
    }
    convertValue()
}

button.addEventListener("click", convertValue)
select.addEventListener("change",changeConvert)






const button = document.getElementById("button-converter")

const dollarPrice = 5.34


const convertValue = () =>{
    const input = document.getElementById("input-value").value
    const convertTo = document.getElementById("convert-to")
    const convertFor = document.getElementById("convert-for") 
    convertTo.innerHTML = (new Intl.NumberFormat('pt-BR', { 
        style: 'currency',
        currency: 'BRL' 
    }).format(input));
    const result = (input/dollarPrice)

    convertFor.innerHTML = (new Intl.NumberFormat('en-US', { 
        style: 'currency',
        currency: 'USD' 
    }).format(result));
}

button.addEventListener("click",convertValue)






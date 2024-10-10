let result = ''
let none = document.getElementById('error')
let output = document.getElementById('output')
let inputValue = document.getElementById('input')
const API_KEY = '7c2190e5d3be1598cce1ea32c34c00a9'

async function search() {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${API_KEY}`)
    const data = await res.json();
    console.log('Data is available', data);


    

    if (!(`${inputValue.value}`).includes(`${data.name}`) ) {
        output.innerHTML = `${data.message}`
    } else {
        result =
        `
        <p><b>City-Name:</b> ${data.name}</p>
        <p><b>Weather:</b> ${data.weather[0].description}</p>
        <p><b>Humidity:</b> ${data.main.humidity}</p>
        <p><b>Tempurature:</b> ${data.main.temp}</p>
        `
    
        output.innerHTML = result;
    }
}
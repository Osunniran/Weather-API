let result = ''
let output = document.getElementById('output')
let inputValue = document.getElementById('input')
const API_KEY = '7c2190e5d3be1598cce1ea32c34c00a9'

async function search() {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${API_KEY}`)
    const data = await res.json();
    console.log('Data is available', data);


       result +=
    `
    <p>${data.name}</p>
    <p>${data.weather[0].description}</p>
    <p>${data.main.humidity}</p>
    <p>${data.main.temp}</p>
    <p>${data.name}</p>
    `

    output.innerHTML = result;
}
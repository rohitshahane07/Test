// alert('kjf')

let button = document.querySelector('.button');
let inputValue = document.querySelector('.inputValue');
let name = document.querySelector('.name');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');



button.addEventListener('click',function(){
    
fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=a93d70e9b6fd8f1166b14c77d3a8304f')
.then(response => response.json())
.then(data => {
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];


    name.innerHTML = nameValue;
    temp.innerHTML =tempValue;
    desc.innerHTML = descValue;
})

.catch(err => alert('wrong city name!'))
} )


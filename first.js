//for the background color

const colors = [
    "#FFFFFF", // White
    "#FFFF00", // Yellow
    "#00FFFF", // Cyan
    "#FFC0CB", // Pink 
    "#D3D3D3", // Light Gray
    "#C0C0C0", // Silver
    "#FFD700", // Gold
    "#FFDAB9", // Peach
    "#F0FFFF", // Azure
    "#F5F5F5"  // Very Light Gray 
  ];


const bodys = document.body;

function body_color(){
    index = Math.floor(Math.random()*colors.length);
    bodys.style.backgroundColor = colors[index]
}

setInterval(body_color,2000)

const arr  = [
    'mahi.jpeg',
    'mahi1.jpeg',
    'mahi3.jpeg',
    'mahi4.jpeg',
    'mahi5.jpeg',
    'mahi6.jpeg',
    '20230310_165629.jpg',
    '20230312_152438.jpg',
    '20230312_152454.jpg'
]

const imagess = document.querySelector('.images')

function random_image(){
    
    index = Math.floor(Math.random()*arr.length)
    console.log(index)
     
    imagess.src = arr[index]
}


//first calculate the date

setInterval(random_image,3000)


function show_birthday(){
const date1 = new Date()
const date2 = new Date('2025-02-13T00:00:00')
const result = date2 - date1


// SHOWING THE DAYS
const days_showings = document.querySelector('.show_the_days_left')
days_showings.innerHTML = 'DAYS'

days_showings.style.color = 'black'
const days = Math.floor((result)/(1000*60*60*24))
const days_show = document.querySelector('.Days_showing')
days_show.innerHTML = days
//styling 
days_show.style.color = 'black'


//SHOWING THE HOURS

const hour_showings = document.querySelector('.hour_the_days_left')
hour_showings.innerHTML = 'HOURS'
hour_showings.style.color = 'black'

const hour = Math.floor((result)/(1000*60*60)%24)
const hour_show = document.querySelector('.hour_showing')
hour_show.innerHTML = hour
//styling 
hour_show.style.color = 'black'


//SHOWING THE MINUTES

const minutes_showings = document.querySelector('.minutes_the_days_left')
minutes_showings.innerHTML = 'MINUTES'
minutes_showings.style.color = 'black'

const minutes = Math.floor((result)/(1000*60)%60)
const minutes_show = document.querySelector('.minutes_showing')
minutes_show.innerHTML = minutes
//styling 
minutes_show.style.color = 'black'



// SHOWING THE SECONDS

const second_showings = document.querySelector('.second_the_days_left')
second_showings.innerHTML = 'SECOND'

second_showings.style.color = 'black'

const second = Math.floor((result)/(1000)%60)
const second_show = document.querySelector('.second_showing')
second_show.innerHTML = second
//styling 
second_show.style.color = 'black'

}
setInterval(show_birthday,1000)






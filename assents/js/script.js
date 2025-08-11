import { services } from "../js/data//data.js"
const serviceData = services

const listServices = document.querySelector('.list-service-content')
const serviceDescription =  document.querySelector('.service-description')
const serviceImg = document.querySelector('#img-service')

serviceDescription.innerText = services[0].description

serviceData.forEach((s)=> {
    console.log(s.title)
    const li = document.createElement('li')
    li.classList.add('service')
    li.setAttribute('data' , s.id)
    const span= document.createElement('span')

    const icon = document.createElement('i')
    const iconArrow = document.createElement('i')
    icon.innerHTML = s.icon
    iconArrow.innerHTML = '<i class="fa-solid fa-arrow-right"></i>'

    span.innerText = s.title

    li.appendChild(icon)
    li.appendChild(span)
    li.appendChild(iconArrow)

    listServices.appendChild(li)
})


function animation(){
    gsap.fromTo('.service-info' , {
        x:20,
        opacity:0
    },{
        x:0,
        opacity:1,
        duration:1
    })
}

document.addEventListener("DOMContentLoaded" , () => {
    const service = document.querySelectorAll('.service') 

    service.forEach((s) => {
        s.addEventListener('click' , () => {
            const id = s.getAttribute("data")
            console.log(id)
            serviceData.forEach((ser) => {
                if(ser.id == id) {
                    animation()
                    serviceImg.setAttribute('src' , ser.url)
                    serviceDescription.innerHTML = ser.description
                }
            })
            
        })
    })

})
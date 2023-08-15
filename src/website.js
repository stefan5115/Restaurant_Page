import makeHome from "./home"
import makeCard from "./menu"
import makeContact from "./contact"

function makeHeader(){
    const header = document.createElement('div')
    header.className = 'header'
    const h1 = document.createElement('h1')
    h1.textContent = "Stefan's Restaurant"

    content.appendChild(header)
    header.appendChild(h1)
    header.appendChild(makeNavbar())
}

function makeNavbar(){
    const navbar = document.createElement('div')
    navbar.className = 'navbar'
    const home = document.createElement('div')
    home.id = 'home'
    home.textContent = "Home"
    home.classList.add('active')

    home.addEventListener('click',(e)=>{
        if(e.target.id === 'home'){
            home.classList.add('active')
            document.getElementsByClassName('container-home')[0].style.display = 'block'
            menu.classList.remove('active')
            document.getElementsByClassName('container-menu')[0].style.display = 'none'
            contact.classList.remove('active')
            document.getElementsByClassName('container-contact')[0].style.display = 'none'
        }
})
    const menu = document.createElement('div')
    menu.id = 'menu'
    menu.textContent = "Menu"

    menu.addEventListener('click',(e)=>{
        if(e.target.id === 'menu'){
            home.classList.remove('active')
            document.getElementsByClassName('container-home')[0].style.display = 'none'
            menu.classList.add('active')
            document.getElementsByClassName('container-menu')[0].style.display = 'grid'
            contact.classList.remove('active')
            document.getElementsByClassName('container-contact')[0].style.display = 'none'
        }
    })

    const contact = document.createElement('div')
    contact.id = 'contact'
    contact.textContent = "Contact"

    contact.addEventListener('click',(e)=>{
        if(e.target.id === 'contact'){
            home.classList.remove('active')
            document.getElementsByClassName('container-home')[0].style.display = 'none'
            menu.classList.remove('active')
            document.getElementsByClassName('container-menu')[0].style.display = 'none'
            contact.classList.add('active')
            document.getElementsByClassName('container-contact')[0].style.display = 'flex'
        }
    })


    navbar.append(home,menu,contact)

    return navbar 
}

function makeMiddle(){
    const middle = document.createElement('div')
    middle.className = 'middle'
    const containerHome = document.createElement('div')
    containerHome.className = 'container-home'

    const containerMenu = document.createElement('div')
    containerMenu.className = 'container-menu'

    content.appendChild(middle)
    middle.appendChild(containerHome)
    containerHome.appendChild(makeHome())
    middle.appendChild(containerMenu)
    containerMenu.appendChild(makeCard('Burger','The Best Burger','/dist/image/burger.png'))
    containerMenu.appendChild(makeCard('Cheese','The Best Cheese','/dist/image/cheese.png'))
    containerMenu.appendChild(makeCard('Chicken','The Best Chicken','/dist/image/chicken.png'))
    containerMenu.appendChild(makeCard('Couscous','The Best Couscous','/dist/image/couscous.png'))
    containerMenu.appendChild(makeCard('Hummus','The Best hummus','/dist/image/hummus.png'))
    containerMenu.appendChild(makeCard('Pizza','The Best Pizza','/dist/image/pizza.png'))
    containerMenu.appendChild(makeCard('Sandwich','The Best Sandwich','/dist/image/sandwich.png'))
    containerMenu.appendChild(makeCard('Shrimp','The Best Shrimp','/dist/image/shrimp.png'))
    containerMenu.appendChild(makeCard('Apple Pie','The Best Apple Pie','/dist/image/apple-pie.png'))
    middle.appendChild(makeContact())
}

function makeFooter(){
    const footer = document.createElement('div')
    footer.className = 'footer'
  
    const p = document.createElement('p')
    p.textContent = "Copyright © 2023 Tanase Stefan"

    content.appendChild(footer)
    footer.appendChild(p)
}

function makeWebsite(){
    makeHeader(),
    makeMiddle(),
    makeFooter()
}


export default makeWebsite
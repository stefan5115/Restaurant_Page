function makeHome(){
    const home = document.createElement('div')
    home.className = 'home'

    const p1 = document.createElement('p')
    p1.textContent = 'Best Restaurant in your country'
    const p2 = document.createElement('p')
    p2.textContent = 'Made with passion since 2022'
    const img = document.createElement('img')
    img.src = '/dist/image/yonji.jpg'
    const p3 = document.createElement('p')
    p3.textContent = "Order online or visit us!"

    home.append(p1,p2,img,p3)

    return home
}

export default makeHome
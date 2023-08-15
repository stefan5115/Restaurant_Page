function makeContact(){
    const containerContact = document.createElement('div')
    containerContact.className = 'container-contact'
    const p1 = document.createElement('p')
    p1.textContent = "📞 123 456 789"
    const p2 = document.createElement('p')
    p2.textContent = "🏠 Romania, Bucuresti, Numarul 123"
    const img = document.createElement('img')
    img.src = '/dist/image/poza.png'

    containerContact.append(p1,p2,img)

    return containerContact
}

export default makeContact
function makeCard(name,description,src){
    const card = document.createElement('div')
    card.className = 'card'
    const cardBox = document.createElement('div')
    cardBox.className = 'cardbox'
    const img = document.createElement('img')
    img.src = src
    const h3 = document.createElement('h3')
    h3.textContent = name
    const p = document.createElement('p') 
    p.textContent = description

    
    card.appendChild(cardBox)
    cardBox.append(img,h3,p)

    return cardBox ,card
} 

export default makeCard
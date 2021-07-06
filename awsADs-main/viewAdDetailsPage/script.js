const adFromDb = {
    "id_adverts": "AAA000000001",
    "ads_title": "DELL 4800 I7 4800MQ 32 GB RAM NVIDIA SSD",
    "ads_image": "https://picsum.photos/id/0/300/300",
    "ads_description": "Estacion de trabajo profesional para diseño cad o juegos dell precision workstation m4800 procesador i7 4800 mq cuatro nucleos 8 logicos 32 gb ram , disco duro ssd 256 gb msata mucho mas rapido que los hdd normales donde va instalado el Windows 10 pro mas segundo disco duro 500gb hdd para datos tarjeta ",
    "id_author": "A00001",
    "ads_comments": [ "Muy bueno", "Llegó con retraso" ],
    "ads_price": "560.00 €",
    "ads_location": "Barcelona",
    "createdAt": "2021-07-01"
}

/* const getAd = async (id) => {
    try {
        const response = await axios.get(`https://48vo8uvu9e.execute-api.eu-west-1.amazonaws.com/Produccion/anuncios/` + id);
        return response.data;
      } catch (error) {
        console.log(error)
        return error
      }
} */

const adDetails = () => {
    const ad = adFromDb

    const root = document.getElementById("ad-details")

    const card = document.createElement('div')
    card.className = "card"

    const h2 = document.createElement('h2')
    h2.className = "card-title"
    h2.innerHTML= ad.ads_title
    card.appendChild(h2)  
    
    const img = document.createElement('img')
    img.src = ad.ads_image
    img.height = "300"
    img.width = "300"
    card.appendChild(img)

    const price = document.createElement('div')
    price.className = "price"
    price.innerHTML = ad.ads_price
    card.appendChild(price)

    const publishedBy = document.createElement('p')
    publishedBy.className = "space-between"
    card.appendChild(publishedBy)

    const location = document.createElement('span')
    location.innerHTML = ad.ads_location
    publishedBy.appendChild(location)

    const createdAt = document.createElement('span')
    createdAt.innerHTML = "Published on: " + ad.createdAt
    publishedBy.appendChild(createdAt)

    const description = document.createElement('p')
    description.className = "card-description"
    description.innerHTML = ad.ads_description
    card.appendChild(description)

    const commentList = document.createElement('div')
    commentList.className = "comment-list-container"
    card.appendChild(commentList)

    const commentListTitle = document.createElement('div')
    commentListTitle.className = "comment-list-title"
    commentListTitle.innerHTML = "Comments:"
    commentList.appendChild(commentListTitle)

    ad.ads_comments.map(c => {
        const comment = document.createElement('div')
        comment.className = "comment"
        commentList.appendChild(comment)

        const commentText = document.createElement('div')
        commentText.className = "comment-text"
        commentText.innerHTML = '- "' + c + '"'
        comment.appendChild(commentText)
    })
    
    root.appendChild(card)
}

window.onload = () => {
    adDetails()
}
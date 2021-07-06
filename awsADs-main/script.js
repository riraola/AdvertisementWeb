const data = [
    {
        "id_adverts": "AAA000000001",
        "ads_title": "DELL 4800 I7 4800MQ 32 GB RAM NVIDIA SSD",
        "ads_image": "https://picsum.photos/id/0/300/300",
        "ads_description": "Estacion de trabajo profesional para diseño cad o juegos dell precision workstation m4800 procesador i7 4800 mq cuatro nucleos 8 logicos 32 gb ram , disco duro ssd 256 gb msata mucho mas rapido que los hdd normales donde va instalado el Windows 10 pro mas segundo disco duro 500gb hdd para datos tarjeta ",
        "id_author": "A00001",
        "ads_comments": [ "Muy bueno", "Llegó con retraso" ],
        "ads_price": "560.00 €",
        "ads_location": "Barcelona",
        "createdAt": "2021-07-01"
    },
    {
        "id_adverts": "AAA000000002",
        "ads_title": "LENOVO YOGA 260 I5 6300U 8GB RAM 256 GB",
        "ads_image": "https://picsum.photos/id/1/300/300",
        "ads_description": "LENOVO THINKPAD YOGA 370 GAMA PROFESIONAL PROCESADOR I5 7300U 8 GB RAM 256 GB SSD M.2 MUCHO LAS RAPIDO QUE SSD NORMAL PANTALLA 13.3 PULGADAS TACTIL GIRA 360% SE CONVIERTE A TABLETA FULL HD 1920X1080 CON LAPIZ HDMI USB TIPO C MINIDISPLAYPORT LECTOR DE DNI 4G RANURA",
        "id_author": "A00002",
        "ads_comments": [ "Muy contento con la compra", "Lo aconsejo" ],
        "ads_price": "390.00 €",
        "ads_location": "Madrid",
        "createdAt": "2021-07-01"
    }
]

/* const getAllAds = async () => {
    try {
        const response = await axios.get(`https://48vo8uvu9e.execute-api.eu-west-1.amazonaws.com/Produccion/anuncios`);
    
        return response;
      } catch (errors) {
        console.error(errors);
      }
} */

const adList = () => {
    //const allAds = getAllAds()

    const allAds = data

    if ( allAds ) {
        const root = document.getElementById("ads-list")
        allAds.map(a => {
            const card = document.createElement('div')
            card.className = "card"
    
            const h2 = document.createElement('h2')
            h2.className = "card-title"
            h2.innerHTML= a.ads_title
            card.appendChild(h2)  
            
            const img = document.createElement('img')
            img.src = a.ads_image
            img.height = "300"
            img.width = "300"
            card.appendChild(img)

            const price = document.createElement('div')
            price.className = "price"
            price.innerHTML = a.ads_price
            card.appendChild(price)

            const publishedBy = document.createElement('p')
            publishedBy.className = "space-between"
            card.appendChild(publishedBy)

            const location = document.createElement('span')
            location.innerHTML = a.ads_location
            publishedBy.appendChild(location)

            const createdAt = document.createElement('span')
            createdAt.innerHTML = "Published on: " + a.createdAt
            publishedBy.appendChild(createdAt)

            const description = document.createElement('p')
            description.className = "card-description"
            description.innerHTML = a.ads_description
            card.appendChild(description)
         
            const divViewAdLink = document.createElement('div')
            divViewAdLink.className = "align-right"
            card.appendChild(divViewAdLink)
    
            const viewAdLink = document.createElement('a')
            viewAdLink.className = "view-ad-details-link"
            viewAdLink.href = "#" // add link to backend with a.id
            viewAdLink.innerHTML = "view ad details"
            divViewAdLink.appendChild(viewAdLink)

            const commentList = document.createElement('div')
            commentList.className = "comment-list-container"
            card.appendChild(commentList)

            const commentListTitle = document.createElement('div')
            commentListTitle.className = "comment-list-title"
            commentListTitle.innerHTML = "Comments:"
            commentList.appendChild(commentListTitle)

            a.ads_comments.map(c => {
                const comment = document.createElement('div')
                comment.className = "comment"
                commentList.appendChild(comment)

                const commentText = document.createElement('div')
                commentText.className = "comment-text"
                commentText.innerHTML = '- "' + c + '"'
                comment.appendChild(commentText)
            })
            
            root.appendChild(card)
        })
    }
}

window.onload = () => {
    adList()
}

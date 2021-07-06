const title = document.getElementById('title')
const photo = document.getElementById('photo')
const description = document.getElementById('description')

document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();  
    /* const body = {
        title: title.value,
        photo: photo.value,
        description: description.value
    }

    const response = async() => {
       const newAd = await axios.post(`https://48vo8uvu9e.execute-api.eu-west-1.amazonaws.com/Produccion/anuncios`, {
            headers: {
                'access-control-allow-origin': '*'
            },
            body
        })
        return newAd
    }

    return response() */
});
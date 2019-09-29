const fetch = require('node-fetch')



const getTatooineResidents = () => {
    const promise = fetch('https://swapi.co/api/planets/1/')

    return promise
        .then(response => {
            return response.json()
        })
        .then(myJSON => {
            return myJSON.residents
        })
        .catch(err => {
            console.log(err)
        })
}
getTatooineResidents()



module.exports = {
    getTatooineResidents,
}
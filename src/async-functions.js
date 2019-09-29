const fetch = require('node-fetch')



const getTatooineResidents = () => {
    fetch('https://swapi.co/api/planets/1/')
        .then(response => response.json())
        .then(data => {
            return data.residents
        })
        .catch(err => {
            console.log(err)
        })
}
getTatooineResidents()



module.exports = {
    getTatooineResidents
}
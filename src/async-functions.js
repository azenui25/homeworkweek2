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

const promiseMeAString = string => {

    return new Promise((resolve, reject) => {
        if (typeof string === 'string') {
            resolve('You kept the Promise!')
        } else {
            reject('You have failed me!')
        }
    })

    return promise

}

module.exports = {
    getTatooineResidents,
    promiseMeAString
}
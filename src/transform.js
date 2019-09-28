const groupAdultsByAgeRange = (people) => {
    return people.filter(person => person.age >= 18)
        .reduce((ageRange, person) => {

            const grouping = groups(person)
            ageRange[grouping] ? ageRange[grouping].push(person) : ageRange[grouping] = [person]
            return ageRange

        }, {})

    function groups(person) {
        console.log('function: ', person)
        if (person.age <= 20) return '20 and younger'
        if (person.age <= 30) return '21-30'
        if (person.age <= 40) return '31-40'
        if (person.age <= 50) return '41-50'
        return '51 and older'
    }



}



module.exports = {
    groupAdultsByAgeRange
}
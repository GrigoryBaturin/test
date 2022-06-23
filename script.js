function Person (s, name, age) {
    console.log(s, name, age)
    return `${name}${s[1]}`
}

let nameUser = 'Иван'
let ageUser = 30

let rtnInfo = Person`Имя: ${nameUser}, возраст ${ageUser}`
console.log(rtnInfo)
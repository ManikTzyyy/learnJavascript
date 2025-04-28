const cars2 = [
    {
        name : "Bmw",
        rating : 90
    },
    {
        name : "tesla",
        rating : 30
    },
    {
        name : "Supra",
        rating : 80
    },

]

const goodCars = cars2.filter((car) => car.rating >= 70)


const goodNamesCars = cars2.filter((car) => car.rating >= 70).map((car) =>car.name);

console.log(goodCars)
console.log(goodNamesCars)
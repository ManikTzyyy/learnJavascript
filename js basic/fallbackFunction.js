const cars = [
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

cars.forEach(function(car){
    console.log(`${car.name} - ${car.rating}/100`)
})
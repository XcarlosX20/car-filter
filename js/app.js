const brand = document.querySelector("#brand");
const year = document.querySelector("#year");
const doors = document.querySelector("#doors");
const transmission = document.querySelector("#transmission");
const minimum = document.querySelector("#minimum");
const maximum = document.querySelector("#maximum");
// last 30 years
const years = document.createElement('option');
const  max = new Date().getFullYear();
let min = max - 30;

for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}
const getAllCars = () => {
    return [
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2012,
            precio: 30000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2015,
            precio: 20000,
            puertas: 2,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2016,
            precio: 70000,
            puertas: 4,
            color: 'Rojo',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2015,
            precio: 25000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Chevrolet',
            modelo: 'Camaro',
            year: 2018,
            precio: 60000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2017,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2012,
            precio: 25000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 45000,
            puertas: 4,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2019,
            precio: 90000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2015,
            precio: 35000,
            puertas: 2,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2018,
            precio: 50000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2017,
            precio: 80000,
            puertas: 4,
            color: 'Negro',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
    ];
}
const cars = getAllCars();
document.addEventListener("DOMContentLoaded", () => {
    showCars(cars);
})
let dataSearch = {
    brand: "", year: 0, doors: 0, color: "", transmission: "", minimum: 0,
    maximum: 0
}
//events
        brand.addEventListener('input', (e) => {
            dataSearch.brand = e.target.value;
            filterCar();
        });
        year.addEventListener('input', (e) => {
            dataSearch.year = Number(e.target.value);
            
            filterCar();
        });
        doors.addEventListener('input', (e) => {
            dataSearch.doors = Number(e.target.value);
            filterCar();
        });
        color.addEventListener('input', (e) => {
            dataSearch.color = e.target.value;
            filterCar();
        });
        transmission.addEventListener('input', (e) => {
            dataSearch.transmission = e.target.value;
            filterCar();
        });
        minimum.addEventListener('input', (e) => {
            dataSearch.minimum = Number( e.target.value);
            filterCar();
        });
        maximum.addEventListener('input', (e) => {
            dataSearch.maximum = Number(e.target.value);
            filterCar();
        });
    const clearHTML = () => {
        while(result.firstChild){
            result.removeChild(result.firstChild);
        }
    }
    const showCars = (cars) => { 
        clearHTML();
        cars.forEach(car => {
            const carsHTML = document.createElement('p');
            carsHTML.innerHTML = `${car.marca} ${car.modelo} - ${car.year} - Transmission: ${car.transmision} - Doors: ${car.puertas} - Color: ${car.color} | $${car.precio}`;
            result.appendChild(carsHTML);
        });
    };
    const notFound = () => {
        clearHTML();
        const alert = document.createElement('div');    
        alert.classList.add('alert');
        alert.appendChild(document.createTextNode("Nothing found"));
        result.appendChild(alert);
        }
    filterCar = () => {
        const res = getAllCars().filter(filterBrand).filter(filterYear).filter(filterTransmission).filter(filterColor).filter(filterMinimum).filter(filterMaximum).filter(filterDoors);
        if(res.length > 0){
            console.log(res)
            showCars(res);
        }else{
            notFound();
        }
    }
    filterBrand = (car) => {
        if(dataSearch.brand){
            return car.marca === dataSearch.brand;
        }
    }
    filterYear = (car) => {
        if(dataSearch.year){
            return car.year === dataSearch.year;
        }else {return car};
    }
    filterTransmission = (car) => {
        if(dataSearch.transmission){
            return car.transmision === dataSearch.transmission;
        }else{
            return car
        }
    }
    filterColor = (car) => {
        if(dataSearch.color){
            return car.color === dataSearch.color;
        }else{
            return car
        }
    }
    filterMinimum = (car) => {
        if(dataSearch.minimum){
            return car.precio >= dataSearch.minimum;
        }else{
            return car
        }
    }
    filterMaximum = (car) => {
        if(dataSearch.maximum){
            return car.precio <= dataSearch.maximum;
        }else{
            return car
        }
    }    
    filterDoors = (car) => {
        if(dataSearch.doors){
            return car.puertas === dataSearch.doors;
        }else{
            return car
        }
    }
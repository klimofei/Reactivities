export interface ICar {
  model: string,
  manufacturer: string,
  maxspeed?: number
}

const car1: ICar = {
  model: '320',
  manufacturer: "BMW",
  maxspeed: 90
}


const car2: ICar = {
  model: 'C class',
  manufacturer: "Mercedes",
  maxspeed: 100
}

const car3: ICar = {
  model: 'Elantra',
  manufacturer: "Hundai",
  maxspeed: 70
}

export const cars = [car1, car2, car3];
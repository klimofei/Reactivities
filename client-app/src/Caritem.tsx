import React from 'react';
import { ICar } from "./demo";

interface IProps {
  car: ICar,
}

export const CarItem: React.FC<IProps> = ({car}) => {
return (
  <div>
    <h1>{car.manufacturer}</h1>
    <p>{car.model}</p>
    <p>{car.maxspeed}</p>
  </div>
)};
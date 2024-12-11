// Import elemen denan nama yang sama
import {PI, calculate, Circle  } from './export.mjs';

console.log("Nilai PI =", PI);
console.log("Luas lingkaran=", calculate(34));

const myCircle = new Circle(34);
console.log("Luas lingkaran dari objek=", myCircle.getArea());

//IMport ellemen default dengan nama bebas
import getCircumference from './export.mjs'

console.log("keliling lingkaran=", getCircumference(10));
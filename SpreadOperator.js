/*Spread Operator
Spread, memiliki arti sesuai dengan namanya, yaitu menyebarkan. 
Spread operator digunakan untuk menyebarkan nilai yang ada pada object dan array. 
Spread operator yang ditandai dengan sintaks tiga titik  (...) adalah fitur yang menarik dan membantu dalam pengelolaan object dan array. 
Dengan menggunakan spread operator, nilai object dan array dapat di-iterable menjadi beberapa element. */

//Membuat spread operator
const namadepan = { nama : 'Syanda'};
const namabelakang = { nama : 'Whisnu', alamat: 'Kota Bojonegoro, Kecamatan Padangan, Kelurahan Kebonagung'};
const namalamat = {...namadepan,...namabelakang};

console.log(namalamat);

//Menyalin objeck lain
const motor = { motor : 'Honda', tahun: 2010};
const copiedmotor = {...motor};

console.log(copiedmotor);

//Penggunaan di Array
const array1 = ['Syanda'];
const array2 = ['Indonesia', 'Jl. Surabaya no 80'];
const newArray = [...array1, ...array2];

console.log(newArray);

//Menyalin Array
const original = ['apple', 'banana', 'cherry'];
const copy = [...original];

console.log(copy); 
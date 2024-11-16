/* Cara menggunakan rest parameter adalah dengan menambahkan tiga titik (...) sebelum parameter terakhir. */
function number(role,more, ...manyMoreArgs) {
    console.log('role', role);
    console.log('more', more);
    console.log('manyMoreArgs', manyMoreArgs);
}

number('one', 'two', 'three');

/*Karena rest parameter menangani argument sebagai array,
 method array.length juga dapat digunakan pada rest parameter seperti berikut ini*/

 function number( ...manyMoreArgs) {
    console.log( manyMoreArgs.length);
    console.log('manyMoreArgs', manyMoreArgs);
}

number('one', 'two', 'three');

//Tak hanya method array.length, kita juga dapat menggunakan method array lainnya pada rest parameter.//
const favorites = ['Nasigoreng', 'Mie Goreng', 'Ayam Bkar', 'Mie Ayam']
const [first, second, ...rest] = favorites;

console.log(first);
console.log(second);
console.log(rest);

//Contoh penggunaan REST OPERATOR
//1,Menangani banyak argumen
function sum(...number) {
    return number.reduce((total,num) => total + num, 0);
}

console.log(sum(1,2,3,4));
console.log(sum(5,10));

//2.Menggabungkan sisa elemen dalam array
const [satu, dua, ...res] = [1,2,3,4,5];

console.log(satu);
console.log(dua);
console.log(res);

//3.Menggunakan Rest operator dan Objek
const person = { name: "Alice", age: 25, city: "New York", country: "USA" };
const { name, ...otherDetails } = person;
console.log(name);          // Output: Alice
console.log(otherDetails);  // Output: { age: 25, city: 'New York', country: 'USA' }

//4.Menggunakan parameter biasa dan rest operator
function greet(greeting, ...names) {
    return `${greeting}, ${names.join(", ")}!`;
}

console.log(greet("Hello", "Alice", "Bob", "Charlie")); 
// Output: Hello, Alice, Bob, Charlie!

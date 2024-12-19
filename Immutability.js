/*Immutability dalam JavaScript
Immutability adalah prinsip dalam pemrograman yang menyatakan bahwa
sebuah objek atau data tidak boleh diubah setelah diciptakan. 
Jika kita ingin mengubah data, 
kita perlu membuat salinan baru dengan nilai yang dimodifikasi,
 bukan mengubah data asli. 
 Konsep ini penting untuk menghindari bug yang muncul akibat perubahan data yang tidak terduga, 
 terutama dalam aplikasi yang kompleks.

Mengapa Immutability Penting?
1.Mencegah efek samping yang tidak diinginkan:
Data tidak akan berubah secara tidak sengaja di bagian lain dari program.
2.Meningkatkan prediktabilitas kode:
Kode menjadi lebih mudah dimengerti karena data bersifat tetap.
3.Mendukung paradigma Functional Programming:
Immutability adalah dasar dalam pemrograman fungsional. 
 */
//Contoh Immutability
//Di sini, data asli (numbers) tetap utuh, 
//sementara salinan baru (newNumbers) berisi nilai yang dimodifikasi.
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4]; // Membuat salinan baru dengan spread operator
console.log(numbers); // Output: [1, 2, 3] (tidak berubah)
console.log(newNumbers); // Output: [1, 2, 3, 4]


/*Teknik Immutability
1. Spread Operator untuk Array
Gunakan spread operator untuk membuat salinan array atau menambah elemen baru.
*/
const fruits = ["apple", "banana"];
const newFruits = [...fruits, "cherry"]; // Menambahkan elemen baru

console.log(fruits); // Output: ["apple", "banana"]
console.log(newFruits); // Output: ["apple", "banana", "cherry"]
//2. Spread Operator untuk Objek
//Spread operator juga dapat digunakan untuk membuat salinan objek.

const person1 = { name: "John", age: 25 };
const updatedPerson2 = { ...person1, age: 26 }; // Mengubah age tanpa mengubah objek asli

console.log(person1); // Output: { name: "John", age: 25 }
console.log(updatedPerson2); // Output: { name: "John", age: 26 }

//3. Menggunakan Array Methods (map, filter, reduce)
//Metode seperti map, filter, dan reduce digunakan untuk memproses array tanpa mengubah data asli.

//Contoh: Menggunakan map untuk membuat array baru

const numbers2 = [1, 2, 3];
const squaredNumbers2 = numbers.map((num) => num * num);

console.log(numbers2); // Output: [1, 2, 3] (tidak berubah)
console.log(squaredNumbers2); // Output: [1, 4, 9]

//Contoh: Menggunakan filter untuk memfilter data

const angka = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(angka); // Output: [1, 2, 3, 4, 5] (tidak berubah)
console.log(evenNumbers); // Output: [2, 4]

//4. Immutable Libraries
//Gunakan pustaka seperti Immutable.js atau Immer untuk mengelola data immutability secara lebih efisien, 
//terutama dalam aplikasi skala besar.
//Contoh dengan Immer:

/*import produce from "immer";

const orang = { name: "John", age: 25 };

const updatedorang = produce(orang, (draft) => {
  draft.age = 26;
});

console.log(orang); // Output: { name: "John", age: 25 }
console.log(updatedorang); // Output: { name: "John", age: 26 }
*/
//Immutability dengan Const
//Perlu diingat bahwa const membuat referensi variabel tidak dapat diubah, tetapi isi objek atau array masih dapat berubah kecuali Anda menggunakannya secara immutably.

//Contoh:

const numbers3 = [1, 2, 3];
numbers.push(4); // Ini diperbolehkan karena array tetap dapat dimutasi
console.log(numbers3); // Output: [1, 2, 3, 4]
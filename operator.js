//OPERATOR
// unary, binary, dan ternary.

let agef = 25;
 
// Unary operator
typeof agef;
 
// Binary operator
5 + 4;
10 / 2;
agef = 30;
 
// Ternary operator (conditional operator)
(agef < 18) ? 'You are too young!' : 'Welcome onboard!'; 

//ASSIGMENT OPERATOR
// Digunakan untuk menginisiasi nilai
const named = 'Dicoding';
let location = 'Bandung';
// Digunakan untuk mengubah nilai
location = 'Jakarta';

//ARITMATIKA OPERATOR
// Deklarasi variabel angka
let a = 10;
let b = 3;

// 1. Penjumlahan (+)
let addition = a + b;
console.log("Penjumlahan:", addition); // Output: Penjumlahan: 13

// 2. Pengurangan (-)
let subtraction = a - b;
console.log("Pengurangan:", subtraction); // Output: Pengurangan: 7

// 3. Perkalian (*)
let multiplication = a * b;
console.log("Perkalian:", multiplication); // Output: Perkalian: 30

// 4. Pembagian (/)
let division = a / b;
console.log("Pembagian:", division); // Output: Pembagian: 3.3333333333333335

// 5. Modulus (%) - Sisa hasil bagi
let modulus = a % b;
console.log("Modulus:", modulus); // Output: Modulus: 1

// 6. Eksponensial (**)
let exponentiation = a ** b; // Sama dengan 10^3
console.log("Eksponensial:", exponentiation); // Output: Eksponensial: 1000

// 7. Increment (++)
a++; // Nilai 'a' ditambah 1
console.log("Increment:", a); // Output: Increment: 11

// 8. Decrement (--)
b--; // Nilai 'b' dikurangi 1
console.log("Decrement:", b); // Output: Decrement: 2

/*Penjelasan:
Penjumlahan (+): Menambahkan dua nilai.
Pengurangan (-): Mengurangkan nilai kanan dari nilai kiri.
Perkalian (*): Mengalikan dua nilai.
Pembagian (/): Membagi nilai kiri dengan nilai kanan.
Modulus (%): Menghasilkan sisa hasil bagi dari pembagian.
Eksponensial (**): Menghitung pangkat, dalam contoh ini, 10^3.
Increment (++): Menambah nilai variabel sebesar 1.
Decrement (--): Mengurangi nilai variabel sebesar 1.*/


//Comparison Operator


// Deklarasi variabel angka
let x = 10;
let y = 5;
let z = "10";

// 1. Sama dengan (==)
// Mengecek apakah nilai 'x' sama dengan 'z' (hanya membandingkan nilai, tipe diabaikan)
console.log("Sama dengan (==):", x == z); // Output: true

// 2. Tidak sama dengan (!=)
// Mengecek apakah nilai 'x' tidak sama dengan 'y'
console.log("Tidak sama dengan (!=):", x != y); // Output: true

// 3. Identik (===)
// Mengecek apakah nilai dan tipe 'x' sama dengan 'z'
console.log("Identik (===):", x === z); // Output: false, karena tipe berbeda (number vs string)

// 4. Tidak identik (!==)
// Mengecek apakah nilai dan tipe 'x' tidak sama dengan 'z'
console.log("Tidak identik (!==):", x !== z); // Output: true

// 5. Lebih besar dari (>)
// Mengecek apakah 'x' lebih besar dari 'y'
console.log("Lebih besar dari (>):", x > y); // Output: true

// 6. Lebih besar atau sama dengan (>=)
// Mengecek apakah 'x' lebih besar atau sama dengan 'y'
console.log("Lebih besar atau sama dengan (>=):", x >= y); // Output: true

// 7. Lebih kecil dari (<)
// Mengecek apakah 'y' lebih kecil dari 'x'
console.log("Lebih kecil dari (<):", y < x); // Output: true

// 8. Lebih kecil atau sama dengan (<=)
// Mengecek apakah 'y' lebih kecil atau sama dengan 'x'
console.log("Lebih kecil atau sama dengan (<=):", y <= x); // Output: true


/*Penjelasan:
1. **Sama dengan (`==`)**: Membandingkan nilai dua variabel tanpa memperhatikan tipe data. Misalnya, `10 == "10"` bernilai `true`.
2. **Tidak sama dengan (`!=`)**: Mengecek apakah dua nilai tidak sama, tanpa memperhatikan tipe data.
3. **Identik (`===`)**: Membandingkan nilai dan tipe data. Misalnya, `10 === "10"` bernilai `false` karena tipe data berbeda (number vs string).
4. **Tidak identik (`!==`)**: Mengecek apakah nilai atau tipe data dari dua variabel tidak sama.
5. **Lebih besar dari (`>`)**: Mengecek apakah nilai di sebelah kiri lebih besar dari nilai di sebelah kanan.
6. **Lebih besar atau sama dengan (`>=`)**: Mengecek apakah nilai di sebelah kiri lebih besar atau sama dengan nilai di sebelah kanan.
7. **Lebih kecil dari (`<`)**: Mengecek apakah nilai di sebelah kiri lebih kecil dari nilai di sebelah kanan.
8. **Lebih kecil atau sama dengan (`<=`)**: Mengecek apakah nilai di sebelah kiri lebih kecil atau sama dengan nilai di sebelah kanan.

Operator-operator ini berguna untuk pengambilan keputusan dalam kode, seperti saat menggunakan pernyataan kondisional `if` dan `else`.*/

//Logical Operators
//// Deklarasi variabel boolean
let isAdult = true;
let hasPermission = false;

// 1. AND (&&) - Keduanya harus true untuk hasil akhir true
let canEnterClub = isAdult && hasPermission;
console.log("AND (&&):", canEnterClub); 
// Output: AND (&&): false, karena hasPermission bernilai false

// 2. OR (||) - Salah satu harus true agar hasil akhir true
let canEnterLounge = isAdult || hasPermission;
console.log("OR (||):", canEnterLounge); 
// Output: OR (||): true, karena isAdult bernilai true

// 3. NOT (!) - Membalik nilai dari true menjadi false atau sebaliknya
let isMinor = !isAdult;
console.log("NOT (!):", isMinor); 
// Output: NOT (!): false, karena isAdult bernilai true, maka !isAdult menjadi false

// Contoh tambahan: Menggunakan Logical Operators dalam pernyataan kondisional
let agee = 18;
let hasTicket = true;

// Mengecek apakah seseorang bisa masuk bioskop
if (agee >= 18 && hasTicket) {
    console.log("Selamat datang di bioskop!"); 
    // Output: Selamat datang di bioskop! (karena age >= 18 dan hasTicket true)
} else {
    console.log("Maaf, Anda tidak bisa masuk.");
}

/*Penjelasan:
AND (&&): Mengembalikan true hanya jika kedua operand bernilai true. Jika salah satu bernilai false, hasilnya false.
OR (||): Mengembalikan true jika salah satu operand bernilai true. Hanya akan false jika kedua operand bernilai false.
NOT (!): Membalik nilai dari true menjadi false atau sebaliknya.
Operator logika ini sering digunakan dalam pernyataan kondisional (if, else if, else) untuk membuat keputusan berdasarkan beberapa kondisi.*/
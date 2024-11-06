const currentYear = new Date().getFullYear();
const text = `Sekarang adalah tahun ${currentYear}`;

console.log(text);

// 1. String - tipe data untuk teks
let name = "Alice";
console.log("String:", name); // Output: String: Alice

// 2. Number - tipe data untuk angka (baik integer maupun float)
let age = 25; // Integer
let height = 5.9; // Float
console.log("Number (Integer):", age); // Output: Number (Integer): 25
console.log("Number (Float):", height); // Output: Number (Float): 5.9

// 3. Boolean - tipe data untuk nilai true atau false
let isStudent = true;
let hasGraduated = false;
console.log("Boolean (isStudent):", isStudent); // Output: Boolean (isStudent): true
console.log("Boolean (hasGraduated):", hasGraduated); // Output: Boolean (hasGraduated): false

// 4. Null - tipe data yang menunjukkan nilai kosong (dengan sengaja)
let emptyValue = null;
console.log("Null:", emptyValue); // Output: Null: null

// 5. Undefined - tipe data untuk variabel yang belum diberi nilai
let address;
console.log("Undefined:", address); // Output: Undefined: undefined

// 6. Object - tipe data untuk menyimpan koleksi data atau properti
let person = {
    name: "Alice",
    age: 25,
    isStudent: true
};
console.log("Object:", person); 
// Output: Object: { name: 'Alice', age: 25, isStudent: true }

// 7. Array - tipe data khusus dari objek untuk menyimpan daftar data
let hobbies = ["reading", "coding", "traveling"];
console.log("Array:", hobbies); 
// Output: Array: [ 'reading', 'coding', 'traveling' ]

// 8. Symbol - tipe data unik dan tidak dapat diubah
let uniqueId = Symbol("id");
console.log("Symbol:", uniqueId); // Output: Symbol: Symbol(id)

// 9. BigInt - tipe data untuk menyimpan angka yang sangat besar (lebih besar dari Number.MAX_SAFE_INTEGER)
let largeNumber = BigInt("123456789012345678901234567890");
console.log("BigInt:", largeNumber); // Output: BigInt: 123456789012345678901234567890n


/*String: Digunakan untuk menyimpan teks. Ditulis dalam tanda kutip ('...' atau "...").
Number: Menyimpan angka, termasuk bilangan bulat dan desimal.
Boolean: Tipe data yang hanya bisa memiliki nilai true atau false.
Null: Digunakan untuk merepresentasikan nilai yang "kosong" atau "tidak ada".
Undefined: Variabel yang dideklarasikan tanpa nilai akan otomatis bertipe undefined.
Object: Menyimpan koleksi data dengan pasangan key: value.
Array: Bentuk khusus dari objek untuk menyimpan data dalam daftar.
Symbol: Nilai unik yang tidak dapat berubah, sering digunakan sebagai identifikasi unik.
BigInt: Untuk menyimpan angka yang sangat besar melebihi batas yang didukung oleh tipe Number.*/

// MENGUBAH DATA MENJADI STRING
const number = 123;
const boolean = true;

const strNumber = String(number);
const strBoolean = boolean.toString();

console.log(strNumber); // output: "123"
console.log(strBoolean); // output: "true"

// MENGUBAH DATA MENJADI NUMBER
const strnomor = '123';
const strFloat = '3.14';
const noboolean = true;

const numFromString = Number(strNumber);
const floatFromString = Number(strFloat);
const numFromBoolean = Number(boolean);

console.log(numFromString); // output: 123
console.log(floatFromString); // output: 3.14
console.log(numFromBoolean); // output: 1

const cm = '20cm';
const px = '64px';

const intFromCM = parseInt(cm);
const intFromPX = parseInt(px);

console.log(intFromCM); // output: 20
console.log(intFromPX); // output: 64

// MENGUBAH DATA MENJADI BOOLEAN

const nomor = 123;
const string = 'Dicoding';
const empty = null;

const boolFromNumber = Boolean(nomor);
const boolFromString = Boolean(string);
const boolFromNull = Boolean(empty);

console.log(boolFromNumber); // output: true
console.log(boolFromString); // output: true
console.log(boolFromNull); // output: false

//Konversi Implisit
//STRING
const aged = 20;
const message = 'Umurku: ' + aged;

console.log(message); // output: Umurku: 20

//NUMBER
const ages = 20;
const messages = 'Umurku: ' + ages;

console.log(messages); // output: Umurku: 20


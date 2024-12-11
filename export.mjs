/* JavaScript mendukung dua jenis export:

1.Named Export
2.Default Export
1. Named Export
Named Export memungkinkan kita mengekspor beberapa elemen dari satu file. Elemen-elemen ini harus diimpor menggunakan nama yang sama seperti saat diekspor.

Sintaks Named Export
javascript
Salin kode
export const variableName = value;
export function functionName() { /* code }
export class ClassName{ code } 
*/

// CONTOH export beeberapa elemen//
export const PI = 3.14159;

export function calculate(radius) {
    return PI * radius * radius;
}

export class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return calculate(this.radius);
    }
}

//Default Export | sintaks
//export default Value;
//CONTOH

export default function calucalteCircumference(radius) {
    return 2 * Math.PI * radius;
} 


/* Tips Penting
Named Export bisa digunakan beberapa kali dalam satu file.
Default Export hanya bisa digunakan sekali dalam satu file.
Saat mengimpor, default export tidak menggunakan kurung kurawal {}, sedangkan named export memerlukan {}.
Kapan Menggunakan Named Export atau Default Export
Gunakan Default Export untuk elemen utama dari modul.
Gunakan Named Export untuk membagikan beberapa elemen dalam modul yang sama. */
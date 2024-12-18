/*5. Recursion
Recursion adalah teknik fungsi yang memanggil dirinya sendiri untuk menyelesaikan masalah.
Rekursi sering digunakan dalam pemrograman fungsional untuk menggantikan loop.
Contoh:
 */
//Menghitung faktorial dengan rekursi
function factorial(n) {
    if (n === 0) return 1;{ //Basis kusus
        return n * factorial(n - 1);//Rekursi
    }
    
}

console.log(factorial(5));
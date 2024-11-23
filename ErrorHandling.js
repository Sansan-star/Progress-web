/* Throwing Error
Saat terjadi error, sinyal yang disebut dengan exception akan bangkit.
 Cara lain untuk membuat exception adalah menggunakan keyword throw untuk generate sebuah error. 
 Sintaks dasarnya adalah seperti berikut.*/

const harga = 100;
const bayar = 80;

if (bayar < harga) {
 //throw new Error('Pembayaran kurang');
}

//Solusi menggunakan Catching Error
/* Try-Catch
Try merupakan blok kode yang akan menangani error, 
sedangkan catch merupakan blok kode yang dibangkitkan ketika terjadi error di dalam blok try.
Blok kode catch akan diabaikan ketika tidak ada error yang terjadi di dalam blok try. */

try {
    console.log('Memulai program');
    throw new Error('Error: Program berhenti');
    console.log('Mengakhiri program');
  } catch (err) {
    console.log('Karena ada error, blok ini akan dieksekusi');
  }

//Finally
/* Finally adalah blok kode yang berada di akhir try-catch. 
Bilamana catch dieksekusi hanya ketika ada error di dalam blok try,
 blok yang ada di finally akan selalu dieksekusi.*/  

 try {
    console.log('Ini try block');
  } catch (err) {
    console.log('Ini catch block');
  } finally {
    console.log('Ini finally block');
  } 
//888
  try {
    console.log('Ini try block');
    throw new Error('Error: Program berhenti');
  } catch (err) {
    console.log('Ini catch block');
  } finally {
    console.log('Ini finally block');
  }  

//CONTOH
function number(a,b) {
    try {
        //Periksa apakah input valid
        if (typeof a !== "number" || typeof b !== "number") {
            throw new Error ("Kedua input harus angka!");
        }

        //Periksa apakah pembagian dengan nol
        if (b===0){
        throw new Error ("Tidak bisa di bagi nol. ");
    }
    
    //jika tidak ada kesalahan, kembalikan hasil
    return a/b;
}catch (error) {
     //Tangkap dan tampilkan kesalahan
     console.error("Error:", error.message);
     return null; //Kembalikan nilai default   
    } finally{
        console.log("Complete");
    }
}

// Contoh penggunaan
console.log("Result:", number(10, 2)); 
console.log("Result:", number(10, 0)); 
console.log("Result:", number(10, "x"));

/* Penjelasan Kode
1.Validasi Input:
Pastikan kedua parameter adalah angka. Jika tidak, lemparkan kesalahan menggunakan throw new Error.

2.Cek Pembagian dengan Nol:
Jika pembagi (b) adalah 0, lemparkan kesalahan karena pembagian dengan nol tidak diperbolehkan.

3.Catch Block:
Menangkap kesalahan yang dilempar dan menampilkan pesan kesalahan di konsol.

4.Finally Block:
Blok ini akan selalu dijalankan, baik ada kesalahan atau tidak, cocok untuk tugas pembersihan (cleanup).

5.Nilai Default:
Jika terjadi kesalahan, fungsi mengembalikan null agar program tidak berhenti.*/
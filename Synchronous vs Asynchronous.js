/**Synchronous vs Asynchronous
Synchronous: Kode dieksekusi baris demi baris. Jika ada satu proses yang membutuhkan waktu lama, kode berikutnya akan menunggu sampai proses tersebut selesai.
Asynchronous: Proses tertentu tidak akan menghentikan eksekusi kode lainnya. Setelah selesai, hasilnya akan diproses, misalnya melalui callback atau promise.
 */

// Contoh Synchronous
console.log("Start");
for (let i = 0; i < 1000000000; i++) {} // Proses berat
console.log("End");

//Contoh Asynchronous
console.log("Start");

setTimeout(() => {
    console.log("This is asynchronous!");
}, 2000); // Tunggu 2 detik

console.log("End");

//Menstrukturkan Data dengan Map
//Map adalah tipe data yang mirip dengan object yaitu menyimpan data dengan key-value. 
//Kalau sama seperti object, lalu apa fungsinya map? Map berfungsi untuk menutupi kekurangan dari object. 
//Map dapat menggunakan key dengan tipe data apa pun, tidak seperti object yang hanya menerima string
//Membuat Map
const produk = new Map([
    ['sepatu', 500],
    ['topi', 200],
    ['celana', 300],
]);

console.log(produk);

//Menyimpan nilai map menggunakan set

produk.set('gesper', 150);
console.log(produk);

//mengakses nilai di map
console.log(produk.get('celana'));

//Menghapus nilai map
produk.set('terigu', 20);
console.log(produk);
produk.delete('terigu');
console.log(produk);

//Menstrukturkan Data dengan Set
//Terakhir, struktur data yang kita bahas adalah set. Set adalah struktur data yang spesial dibandingkan dengan map, array, dan object. Kenapa dikatakan spesial?
//Jawabannya adalah karena set tidak memiliki key dan indeks ketika menyimpan data. Selain itu, data yang disimpan di dalam set akan bernilai unik artinya tidak akan ada data yang duplikat.

//Membuat set
const angka = new Set([1,2,3]);
console.log(angka);

//menyimpan nilai di set menggunakan method add.
angka.add(4);
console.log(angka);

//Mengakses nilai di set
//Set memiliki perbedaan untuk cara mengakses nilainya yaitu menggunakan perulangan (looping).
angka.add(5);

for (const number of angka) {
    console.log(angka);
}

//Mengakses nilai di set menggunakan foreach
angka.forEach((number) => console.log(number));

//Menghapus nilai di set
angka.delete(2);
console.log(angka);
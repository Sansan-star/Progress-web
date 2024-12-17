/* 1. Pure Functions
Fungsi dikatakan pure jika:

1.Outputnya hanya bergantung pada inputnya.
2.Tidak memiliki efek samping (tidak mengubah variabel global atau data di luar fungsi).
Contoh:*/
//Pure function
function addWith(value, addingValue) {
    return value + addingValue;
  }
  
  const result1 = addWith(0, 1);
  console.log(`result1 is ${result1}`); // Output: result1 is 1
  
  const result2 = addWith(result1, 1);
  console.log(`result2 is ${result2}`); // Output: result2 is 2
  
  const result3 = addWith(result2, 1);
  console.log(`result3 is ${result3}`); // Output: result3 is 3
  
  console.log(result1, result2, result3); // Output: 1, 2, 3

  // Impure function (mengubah variabel global)
  let isi = 0;

  function addimpure(addingIsi) {
    isi += addingIsi; // Menambahkan nilai `addingIsi` ke `isi`
    console.log(`Current isi is ${isi}`); // Menampilkan nilai terkini `isi`
    return isi; // Mengembalikan nilai terkini `isi`
  }
  
  const hasil1 = addimpure(1); // Output: Current isi is 1
  const hasil2 = addimpure(1); // Output: Current isi is 2
  const hasil3 = addimpure(1); // Output: Current isi is 3
  
  console.log(hasil1, hasil2, hasil3); // Output: 1, 2, 3
  
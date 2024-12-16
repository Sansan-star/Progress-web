/*Mengapa Menggunakan Object Composition?
1.Menghindari Masalah Pewarisan: Terlalu banyak pewarisan (inheritance) dapat menyebabkan kode sulit dipahami dan diperluas.
2.Fleksibilitas: Anda dapat dengan mudah menambahkan atau menghapus fitur dari objek.
3.Reuse Kode: Fitur yang umum digunakan dapat dikelompokkan dalam modul atau fungsi reusable.*/

// Modul perilaku
function canWalk(obj) {
    obj.walk = function () {
      console.log(`${this.name} is walking.`);
    };
    return obj;
  }
  
  function canEat(obj) {
    obj.eat = function () {
      console.log(`${this.name} is eating.`);
    };
    return obj;
  }
  
  function canSwim(obj) {
    obj.swim = function () {
      console.log(`${this.name} is swimming.`);
    };
    return obj;
  }
// Membuat objek baru
function createPerson(name) {
    let person = { name };
    return canWalk(canEat(person)); // Menambahkan kemampuan 'walk' dan 'eat'
  }
  
  function createFish(name) {
    let fish = { name };
    return canSwim(fish); // Menambahkan kemampuan 'swim'
  }
  
  // Membuat objek dengan kemampuan yang berbeda
  const john = createPerson("John");
  john.walk(); // Output: John is walking.
  john.eat();  // Output: John is eating.
  
  const nemo = createFish("Nemo");
  nemo.swim(); // Output: Nemo is swimming.

/*Kelebihan Object Composition
1.Reusable: Modul perilaku dapat digunakan kembali untuk objek yang berbeda.
2.Tidak Ada Keterikatan: Tidak ada hierarki ketat seperti inheritance.
3.Fleksibilitas: Mudah untuk menambahkan atau menghapus kemampuan. */
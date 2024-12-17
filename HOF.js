/*2. Immutability
Immutability berarti data tidak boleh diubah setelah didefinisikan. 
Untuk memodifikasi data, Anda harus membuat salinan baru. 
Immutability membantu menghindari bug yang muncul dari perubahan tak terduga pada data.*/

// Menggunakan spread operator untuk menjaga immutability
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4]; // Tidak mengubah array asli

console.log(numbers);     // [1, 2, 3]
console.log(newNumbers);  // [1, 2, 3, 4]

/*3. Higher-Order Functions
Higher-order functions adalah fungsi yang:

1.Menerima fungsi lain sebagai argumen.
2.Mengembalikan fungsi lain sebagai hasil.
Contoh:
 */

// Higher-order function
function calculate(operation) {
    return function (a, b) {
      return operation(a, b);
    };
  }
  
  const add = calculate((x, y) => x + y);
  console.log(add(2, 3)); // 5

//Komposisi Fungsi
function addOne(x) {
    return x + 1;
  }
  
  function square(x) {
    return x * x;
  }
  
  function compose(f, g) {
    return (x) => {
      return f(g(x));
    }
  }
  
  const addOneAndSquare = compose(square, addOne);
  
  console.log(addOneAndSquare(2)); // output: 9
  
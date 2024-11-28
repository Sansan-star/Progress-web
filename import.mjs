/*Import
JavaScript memungkinkan kita untuk menggunakan function/method dari modul lainnya dengan dua syarat: 

Harus meng-import function/method tersebut.
Function/method tersebut sudah di-export (export akan dibahas di materi selanjutnya).
Import dapat dilakukan dengan menulis kata kunci import kemudian diikuti oleh nama function/method/variable.*/
import myFunction from "./variable.mjs";

myFunction();

/*Ketika menggunakan named import, 
selain memastikan nama function sesuai,
 kita juga akan menuliskan nama function yang diimpor dalam kurung kurawal {}. 
 Selain itu, kita juga dapat mengimpor lebih dari satu function/method/variable. */
import { name, email, age } from "./variable.mjs";

console.log(name);
console.log(email);
console.log(age);

import * as variable from './variable.mjs';

console.log(variable.name);
console.log(variable.email);
console.log(variable.age);

/*Selain menggunakan tanda bintang (*), 
kita juga dapat menambahkan as variable (sebagai alias) 
untuk mengimpor seluruh variable yang berasal dari modul lainnya (pada contoh anotherfile.mjs).
import * memungkinkan kita untuk mengimpor seluruh module yang di export. 
Namun, kekurangannya adalah sulit untuk dibaca karena tidak eksplisit,
 sedangkan menggunakan import {} akan menjadi eksplisit sehingga kita bisa tahu apa saja
  function/method/variable yang ingin di-import.*/
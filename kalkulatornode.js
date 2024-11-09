const readline = require("readline");

// Konfigurasi readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
 });

//fungsi operasi matematika
function tambah(a,b) {
    return (a+b);
}

function kurang(a,b) {
    return (a-b);
}

function bagi(a,b) {
    return (a/b);
} 

function kali(a,b) {
    return (a*b);
} 

function persen(a,b) {
    return (a%b);
} 

function pangkat2(a,b) {
    return (a**b);
} 

//Fungsi untuk menjalankan kalkulator
function startkalkulator() {
    //Masukkan angka pertama
    rl.question("Masukkan angka pertama: ", (input1) => {
        let num1 = parseFloat(input1);

        //Masukkan angka kedua
        rl.question("Masukkan angka kedua: ", (input2) => {
            let num2 = parseFloat(input2);

            //Masukkan operasi
            rl.question("Masukkan operasi (tambah,kurang,bagi,kali,persen,pangkat2): ", (operaion) => {
                let result;
                
                //Menentukan operasi berdasarkan input
                if (operaion === "tambah") {
                    result = tambah(num1,num2);
                } else if (operaion === "kurang") {
                    result = kurang(num1,num2);
                } else if (operaion === "bagi") {
                    result = bagi(num1,num2);
                } else if (operaion === "kali") {
                    result = kali(num1,num2);
                } else if (operaion === "persen") {
                    result = persen(num1,num2);
                } else if (operaion === "pangkat2") {
                    result = pangkat2(num1,num2);
                } else {
                    result = "OPERASI TIDAK DIKENALI"
                }

                //Tampilkan hasil
                console.log("Hasil:", result);

                //Tuup readline
                rl.close();
        
            });
    
    
        });


    });
}

//Memulai program kalkulator
startkalkulator();
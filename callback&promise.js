//Callback: fungsi yang diberikan sebagai argumen untuk fungsi lain. Callback dieksekusi setelah operasi selesai
function fetchData(callback) {
    setTimeout(() => {
        console.log("Fetching data...");
        callback("Data has been fetched!");
    }, 3000);
}

fetchData((message) => {
    console.log(message);
});

//Promise digunakan untuk menangani proses asynchronous dengan cara yang lebih mudah dibandingkan callback.
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Ganti ke `false` untuk simulasi error
            if (success) {
                resolve("Data successfully fetched!");
            } else {
                reject("Failed to fetch data.");
            }
        }, 3000);
    });
}

fetchData()
    .then((message) => console.log(message)) // Berhasil
    .catch((error) => console.error(error)); // Gagal

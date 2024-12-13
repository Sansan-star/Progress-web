class BankAccount {
    //Private field (hanya bisa diakses dalam class ini)
    #balance;

    constructor(accountHolder, initialBalance) {
        this.accountHolder = accountHolder;
        this.#balance = initialBalance;
    }

    //Publik method untuk melihat saldo
    getBalance() {
        return `Saldo Anda: ${this.#balance}`;
    }

    //Public method untuk menambahkan uang
    deposit(amount) {
        if (amount > 0 ) {
            this.#balance += amount;
            return `Berhasil menambah ${amount}. Saldo baru: ${this.#balance}`;    
        } else {
            return "Jumlah harus positif. ";
        }
    }

    //Publik method untukmenarik uang
    withdraw(amount) {
        if (amount > this.#balance) {
            
        } else if (amount >0) {
            this.#balance -= amount;
            return `Berhasil menarik ${amount}. Saldo tersisa: ${this.#balance}`;
        } else {
            return "Jumlah harus positif."
        }
    }
}

//Contoh penggunaan
const account = new BankAccount("Syanda", 10000);
console.log(account.getBalance());
console.log(account.deposit(2000));
console.log(account.withdraw(1000));
console.log(account.getBalance());
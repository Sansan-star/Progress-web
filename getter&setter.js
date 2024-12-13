class Person {
    #name;

    constructor(name) {
        this.#name = name;
    }

    // Getter untuk membaca nama
    get name() {
        return this.#name;
    }

    // Setter untuk mengubah nama
    set name(newName) {
        if (newName.trim().length > 0) {
            this.#name = newName;
        } else {
            console.error("Nama tidak boleh kosong!");
        }
    }
}

// Contoh Penggunaan
const person = new Person("Rizki");
console.log(person.name);    // Rizki (Mengakses dengan getter)
person.name = "Bagas";       // Mengubah nama dengan setter
console.log(person.name);    // Bagas
person.name = "";            // Error: Nama tidak boleh kosong!

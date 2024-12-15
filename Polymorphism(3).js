/*Polymorphism dengan Function Overloading (Melalui Pola Alternatif)
JavaScript tidak mendukung function overloading secara langsung, 
tetapi dapat disimulasikan dengan parameter opsional atau pengecekan tipe data.*/

function calculateArea(shape) {
    if (shape.type === "circle") {
        return Math.PI * shape.radius ** 2;
    } else if (shape.type === "rectangle") {
        return shape.width * shape.height;
    } else {
        throw new Error("Unknown shape type");
    }
}

// Demonstration
const circle = { type: "circle", radius: 5 };
const rectangle = { type: "rectangle", width: 4, height: 7 };

console.log(`Circle Area: ${calculateArea(circle)}`);
console.log(`Rectangle Area: ${calculateArea(rectangle)}`);

/*Penjelasan:

Fungsi calculateArea menangani berbagai jenis objek.
Berdasarkan properti type dari objek, fungsi memutuskan bagaimana menghitung area.*/
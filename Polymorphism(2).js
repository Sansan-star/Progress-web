/*Polymorphism dengan Interface-like Behavior
JavaScript tidak memiliki dukungan langsung untuk interface,
 tetapi pola ini dapat dicapai menggunakan abstraction. */

 class Shape {
    getArea() {
        throw new Error("This method must be overridden!");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

// Demonstration
const shapes = [
    new Circle(5),
    new Rectangle(4, 7)
];

shapes.forEach(shape => {
    console.log(`Area: ${shape.getArea()}`);
});

/*Penjelasan:

Shape adalah kelas abstrak dengan metode getArea yang wajib dioverride oleh kelas turunan.
Circle dan Rectangle mengimplementasikan metode getArea dengan logika mereka sendiri.
Saat dipanggil melalui objek shapes, setiap metode getArea memberikan hasil sesuai dengan implementasinya. */
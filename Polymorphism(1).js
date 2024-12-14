/*1. Polymorphism dengan Method Overriding
Ketika sebuah kelas mewarisi properti dan metode dari kelas lain, 
metode pada kelas turunan dapat menimpa metode pada kelas induk.
*/

//Parent class
class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}

//Child class
class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}

//Another child class
class Cat extends Animal {
    speak (){
        console.log("Cat meows");
    }
}

//Demonstration
const animals = [new Animal(), new Dog(), new Cat()];

animals.forEach(animal => animal.speak());

/*Penjelasan:

1.Animal adalah kelas induk dengan metode speak.
2.Dog dan Cat adalah kelas turunan yang mengoverride metode speak.
3.Polymorphism terjadi ketika semua objek (baik Dog, Cat, maupun Animal) diperlakukan sama (memanggil speak), tetapi memberikan hasil yang berbeda.

*/
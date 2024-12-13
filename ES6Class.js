class Cat {
    constructor(name, color, activity){
        this.name = name;
        this.color = color;
        this.activity = activity;
    }

    today(){
        console.log(`Today, an ${this.color} cat named ${this.name} is ${this.activity}. `)
    }
}

//Membuat inhetance dari CAT
const Cat1 =new Cat('Garfield', 'Orange', 'Sleep');
const Cat2 =new Cat('Tom', 'Blue', 'Eat');

console.log(Cat1.name);
console.log(Cat2.name);

Cat1.today();
Cat2.today();
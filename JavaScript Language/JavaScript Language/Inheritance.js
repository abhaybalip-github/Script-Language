    // javascript - Inheritance
    function println(params){
        console.log(params );
    }
    println("Hello World");

    // inheritance is a feature by which one cllass acquire properties of another class
    // extends keyword is used for inheriting properties
    // example
    class Vehicle{
        constructor(){
            this.Company = "Honda";
        }
    }
    class Car extends Vehicle{
        constructor(Price,Color){
            super(); // super keyword is used to call parent constructor
            this.Price = 10;
            this.Color = "red";
        }
        DisplayData(){
            println("Company : "+this.Company);
            println("Price : "+this.Price);
            println("Color : "+this.Color);
        }
    }
    c1 = new Car(10,"red");
    c1.DisplayData();

    // example 2
    class Person{
        constructor(Height,Weight,Age){
            this.Height = Height;
            this.Weight = Weight;
            this.Age = Age;
        }
    }
    class Student extends Person{
        constructor(Height,Weight,Age){
            super(Height,Weight,Age);
        }
        DisplayData(){
            println("Age = "+this.Age);
            println("Height = "+this.Height);
            println("Weight = "+this.Weight);
        }
    }

    s1 = new Student(180,50,18);
    s1.DisplayData();
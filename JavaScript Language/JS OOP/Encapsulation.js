    // javascript - Encapsulation
    function println(params){
        console.log(params );
    }
    println("Hello World");
    println("<hr>")
    // in java script member are declared private by adding # as prefix
    // example
    class Student{
        #marks;     // private data variable
        constructor(marks){
            this.#marks = marks;
        }
        display(){
            println(this.#marks)
        }
    }
    s1 = new Student(100);
    // println(s1.#marks);
    s1.display();

    // example 2
    class Compnay{
        Name;
        #Value; // private data vaiable
        constructor(Name,Value){
            this.Name = Name;
            this.Value = Value;
        }
        display(){
            println("Company Name: "+this.Name+" Value : "+this.Value);
        }
    }
    c1 = new Compnay("Reliance",100);
    c1.display();
    // println(c1.#Value);

    // Data setter and getter methodes
    class Person{
        Height;
        Weight;
        Age;
        setHeight(Height){
            this.Height = Height;
        }
        getHeight(){
            return this.Height;
        }
    }

    p1 = new Person();
    p1.setHeight(180);
    println("p1 Height = "+p1.getHeight());
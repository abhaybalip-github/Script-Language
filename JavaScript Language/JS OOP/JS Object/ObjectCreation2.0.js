    // javascript - Object
    // function to write given data on page
    function println(params) {
        console.log(params );
    }

    // another technique to creat object
    // using object methode
    obj = new Object;

    // Adding data to created object
    obj.CarName = "Tesla";
    obj.CarPrice = 100;
    obj.CarColor = "Red";

    // Adding methode to object
    obj.Display = function(){
        println("Car Info : ");
        println(this.CarName);
        println(this.CarPrice);
        println(this.CarColor);
    }
    obj.Display();

    // copy object to another
    var obj2 = obj;
    obj.CarColor = "Black";
    obj.CarPrice = 150;
    obj2.Display();

    // Object can also created by using constructor
    // constructor is defined by regular function
    // example :
    function Teacher(name,school,subject){
        this.name = name;
        this.subject = subject;
        this.school = school;
        
        // methode declaration
        this.Display = Display;
        function Display(){
            println("Name : "+this.name);
            println(this.school+" "+this.subject);
        }
    }

    // // creating object using function/constructor
    var t1 = new Teacher("teacher","PuneUniversity","Computer");
    t1.Display();
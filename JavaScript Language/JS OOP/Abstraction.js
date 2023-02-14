    // javascript - Abstraction
    // function to print given data
    function println(params){
        console.log(params);
    }
    
    // abstraction is methode of providing required features only
    // and hiding internal details
    // example
    class Vehicle{
        Company;
        Color;
        Price;
        displayData(){
            println("Compnay : "+this.Company);
            println("Price: "+this.Price);
        }
    }
    class MyCar extends Vehicle{
        constructor(Company,Price){
            super();
            this.Company = Company;
            this.Price = Price;
        }
    }

    c1 = new MyCar("Tata","25L");
    c1.displayData();

    // exampl 2
    class Student{
        Name;
        RollNo;
    }
    class MySlef extends Student{
        constructor(Name,RollNo){
            super();
            this.Name = Name;
            this.RollNo = RollNo;
        }
        displayData(){
            println("Details : "+this.RollNo+" "+this.Name);
        }
    }
    m1 = new MySlef("MyName",03);
    m1.displayData();
    println('Thank You');
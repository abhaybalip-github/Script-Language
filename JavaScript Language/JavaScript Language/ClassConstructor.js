    // javascript - Class Constructor
    // function to write given data on page
    function println(params) {
        console.log(params )
    }
    // in every class there is a constructor
    // constructor is used to assign memory we can use for assigning data
    // class definition
    class Compnay{
        Name;
        Value;
        Ceo;
        // in js constructor in given as
        constructor(Name,Value,Ceo){
            this.Name = Name
            this.Ceo = Ceo;
            this.Value = Value;
        }
        DisplayData(){
            println(this.Name+" Value : "+this.Value);
            println("CEO : "+this.Ceo)
        }
    }

    // class example
    // passing arguments to constructor
    var c1 = new Compnay("MicroSoft",100,"SatyaNadela");
    c1.DisplayData();

    println("<hr>");
    // Example 2
    class Employee{
        constructor(Name,Branch,Salary){
            this.Name = Name;
            this.Branch = Branch;
            this.Salary = Salary;
        }
        DisplayData(){
            println("Name : "+this.Name+" Branch : "+this.Branch);
            println("Salary : "+this.Salary);
        }
    }

    var e1 = new Employee("Me","Delhi",10);
    e1.DisplayData();
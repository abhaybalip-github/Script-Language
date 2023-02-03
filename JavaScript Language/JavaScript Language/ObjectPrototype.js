    // javascript - Object Prototype
    function println(params){
        console.log(params );
    }
    println("Hello World");

    // prototype is inbult methode
    // it is used for creating data variable and methode for a object
    // out of object body
    // example :
    function Employee(Name,Company){
        this.Name = Name;
        this.Company = Company;
        this.Display = Display;
        function Display(){
            println("Name : "+this.Name+" - "+this.Company);
        }
    }

    // object example
    e1 = new Employee("person","company");
    e1.Display();

    // adding data variable using prototype methode
    Employee.prototype.Salary  = undefined;
    e1.Salary = 10;
    println(e1.Salary);

    // add methode to object
    Employee.prototype.getSalary = function(){
        println(this.Salary);
    }

    e1.getSalary();

    // copy object to new object
    e2 = e1;
    e2.Display();
    e2.getSalary();
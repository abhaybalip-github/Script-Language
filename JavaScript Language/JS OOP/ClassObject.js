    // javascript - Class & Object
    // Function to write given data on document
    function println(params) {
        console.log(params )
    }
    // class is collection of objects like data and methode
    // function defined inside class is called methode
    // example :
    class Student{
        RollNo;
        Name;
        DisplayData(){
            println("RollNo : "+this.RollNo+" "+this.Name);
        }
    }

    // crating instance of class
    // new keyword assignes memory to class instance
    var s1 = new Student;
    s1.Name = "MySlef";
    s1.RollNo = 000;
    s1.DisplayData();

    // another class example
    class University{
        Name;
        Courses;
        Location;
        SetData(Name,Courses,Location){
            this.Name = Name;
            this.Courses = Courses;
            this.Location = Location;
        }
        DisplayData(){
            println("University Name : "+this.Name+" "+this.Location+
            "<br>"+this.Courses)
        }
    }

    // class instance
    u1 = new University;
    u1.SetData("MumbiaUniversity",21,"Mumbai");
    u1.DisplayData();

    // copy instance to new
    u2 = new University;
    u2 = u1;
    u1.DisplayData();
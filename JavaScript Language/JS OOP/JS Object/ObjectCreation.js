    // javascript - Object
    // function to write given data on page
    function println(params) {
        console.log(params );
    }
    
    // in java script object can be declared by another techniques
    // exmaple
    obj = {
        Number:100,
        Character:'A',
        BoolValue: true,
        string:"StringData"
    }
    // accessing methode is same - dot operator or square bracket
    println(obj.Number); // obj[Number];
    println(obj.Character);
    if(obj.BoolValue){
        println("Boolean value is true");
    }
    else{
        println("Boolean value is false");
    }

    // Adding new Data
    obj.pie = 22/7;
    println(obj.pie);

    // Adding methode to object
    obj.sum = function(a,b){
        println(a+b);
    }
    obj.sum(2,3);


    // example 2
    person = {
        Name: undefined,
        SurName: undefined,
        age:undefined,
        SetData(Name,SurName,age){
            this.Name = Name;
            this.SurName  = SurName;
            this.age = age;
        },
        GetData(){
            println(this.Name+" "+this.SurName+"<br>Age : "+this.age);
        },
    };
    
    // another object from same format
    var p1 = person;
    p1.SetData("abhay","balip",18);
    p1.GetData();
    // javascript - Object
    // function to write given data
    function println(params) {
        console.log(params);
    }

    // java script has some in built Class
    // Number
    var integer = new Number(10);
    println(integer);

    // String
    var str = new String("Hello World");
    println(str);

    // Boolean
    var bool = new Boolean(true);
    println(bool);

    // Math class methodes
    var n = Math.random();
    println(n);

    // Date class methode
    var t = Date.getDay;
    println(t);

    // Array
    var ar = new Array();
    ar[0] = "name";
    ar[1] = "surname";
    ar[2] = "age";
    for(var i=0;i<3;i++){
        println(ar[i]);
    }

    // Object to creat Object
    var obj = new Object;

    // data accessing methode is same - dot operator

    obj.Name= "MyName";
    obj.SurName = "MySurName";
    obj.Age = "MyAge";
    
    println(obj.Name+" "+obj.SurName);
    println(obj.Age);

    obj.display = function(){
        println("methode of object obj");
    }
    obj.display();
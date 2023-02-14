    // java script - sets
    // funtion to print given data
    function println(params) {
        console.log(params);
    }
    println("Hello World");

    // set is collection of data that can be
    // homogenous or non homogenous
    // Definition of set
    var s1 = new Set;

    println(typeof(s1));
    
    // add methode
    s1.add(100);
    s1.add('A');
    s1.add("Hello");
    s1.add(10);

    println(s1);

    // delete methode
    s1.delete(10);
    println(s1);

    // check if element is present
    var b1 = s1.has('A');
    println("* check if element is present 'A' : "+b1);
    
    // No of data in set
    var count = s1.size;
    println("* No of data : "+count);

    // set example 2
    s2 = [
        "Name","SurName","Age","Gen"
    ]
    println("* s2 set : ");
    s2.forEach(
        function(value){
            println(value);
        }
    )

    let text = "";
    for(x of s2.values()){
        text += x;
    }
    println("* test data : ");
    println(text);
    println(typeof(text));
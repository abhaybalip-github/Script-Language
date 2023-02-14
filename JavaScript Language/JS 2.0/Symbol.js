    // javascript - Symbol
    // function for printing data
    function println(params){
        console.log(params);
    }
    println("hello World");
    var s1 = Symbol('Welcome');
    println('Symbol s1(Welcome) = ');
    println(s1);

    var s2 = Symbol('Welcome')
    println('Symbol s1(Welcome) = ');
    println(s2);
    
    if(s1==s2) println("s1 = s2");
    else println("s1 != s2");

    // symbol as object key
    var id = Symbol('id');
    let Person = {
        Name : 'Me',
        [id] : 120
    }
    println(Person);

    // symbols are not included in loop
    for(let item in Person){
        println(item);
    }
    // javascript - Static Methode
    function println(params){
        console.log(params );
    }
    println("Hello World");
    
    // static methode is created by static keyword
    // static methode can be called wothout instamce of class
    // example 
    class Sample{
        static display(){
            println("static methode invoked");
        }
    }
    // methode calling
    Sample.display();

    // example with instance - gives error
    s = new Sample();
    s.display();
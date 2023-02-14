    // javascript - Polymorphism
    function println(params){
        console.log(params);
    }
    println("Hello World");

    // function with same name and different parametre
    function sum(a,b){
        return a+b;
    }
    function sum(a,b,c){
        return a+b+c;
    }
    println(sum(2,3));
    println(sum(1,1,1));
    // here function get over write and second one is executed
    // inheritance example
    class A{
        display(){
            println("display function of class A");
        }
    }
    class B extends A{

    }

    b1 = new B();
    b1.display();

    class C{
        display(){
            println("display function of class C");
        }
    }
    
    c1 = new C();
    c1.display();

    // using prototype methode
    class X{
        
    }
    class Y extends X{
        
    }
    X.prototype.display = function(){
        println("display function of class X");
        println("This methode is added using prototype methode");
    }

    y1 = new Y();
    y1.display();
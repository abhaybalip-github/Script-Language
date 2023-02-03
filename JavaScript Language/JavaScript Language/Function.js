    // javascript - function 
    function println(msg){
        console.log(msg);
    }
    // calling function
    println("Hello World - using println function");

    // function to print factorila using recursion
    function factorial(num){
        if(num==0) return 1;
        else{
            return num*factorial(num-1);
        }
    }
    println("factorial of 5 = "+factorial(5));

    function display(msg='No Message'){
        console.log(msg);
    }

    display();
    display('Hi User');
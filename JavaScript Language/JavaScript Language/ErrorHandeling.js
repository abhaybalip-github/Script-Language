    // javascript - Error Handeling
    function println(params){
        console.log(params);
    }
    println('Hello World');
    function div(a,b){
        return a/b;
    }
    try{
        // undeclared varibles
        a = b;
        println(a/b);
    }
    catch(error){
        println('Errore Occured !');
    }

    // example 2
    try{
        println('Try block which generate error ');
        println(div(a))
    }catch(error){
        println('This is catch block !\nexecutes when error occures')
    }finally{
        println('This is finally block !\nExecutes at any case')
    }
    
    function factorial(num){
        if(num<0) throw('Number less than 0 !');
        else{
            var result = 0
            while(num>0){
                result *= num;
                num--;
            }
            return result;
        }
    }

    // example 3
    try{
        var n1 = factorial(-1);
    }catch(error){
        println('error occured !'+error);
    }
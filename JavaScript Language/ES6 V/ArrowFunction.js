    // java script - Arrow Function
    let println = (params)=>{
        console.log(params);
    }
    println('hi');
    age = 18;

    let ageverify = (age<18) ? 
    ()=> println('Hello Children')
    :()=> println('Hi Adults');

    ageverify();

function  getLength(value) {
    if (typeof value === 'string') {
        console.log(value.length); 
    } else if (typeof value === 'number'){
        console.log(0);
    } else if (typeof value === 'boolean') {
        console.log(0);
    }  else if (Array.isArray(value)) {
        console.log(value.length); 
    } else if (typeof value === 'object' && value !== null) {
        console.log(Object.keys(value).length); 
    } else {
        console.log(0);
    }
}

getLength("Hello, world!");  
getLength(123);                
getLength(false);              
getLength([1, 2, 3, 4, 5]);      
getLength({ a: 1, b: 2 });    
getLength(null);               
getLength(undefined);         
getLength(Symbol('sym'));      

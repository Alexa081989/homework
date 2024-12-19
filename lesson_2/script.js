function getLength(value) {
    if (arguments.length === 0) {
        console.log(0);
        return; 
    }

    if (typeof value === 'string') {
        console.log(value.length); 
    } else if (typeof value === 'number' || typeof value === 'boolean'){
        console.log(0);
    }  else if (Array.isArray(value)) {
        console.log(value.length); 
    } else if (value instanceof Map){
            console.log(value.size);
        }  else if (value instanceof Set) {
            console.log(value.size);
        } else if (typeof value === 'function') {
            console.log(value.length); 
        }  else if (typeof value === 'object' && value !== null) {
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
getLength(new Map([[1, 'one'], [2, 'two']])); 
getLength(new Set([1, 2, 3]));
getLength(function(a, b) {}); 
getLength();



// //второе задание
function compare(node1, node2) {
    const stack = [];
    stack.push([node1, node2]);
    while (stack.length > 0) {
        const [current1, current2] = stack.pop();

    if (current1 === null && current2 === null) {
        continue;
    }
    if (current1 === null || current2 === null) {
        return false;
    }
    if (current1.value !== current2.value) {
        return false;
    }
    stack.push([current1.left, current2.left]);
    stack.push([current1.right, current2.right]);
}
return true;
}
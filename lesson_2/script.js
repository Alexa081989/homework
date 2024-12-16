
function  getLength(value) {
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
            console.log(0); 
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
getLength(function() {}); 




// //второе задание
// function compare(node1, node2) {
//     if (node1 === undefined && node2 === undefined) {
//         return true;
//     }
//     if (node1 === undefined || node2 === undefined) {
//         return false;
//     }
//     if (node1.value !== node2.value) {
//         return false;
//     }
//     return compare(node1.left, node2.left) && compare(node1.right, node2.right);
// }
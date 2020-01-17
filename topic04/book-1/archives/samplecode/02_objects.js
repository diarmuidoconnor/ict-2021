let me = { 
	name : "Diarmuid O'Connor",  // // enclose string in " " when it contains a '.   
	address : '1 Main Street',
	age : 21,                
	bankBalance : 20.2,   //millions
	male : true    // no comma for the last property
} ;

console.log (me.name + ' lives at ' + me['address']) ;
// Can also use a variable in subscript notation
let key = 'bankBalance' ;
let balance = me[key] ;
// me.key won't work
console.log('Balance = ' + balance) ;
// Changing a property value
me.address = '2 Main Street' ;
console.log (me.name + ' now lives at ' + me['address']) ;
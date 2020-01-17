let myName = {
    first : 'Diarmuid',
    last : "O'Connor"
} ;

let me = {
    name : myName,   
    address : '1 Main Street',
    age : 21,                
    finance : {
	    amount : 20.2,
	    type : 'D',
	    bank : 'Allied Irish Bank'
	},
	male : true    
} ;

console.log (me.name.first + ' banks with ' + me.finance['bank'] +
      ' to the value of ' + me.finance.amount ) ; 
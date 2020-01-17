let me = {
   name : {
       first : 'Diarmuid',
       last : "O'Connor"
   },
   address : '1 Main Street',
   age : 21,
   finance : {
       amount : 20.2,
       type : 'D',
       bank : 'Allied Irish Babk'
   },
   male : true    
} ;

console.log (me.name.first + ' banks with ' + 
	           me['finance']['bank']) ; 
let message = 'abc';    //Here the Data Type is String
let endsWithC = message.endsWith('c');  //endsWith method for String Datatypes

/*--------Data Type not Defined---------*/

let msg;                //Here the DefaultData Type is ANY
msg = 'abc';
// let endwithCC = msg.endsWith('c');  //endsWith not work for ANY Data Type

//Method 1 :
let method1 = (<string>message).endsWith('c')

//Method 2 :
let method2 = (message as string).endsWith('c')
const dns = require('dns');
dns.resolve4('www.mum.edu', function (err, addr) {
	if(err)
		console.log('Error Message: ', err.message);
	else
		console.log(addr);

 });


/*const {promisify} = require('util')
const dns = require('dns')
const res = promisify(dns.resolve4);
res('www.mum.edu').then((add)=>{console.log(add)}).catch(err=>console.log(err));
*/

/*const { promisify } = require('util');
const dns = require('dns');
const res = promisify(dns.resolve4);

async function main() {
    try{
       const data= await res('www.mum.edu');
        console.log(data);
    }
    catch(err){
        console.log('Error Message: ', err);
    }
}
main();
*/
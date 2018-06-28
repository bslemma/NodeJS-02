const dns = require('dns')
dns.resolve4('www.mum.edu', function (err, addr) {
	if(err)
		console.log('Error Message: ', err.message);
	else
		console.log(addr);

 });


// const {promisfy} = require('util')
// const dns = require('dns')
// const res = promisfy(dns.resolve4);
// res('www.mum.edu').then((add)=>{cosole.log(add)}).catch(err=>console.log(err));
 

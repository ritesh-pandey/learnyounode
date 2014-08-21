//console.log(process.argv);
//console.log(typeof process.argv);
var argvLen = process.argv.length,
i, sum = 0;
for(i=2; i<argvLen; i++){
	sum += +(process.argv[i]);
	//console.log(+(process.argv[i]));
}
console.log(sum);

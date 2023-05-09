setTimeout(() => {
	console.log('Wassup!!');
}, 3000);

// Global Object
global.setTimeout(() => {
	console.log('Wassup!!');
}, 3000);

console.log(global);


console.log(__dirname);
console.log(__filename);
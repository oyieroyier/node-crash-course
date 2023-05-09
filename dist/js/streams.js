const fs = require('fs');

const readStream = fs.createReadStream('blog/blog3.txt', { encoding: 'utf-8' });
const writeStream = fs.createWriteStream('blog/blog4.txt');

readStream.on('data', (chunk) => {
	console.log('----------NEW CHUNK----------');
	console.log(chunk.toString());

	writeStream.write('\n----------NEW CHUNK----------\n');
	writeStream.write(chunk);
});

// piping
readStream.pipe(writeStream)
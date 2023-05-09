const { log } = require('console');
const fs = require('fs');

// reading files
fs.readFile('./blog/blog.txt', (err, data) => {
	if (err) {
		console.log(data);
	}
	console.log(data.toString());
});

console.log('Hello, ninjas!');

setTimeout(() => {
	console.log('This is a timeout');
}, 1000);

// writing files
fs.writeFile('./blog/blog.txt', 'Hello, world! I see you.', () => {
	console.log('File was written');
});

fs.writeFile('./blog/blog2.txt', 'Hello, world! I see you.', () => {
	console.log('File was written');
});

// directories
if (!fs.existsSync('./blog/testBlogs')) {
	fs.mkdir('./blog/testBlogs', (err) => {
		console.log(err);
	});
} else {
	fs.rmdir('./blog/testBlogs', (err) => {
		if (err) {
			console.log(err);
		}
		console.log('Folder deleted.');
	});
}

// deleting files
if (fs.existsSync('blog/deleteme.txt')) {
	fs.unlink('blog/deleteme.txt', (err) => {
		console.log(err);
	});
	console.log('File deleted.');
}
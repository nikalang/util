var fs = require('fs');

var algoritm_file = process.argv[2];

var lines = fs.readFileSync(algoritm_file).toString().split("\n");

var regex = /^\s+[-]\s+s[/](.*)[/](.*)[/]$/

var regexes = [];

for (line in lines) {
  var match = regex.exec(lines[line]);
  if (match) {
  	regexes.push(match[1] + ' ' + match[2]);
  }
}

var word = process.argv[3];

var log_all = false;

if (process.argv[2] === '-a') {
  log_all = true;
  word = process.argv[4]
}

for (var i = 0; i < regexes.length; i++) {
	var q = regexes[i].split(' ');
  	
	new_word = word.replace(new RegExp(q[0], 'gu'), q[1]);

	if (log_all && (new_word !== word)) {
		console.log(`s/${q[0]}/${q[1]}/ ${word} => ${new_word}`)
	}

 	word = new_word;
}

console.log(word);


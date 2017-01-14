var json;

function handleFileSelect(evt) {
	var files = evt.target.files;
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);

var client = document.getElementById('display');

let stringToSend = '';

function sortAndSend(stuff) {

	stuff.forEach(function(thing) {
		if (typeof thing.content.content === 'string') {
			stringToSend += `<${thing.tag}> <${thing.content.tag}> ${thing.content.content} </${thing.content.tag}> </${thing.tag}>`;
		} else if (Array.isArray(thing.content)) {
			sortAndSend(thing.content);
		} else if (Array.isArray(thing.content.content)) {
			sortAndSend(thing.content.content);
		} else if (typeof thing === 'object') {
			stringToSend += `<${thing.tag}> ${thing.content} </${thing.tag}> `;
		} else {
			return stringToSend;
		}
	})
	document.getElementById('display').innerHTML = stringToSend;
};
client.insertAdjacentHTML('afterbegin', stringToSend)

function handleFileSelect(evt) {
	var files = evt.target.files;
	var output = [];
	for (var i = 0, f; f = files[i]; i++) {
		var reader = new FileReader();
		reader.onload = (function(theFile) {
			return function(e) {
				json = JSON.parse(e.target.result);
				var data = JSON.stringify(json);
				sortAndSend(json);
			}
		})(f);
		reader.readAsText(f);
	}
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);

var json;

function handleFileSelect(evt) {
	var files = evt.target.files; // FileList object

	// files is a FileList of File objects. List some properties.

}

document.getElementById('files').addEventListener('change', handleFileSelect, false);

function handleFileSelect(evt) {
	var files = evt.target.files; // FileList object

	// files is a FileList of File objects. List some properties.
	var output = [];
	for (var i = 0, f; f = files[i]; i++) {
		var reader = new FileReader();

		// Closure to capture the file information.
		reader.onload = (function (theFile) {
			return function (e) {
				console.log('e readAsText = ', e);
				console.log('e readAsText target = ', e.target);
        console.log(e.target.result);

        var client = document.getElementById('display');
        console.log(client);

        json = JSON.parse(e.target.result);

        console.log(json);

        var data = JSON.stringify(json);
        // client.appendChild(data);
        client.insertAdjacentHTML('afterbegin', data);
        console.log(data);

        console.log(json[0].content);
        let hello = json[0].content;
        let tagged = (`<${hello.tag}> ${hello.content} </${hello.tag}>`);

        client.insertAdjacentHTML('afterbegin', tagged);

			}
		})(f);
		reader.readAsText(f);
	}

}

document.getElementById('files').addEventListener('change', handleFileSelect, false);

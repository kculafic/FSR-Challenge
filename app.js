var json;

function handleFileSelect(evt) {
	var files = evt.target.files; // FileList object

	// files is a FileList of File objects. List some properties.

}

document.getElementById('files').addEventListener('change', handleFileSelect, false);

function sortAndSend(stuff) {
  // client.appendChild(data);
  var client = document.getElementById('display');
  console.log(client);
  client.insertAdjacentHTML('afterbegin', stuff);
  console.log(stuff);

  console.log(json[0].content);
  let hello = json[0].content;
  let tagged = (`<${hello.tag}> ${hello.content} </${hello.tag}>`);

  client.insertAdjacentHTML('afterbegin', tagged);
};

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

        json = JSON.parse(e.target.result);

        console.log(json);

        var data = JSON.stringify(json);

        sortAndSend(data);
			}
		})(f);
		reader.readAsText(f);
	}

}

document.getElementById('files').addEventListener('change', handleFileSelect, false);

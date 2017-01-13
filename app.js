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

        var micCheck = document.getElementById('display');
        console.log(micCheck);

        json = JSON.parse(e.target.result);

        console.log(json);

        var data = JSON.stringify(json);
        // micCheck.appendChild(data);
        micCheck.insertAdjacentHTML('afterbegin', data);
        console.log(data);

        function js_traverse(o) {
          var type = typeof o
          if (type == "object") {
            for (var key in o) {
              if (key === 'tag') {
                console.log(Object.values(key));
              }
              console.log("key: ", key)
              js_traverse(o[key])
            }
          } else {
            console.log(o)
          }
        }

        js_traverse(data);


			}
		})(f);
		reader.readAsText(f);
	}

}

document.getElementById('files').addEventListener('change', handleFileSelect, false);

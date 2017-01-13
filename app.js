var json;

function handleFileSelect(evt) {
	var files = evt.target.files; // FileList object

	// files is a FileList of File objects. List some properties.

}

document.getElementById('files').addEventListener('change', handleFileSelect, false);

var client = document.getElementById('display');

let stringToSend = '';
function sortAndSend(stuff) {
  // client.appendChild(data);
  console.log(client);
  console.log(stuff);
  // console.log(json[0].content);
  // let hello = json[0].content;
  // let tagged = (`<${hello.tag}> ${hello.content} </${hello.tag}>`);

  stuff.forEach(function(thing) {
    if (typeof thing.content.content === 'string') {
      stringToSend += `<${thing.tag}> <${thing.content.tag}> ${thing.content.content} </${thing.content.tag}> </${thing.tag}>`;
      console.log(stringToSend);
    } else if (Array.isArray(thing.content.content) === 'true') {

    }
  })
  document.getElementById('display').innerHTML = stringToSend; 




    // if (typeof thing.tag === 'string') {
    //   stringToSend += `<${thing.tag}> ${sortAndSend([thing.content])} </${thing.tag}>`;
    // }
    // else if (typeof thing.content === 'object') {
    //   stringToSend += `<${thing.content.tag}> ${sortAndSend([thing.content.content])} </${thing.content.tag}>`;
    // } else if (typeof thing === 'string') {
    //   stringToSend += `${sortAndSend(thing)}`;
    // } else {
    //   console.log(stringToSend);
    //   return stringToSend;
    // }
  // })
};
client.insertAdjacentHTML('afterbegin', stringToSend)


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

        sortAndSend(json);
        // client.insertAdjacentHTML('afterbegin', sortAndSend(json));
			}
		})(f);
		reader.readAsText(f);
	}

}

document.getElementById('files').addEventListener('change', handleFileSelect, false);

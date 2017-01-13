// function handleFileSelect(evt) {
//     var files = evt.target.files; // FileList object
//     console.log(files);
//     // files is a FileList of File objects. List some properties.
//     var output = [];
//     for (var i = 0, f; f = files[i]; i++) {
//       output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
//                   f.size, ' bytes, last modified: ',
//                   f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
//                   '</li>');
//     }
//     document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
//   }
//
//   document.getElementById('files').addEventListener('change', handleFileSelect, false);

  function handleFileSelect(evt) {
   var files = evt.target.files; // FileList object
   console.log(files);
   var thing = FileReader.readAsText(files);
   thing.onload;
 }


   // Loop through the FileList and render image files as thumbnails.
  //  for (var i = 0, f; f = files[i]; i++) {

     // Only process image files.
 //     if (!f.type.match('application/json')) {
 //       continue;
 //     }
 //
 //     var reader = new FileReader();
 //
 //     // Closure to capture the file information.
 //     reader.onload = (function(theFile) {
 //       return function(e) {
 //         // Render thumbnail.
 //        //  var span = document.createElement('span');
 //        //  span.innerHTML = ['<img class="thumb" src="', e.target.result,
 //        //                    '" title="', escape(theFile.name), '"/>'].join('');
 //        //  document.getElementById('list').insertBefore(span, null);
 //        console.log(e);
 //       };
 //     })(f);
 //
 //     // Read in the image file as a data URL.
 //     reader.readAsArrayBuffer(f);
 //   }
 // }
 //
 // document.getElementById('files').addEventListener('change', handleFileSelect, false);

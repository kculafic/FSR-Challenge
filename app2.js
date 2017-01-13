'use strict';

window.loadFile=function() {
  'use strict';
  return function(b) {
    return function(c) {
      var d=c.target.files[0];
      if('application/json'!==d.type)
      return!1;
      var f=new FileReader;
      f.onload=function(g){
        return function(h){
          var i=JSON.parse(h.target.result);
          b(i)
        }
      }
      (d),f.readAsText(d)
    }
  }
}
(),window.renderFile=function(){
  'use strict';
  function a(b){
    if(Array.isArray(b))
    return b.map(a).join('');
    var c=b.tag,d=b.content;
    return'string'==typeof d||'number'==typeof d?'<'+c+'>'+d+'</'+c+'>':'<'+c+'>'+a(d)+'</'+c+'>'
  }
    return function(c){var d=a(c);
      $('#render').empty().append(d)
    }
  }
  (),window.File&&window.FileReader&&window.FileList&&window.Blob?(console.log('%c Ready to load files! ','background: #222222; color: white;'),$('#file-upload').on('change',window.loadFile(window.renderFile))):alert('The File APIs are not fully supported in this browser.');

//javascript
function rotar_imagen(){
  var tiempo = 3000;//tiempo en milisegundos
  var arrImagenes = ['img/20170322_181341.jpg','img/cocker.jpg', 'img/husky.jpg'];

  _img = document.getElementById('rotativo');

  //cargar la 1er imagen
  _img.src = arrImagenes[0];
  var i=1;
  setInterval(function(){
    _img.src = arrImagenes[i];
    i = (i == arrImagenes.length-1)? 0 : (i+1);
  }, tiempo);
}

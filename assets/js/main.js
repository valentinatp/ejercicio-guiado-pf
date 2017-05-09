var l1 = [1,2,3];
var l2 = [2,3,4];

function intersection(l1, l2){
	var l3 = [];
	for(var i = 0; i<l1.length; i++){
		for(var j = 0; j<l2.length; j++){
			if(l1[i] == l2[j]){
				l3.push(l1[i]);
			}
		}
	}
	return l3;
}


function intesectionSet2(l1, l2){
	return l1.filter(function(n){
		return l2.indexOf(n) !== -1
	});
};


var producto = [
 {
	nombre: 'pijama',
	tipo: 'ropa'
},
 {
	nombre: 'nevera',
	tipo: 'electrodoméstico'
},
 {
 	nombre: 'asus',
 	tipo: 'computador'
 },
  {
  	nombre: 'macbook',
  	tipo: 'computador'
 },
  {
  	nombre: 'pijama',
  	tipo: 'ropa'
 },
  {
  	nombre: 'toshiba',
  	tipo: 'computador'
  }
];

var computadores = [];
for(var i = 0; i < productos.length; i++){
	if(productos[i].tipo === 'computador'){
		computadores.push(productos[i]);
	}
}

var computadores = productos.filter(function(producto){
	return producto.tipo === 'computador';
});
/*
Se debe pedir al usuario, mientras quiera:
	- Nombre de artículo
	- Categoría
	- Precio.
Al finalizar, se debe informar:
	- Nombre de artículo con mayor precio
	- Nombre de artículo con mayor precio, de la categoría lácteos.
	- Cantidad de artículos ingresados de categoría bebidas
Considerar que las categorías pueden ser: almacen, lácteos, limpieza o bebidas y que el precio no puede ser menor a 0 ni mayor a 1000.
*/

function mostrar()
{
	var seguir = true;
	let nombreProducto = "";
	let categoria = "";
	let precio = 0;
	let cantBebidas = 0;
	let nombreProductoMax = "ninguno";
	let nombreProductoLacteo = "ninguno";
	let precioMax = 0;
	let precioLacteo = 0;

	do {
		nombreProducto = prompt("Ingresar nombre del producto");
		do {
			categoria = prompt("Ingresar categoría:").toLocaleLowerCase();
			if (!(categoria == "almacen" || categoria == "lácteos" || categoria == "limpieza" || categoria == "bebidas")) {
				alert("Categoría no disponible. Vuelva a ingresar la categoría. (Categorías validas: almacen, lácteos, limpieza o bebidas)");
			}
		} while (!(categoria == "almacen" || categoria == "lácteos" || categoria == "limpieza" || categoria == "bebidas"));
		
		do {
			precio = parseFloat(prompt("Ingresar precio"));
			if (precio === 0 || precio > 1000) {
				alert("El precio no puede ser 0 ni mayor a 1000. Vuelva a ingresar.");
			}
		} while (precio === 0 || precio > 1000);
		
		if (precio > precioMax) {
			precioMax = precio;
			nombreProductoMax = nombreProducto;
		}

		if (precio > precioLacteo && categoria == "lácteos") {
			precioLacteo = precio;
			nombreProductoLacteo = nombreProducto;
		}

		if (categoria == "bebidas") {
			cantBebidas++;
		}
		seguir = confirm("Desea seguir ingresando?");
	} while (seguir);
	
	document.writeln("El artículo con mayor precio es "+ nombreProductoMax +"<br>");
	document.writeln("El lácteo con mayor precio es "+ nombreProductoLacteo +"<br>");
	document.writeln("La cantidad de bebidas ingresadas son: "+ cantBebidas);
}
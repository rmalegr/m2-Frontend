/** @format */

var URL = 'http://localhost:5000/amigos';

let misAmigos = () => {
	$('#lista').empty();
	$.get(`${URL}`, (amigoss) => {
		amigoss.forEach((element) => {
			console.log(amigoss);
			$('#lista').append(`<li id="${element.id}">${element.name} X </li>`);
		});
	});
};
$('#boton').click(misAmigos);

/** Buscar amigo */
$('#search').click(() => {
	let id = $('#input').val();

	if (id) {
		//get (hhtp://localhost:5000/amigos/id)
		$.get(`${URL}/${id}`, (friend) => {
			console.log(friend);
			$('#amigo').text(
				` Nombre del amigo : ${friend.name} tiene ${friend.age} años, correo : ${friend.email}`
			);
			$('#input').val('');
		});
	} else {
		$('#amigo').text('Ingresar un ID de amigo');
	}
});

/*Eliminar amigo */
let limpiarDeleteText = '';
let eliminarAmigo = function () {
	let id = $('#inputDelete').val();
	console.log(id);
	let friend;

	if (id) {
		$.get(`${URL}/${id}`, function (f) {
			friend = f;
			console.log(friend);
		});
		$.ajax({
			//URL, TYPE , SUCCESS
			url: `${URL}/${id}`, // LA RUTA DONDE DEBE BUSAR EL SERVIDOR
			type: 'DELETE',
			success: function () {
				$('#success').text(
					`Tu amigo ${friend.name} fue elimnado correctamente`
				);
				$('#inputDelete').val('');
				setTimeout(() => {
					$('#success').text('');
				}, 1500);
			},
		});
	} else {
		$('#success').text('tenes que ingresar  un ID');
	}
};
$('#delete').click(eliminarAmigo);

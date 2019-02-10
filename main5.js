const vm = new Vue({
	el: 'main',
	data:{
		semana:["lunes","martes","miercoles","jueves","viernes","sabado" ],
		tareas: [
			{codigo:"1",descripcion:"tarea1"},
			{codigo:"2",descripcion:"tarea2"},
			{codigo:"3",descripcion:"tarea3"}
		],
		persona:{
			nombre:'juan',
			profesion: 'dev',
			ciudad:'valencia'
		}

	}
});
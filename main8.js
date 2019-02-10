const vm = new Vue({
	el: 'main',
	data:{
		busqueda:'',
		min: '5',		
		juegos: [
			{codigo:"3",descripcion:"tarea3",prioridad:true},
			{codigo:"1",descripcion:"tarea1",prioridad:false},
			{codigo:"2",descripcion:"tarea2",prioridad:true},
			{codigo:"4",descripcion:"tarea4",prioridad:false},
			{codigo:"5",descripcion:"tarea5",prioridad:false},
			{codigo:"6",descripcion:"tarea6",prioridad:false},
			{codigo:"7",descripcion:"tarea7",prioridad:false}
		]

	},
	computed:{
		mejoresjuegos(){
			return this.juegos.filter((juego) => juego.codigo >= this.min)
		},
		buscarjuego(){
			return this.juegos.filter((juego) => juego.descripcion.includes(this.busqueda))
		}
	}
});
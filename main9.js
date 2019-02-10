const vm = new Vue({
	el: 'main',
	data:{
		tareas: [
			{codigo:"3",descripcion:"tarea3",prioridad:true},
			{codigo:"1",descripcion:"tarea1",prioridad:false},
			{codigo:"2",descripcion:"tarea2",prioridad:true},
			{codigo:"4",descripcion:"tarea4",prioridad:false},
			{codigo:"5",descripcion:"tarea5",prioridad:false},
			{codigo:"6",descripcion:"tarea6",prioridad:false},
			{codigo:"7",descripcion:"tarea7",prioridad:false}
		]

	},
	methods:{
		completartarea(tarea){
			tarea.prioridad = !tarea.prioridad;
		}
	},
	computed:{
		contagregado(){
			return this.tareas.filter((tarea) => tarea.prioridad)
		}
	}
});
const vm = new Vue({
	el: 'main',
	data:{
		mensaje: 'hola mundo :)',		
		tareas: [
			{codigo:"3",descripcion:"tarea3",prioridad:true},
			{codigo:"1",descripcion:"tarea1",prioridad:false},
			{codigo:"2",descripcion:"tarea2",prioridad:true},
			{codigo:"4",descripcion:"tarea4",prioridad:false}
		]

	},
	computed:{
		mensajealrever(){
			return this.mensaje.split('').reverse().join('')
		},
		ordenarprioridad(){
			return this.tareas.filter((tarea)=>tarea.prioridad)
		},
		ordenar(){
			return this.tareas.sort((a,b)=>b.codigo - a.codigo)
		}

	}
});
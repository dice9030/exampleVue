var vm = new Vue({
  el: 'main',
  data: {   
    nuevatarea: null,
    tareas: [
     "tarea1","tarea2","tarea3"
    ],
    tareasobj: [
      {codigo:"1",descripcion:"tarea1"},
      {codigo:"2",descripcion:"tarea2"},
      {codigo:"3",descripcion:"tarea3"}
    ],
  },  
  methods: {
    agregartarea(){
        this.tareas.unshift(this.nuevatarea);
        this.nuevatarea = null;
    }
  }
})
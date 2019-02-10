Vue.prototype.$http = axios;

new Vue({
	el: 'main',
	data:{
		personas:[]
	},
	mounted(){		
		this.cargarpersonas()
	},
	methods:{
		cargarpersonas(){
			this.$http.get('https://randomuser.me/api/?results=500')
				.then((respuesta)=>{ 					
					this.personas = respuesta.data.results;
				})
		}
	}
});
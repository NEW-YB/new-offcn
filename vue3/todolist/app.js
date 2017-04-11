
let storage = {
	save(key,value){
		localStorage.setItem(key,JSON.stringify(value))
	},
	fetch(key){
		return JSON.parse(localStorage.getItem(key)) || [];
	}
}

Vue.component("todo-header",{
	template:`<header class="header" >
                <h1>todos</h1>
                <input 
                    class="new-todo" 
                    placeholder="请输入内容"
                    @keyup.13="addTodo"
                    v-model="val"
                />
            </header>`,
    data(){
    	return {
    		val:""
    	}
    },
    methods:{
    	addTodo(){
    		this.$emit("addtodo",this.val);
    		this.val = '';
    	}
    }
})
Vue.component("todo-content",{
	template:`<section class="main"  >
                <input 
                    class="toggle-all" 
                    type="checkbox"
                 />
                <ul class="todo-list">
                    <li v-for="item in list" >
                        <div class="view">
                            <input class="toggle" type="checkbox" />
                            <label >{{item.title}}</label>
                            <button class="destroy" @click="removeTodo(item.id)" ></button>
                        </div>
                        <input 
                            class="edit" 
                        />
                    </li>
                </ul>
            </section>`,
    props:["list"],
    methods:{
    	removeTodo(id){
    		this.$emit("removetodo",id);
    	}
    }
})

Vue.component("todo-footer",{
	template:`<footer class="footer" >
	            <span class="todo-count">
	            	<strong>
                       0
                    </strong>
	            	<span>条未选中</span>
	            </span>
                <ul class="filters">
                    <li><a href="#/all" >All</a></li> 
                    <li><a href="#/active">Active</a></li> 
                    <li><a href="#/completed">Completed</a></li>

                </ul>
                <button class="clear-completed" >
                    Clear completed
                </button>
            </footer>`
})

let list = storage.fetch("miaovketang");

var vm = new Vue({
	el:".todoapp",
	data:{
		list:list
	},
	methods:{
		addTodo(val){
			this.list.push({
				title:val,
				id:Math.random(),
				isSelected:false
			})
		},
		removeTodo(id){
			this.list = this.list.filter( (item) => item.id != id );
		}
	}
});
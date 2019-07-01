<template>
<div>
    <div class="container">
        <div class="form-group">
            <label>enter the task</label>
            <input type="text" v-model="addItem" class="form-control" id="task" placeholder="enter the task" />
        </div>
        <div class="form-group">
        <button  v-on:click="add()" class="btn btn-primary">Add task</button>
        </div>
        <ul>
            <li v-for="(list, index) in todoList" :key="index">
                {{list.name}}
            </li>
        </ul>
    </div>
</div>
</template>
<script>
export default{
    data(){
        return{
            addItem:null
        }
    },
    computed:{
        todoList: function(){
            return this.$store.state.todoList
        }
    },
    mounted() {
        this.$store.dispatch('getTodoList')
    },
    methods: {
        add:function(){
        
            var data = {
                "name": this.addItem,
                "description": "des",
                "is_complete": true,
                "priority": "H",
                "user": 1
            }
            console.log(data)
            this.$store.dispatch('postTodoList', data)
            this.addItem=null
        },
    }
}
</script>
<style>
</style>
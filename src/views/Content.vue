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
    methods: {
        add:function(){
        
            this.$store.commit('TASK_ADD',this.addItem)
            this.addItem=null
            axios
      .get('https://checklister-api.herokuapp.com/items/1/')
      .then(response => (this.info = response))
        },
   
   
        

        
    }
}
</script>
<style>
</style>
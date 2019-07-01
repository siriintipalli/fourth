import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todoList: [],
    },
    mutations: {

        TASK_ADD: function(state, response) {
            state.todoList.push(response);
        }


    },
    actions: {

    }
})
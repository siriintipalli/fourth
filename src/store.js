import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [],
  },
  mutations: {
    TASK_ADD: function(state, response) {
      state.todoList = response;
    },

  },
  actions: {
    postTodoList: function(context, postData) {
      return axios.post('https://checklister-api.herokuapp.com/item-list/', postData)
        .then(function(response) {
          console.log(response)
          context.dispatch('getTodoList')
          alert('data addes successfully')
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    getTodoList: function(context) {
      return axios.get('https://checklister-api.herokuapp.com/item-list/')
        .then(function (response) {
          console.log(response.data)
          context.commit('TASK_ADD', response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
})
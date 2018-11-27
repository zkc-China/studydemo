import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const STORAGE_KEY = 'todos-vuejs';
const store = new Vuex.Store({
    state: {
        todolist: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    },
    mutations: {
        add(state, text) {
            this.state.todolist.push({
                text: text,
                state: false,
                editStatue: false
            })
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.todolist));
        },
        delect(state, number) {
            this.state.todolist.splice(number, 1);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.todolist));
        },
        edit(state, text) {
            // this.state.todolist
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.todolist));
        },
        all(state, bealoon) {
            if (bealoon) {
                this.state.todolist.map(item => item.state = false);
            } else {
                this.state.todolist.map(item => item.state = true);
            }
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.todolist));
        },
        empty(state) {
            this.state.todolist = [];
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.todolist));
        }
    },
    getters: {
        doneTodos: state => {
            return state.todolist.filter(todo => todo.state)
        },
        noTodos: state => {
            return state.todolist.filter(todo => !todo.state)
        },
        todos: state => {
            return state.todolist
        }
    }
})


export default store



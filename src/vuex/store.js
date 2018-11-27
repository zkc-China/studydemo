import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        todolist: [
            {
              text: "1",
              state: false,
              editStatue: false,
            },
            {
              text: "2",
              state: false,
              editStatue: false,
            },
            {
              text: "3",
              state: false,
              editStatue: false,
            },
            {
              text: "4",
              state: true,
              editStatue: false,
            },
            {
              text: "5",
              state: true,
              editStatue: false,
            }
          ],
    },
    mutations:{
        add(state,text){
            this.state.todolist.push({
                text:text,
                state:false,
                editStatue:false
            })
        },
        delect(state,number){
            this.state.todolist.splice(number,1);
        },
        edit(state,data){
            // this.state.todolist
        },
        all(state,bealoon){
            if(bealoon){
                this.state.todolist.map(item=>item.state = false);
            }else{
                this.state.todolist.map(item=>item.state = true);
            }
        },
        empty(state){
            this.state.todolist = [];
        }
    },
    getters:{
        
    }
})


export default store



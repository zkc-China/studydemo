<template>
  <div id="todos">
    <div class="title">
      <span>todos</span>
    </div>
    <div class="app">
      <div class="todoinput">
        <input type="checkbox" name="" id="" class="todolistSelectAll" v-model="slectAllState" v-on:change="change" v-show="todolist.length">
        <input type="text" name="" id="" class="userinput" placeholder="What needs to be done?" v-model="newTodoText"
               @keyup.enter="addNewTodo">
      </div>
      <div class="todolist" v-if="todolist.length">
        <div class="listinfo">
          <ul>
            <li v-for="(item,index) in todolist" :key="item.id" v-show="onlySelectedShow">
              <div v-show="!item.editStatue">
                <input type="checkbox" class="todoCheck" v-model="item.state">
                <span v-bind:class="{todoOver:item.state}" @dblclick="edit(item)">{{item.text}}</span>
                <button class="delete" v-on:click="deleteThis(index)">x</button>
              </div>

              <input type="text" class="userChangeTodo" v-show="item.editStatue" v-model="item.text"
                     @blur="changeTodo(item)" v-on:change="changeTodo(item)"  v-focus="editedTodo == item">
            
            </li>

          </ul>
        </div>
        <div class="listbutton">
          <span>{{todolist.length}} items left</span>
          <button v-on:click="allShow">All</button>
          <button v-on:click="SelectedShow">Active</button>
          <button v-on:click="UnselectedShow">Completed</button>
          <a v-on:click="deleteTodoList">Clear completed</a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import store from "./../vuex/store.js";
import { mapState } from "vuex";
export default {
  data() {
    return {
      onlySelectedShow: true,
      onlyUnselectedShow: true,
      editStatue: false,
      slectAllState: false,
      newTodoText: "",
      checkTodolist: [],
      editedTodo: null
    };
  },
  store,
  computed: {
    ...mapState(["todolist"])
  },
  methods: {
    addNewTodo: function() {
      var value = this.newTodoText && this.newTodoText.trim();
      if (value) {
        this.$store.commit("add", value);
        this.newTodoText = "";
      }
    },
    deleteThis: function(number) {
      this.$store.commit("delect", number);
    },
    change: function() {},
    changeTodo: function(data) {
      if (data.text) {
        data.editStatue = false;
        this.editedTodo = null;
      }else{
        this.$store.commit("delect", this.$store.state.todolist.indexOf(data));
      }
    },
    edit: function(data) {
      data.editStatue = true;
      this.editedTodo = data;
    },
    SelectedShow: function() {
      var ss = [];
      todolist.filter(item => item.state);
    },
    deleteTodoList:function(){
      this.$store.commit('empty')
    },
    allShow:function(){

    },
    SelectedShow:function(){

    },
    UnselectedShow:function(){

    }
  },
  watch: {
    slectAllState:function(){
      this.$store.commit('all',this.slectAllState)
    }
  },

  directives: {
    demo: function(el, binding, vnode, voldnode) {},
    focus: {
      bind: function(el) {
        // document.createelement
        console.log("bind");
      },
      inserted: function(el) {
        // append
        console.log("inserted");
      },
      update: function(el, binding) {
        // append
        console.log("update", binding);
        if (binding.modifiers.red) {
          el.style.border = "1px solid " + "red";
        }
        if (binding.modifiers.blue) {
          el.style.border = "1px solid " + "blue";
        }
        el.focus();
      },

      componentUpdated: function(el, binding) {
        // append
        console.log("componentUpdated", binding);
      },
      unbind: function(el, binding) {
        console.log("unbind");
      }
    }
  }
};
</script>


<template>
  <div id="todos">
    <div class="title">
      <span>todos</span>
    </div>
    <div class="app">
      <div class="todoinput">
        <input type="checkbox" name="" id="" class="todolistSelectAll" v-model="slectAllState" v-on:change="change">
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
                     @blur="changeTodo(item)" v-on:change="changeTodo(item)"  v-focus.blue="editedTodo">
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
  export default {
    data() {
      return {
        onlySelectedShow: true,
        onlyUnselectedShow: true,
        editStatue: false,
        slectAllState: false,
        newTodoText: "",
        todolist: [],
        checkTodolist: [],
        editedTodo: null,
      };
    },
    methods: {
      addNewTodo: function () {
        this.todolist.push({
          text: this.newTodoText,
          state: false,
          editStatue: false
        });
        this.newTodoText = "";
      },
      selectAllCheckbox: function () {
        this.todolist.map;
      },
      change: function () {
        if (this.slectAllState) {
          this.todolist.map(function (item) {
            item.state = true;
          });
        } else {
          this.todolist.map(function (item) {
            item.state = false;
          });
        }
      },
      deleteThis: function (number) {
        this.todolist.splice(number, 1);
      },
      edit: function (todo) {
        todo.editStatue = true;
        this.editedTodo = todo;
      },
      SelectedShow: function () {
        this.onlySelectedShow = false;
        this.onlyUnselectedShow = true;
      },
      UnselectedShow: function () {
        this.onlyUnselectedShow = false;
        this.onlySelectedShow = true;
      },
      allShow: function () {
        this.onlySelectedShow = true;
        this.onlyUnselectedShow = true;
      },
      deleteTodoList: function () {
        this.todolist = [];
      },
      changeTodo: function (todo) {
        todo.editStatue = false;
        this.editedTodo = null;
      }
    },
    watch: {
      todolist: function () {
        localStorage.setItem("todolist", JSON.stringify(this.todolist));
      }
    },
    mounted() {
      console.log(this.todolist)
      this.todolist = JSON.parse(window.localStorage.getItem("todolist")) || [];
    },
    directives: {
      demo: function (el, binding, vnode, voldnode) {

      },
      focus: {
        bind: function (el) {
          // document.createelement
          console.log('bind')
        },
        inserted: function (el) {
          // append
          console.log('inserted')
        },
        update: function (el, binding) {
          // append
          console.log('update', binding)
          if(binding.modifiers.red) {
            el.style.border = '1px solid ' + 'red'
          }
          if(binding.modifiers.blue) {
            el.style.border = '1px solid ' + 'blue'
          }
        },

        componentUpdated: function (el, binding) {
          // append
          console.log('componentUpdated', binding)
        },
        unbind: function (el, binding) {
          console.log('unbind')
        }
      }
    }
  };
</script>


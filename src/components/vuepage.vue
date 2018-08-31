<template>
  <div id="todos">
    <div class="title">
      <span>todos</span>
    </div>
    <div class="app">
      <div class="todoinput">
        <input type="checkbox" name="" id="" class="todolistSelectAll" v-model="slectAllState" v-on:change="change">
        <input type="text" name="" id="" class="userinput" placeholder="What needs to be done?" v-model="newTodoText" v-on:change="addNewTodo">
      </div>
      <div class="todolist">
        <div class="listinfo">
          <ul v-if="todolist.length" >
            <li v-for="(item,index) in todolist" :key="item.id" v-if="item.state" v-show="onlySelectedShow">
              <input type="checkbox" name="" id="" class="todoCheck" v-model="item.state" v-if="!item.editStatue">
              <span v-bind:class="{todoOver:item.state}" @dblclick="edit(index)" v-if="!item.editStatue">{{item.text}}</span>
              <button class="delete" v-on:click="deleteThis(index)" v-if="!item.editStatue">x</button>
              <input type="text" name="" id="" class="userChangeTodo" v-if="item.editStatue" v-model ="item.text" @blur="changeTodo(index)" v-on:change="changeTodo(index)">
            </li>
            <li v-else v-show="onlyUnselectedShow">
              <input type="checkbox" name="" id="" class="todoCheck" v-model="item.state" v-if="!item.editStatue">
              <span v-bind:class="{todoOver:item.state}" @dblclick="edit(index)" v-if="!item.editStatue">{{item.text}}</span>
              <button class="delete" v-on:click="deleteThis(index)" v-if="!item.editStatue">x</button>
              <input type="text" name="" id="" class="userChangeTodo" v-model ="item.text" v-if="item.editStatue" @blur="changeTodo(index)" v-on:change="changeTodo(index)">
            </li>
          </ul>
        </div>
        <div class="listbutton" v-if="todolist.length">
          <span>{{todolist.length}} items left</span>
          <button v-on:click="allShow">All</button>
          <button v-on:click="SelectedShow">Active</button>
          <button v-on:click="UnselectedShow">Completed</button>
          <a  v-on:click="deleteTodoList">Clear completed</a>
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
      checkTodolist: []
    };
  },
  methods: {
    addNewTodo: function() {
      this.todolist.push({
        text: this.newTodoText,
        state: false,
        editStatue: false,
      });
      this.newTodoText = "";
    },
    selectAllCheckbox: function() {
      this.todolist.map;
    },
    change: function() {
      if (this.slectAllState) {
        this.todolist.map(function(item) {
          item.state = true;
        });
      } else {
        this.todolist.map(function(item) {
          item.state = false;
        });
      }
    },
    deleteThis: function(number) {
      this.todolist.splice(number, 1);
    },
    edit: function(number) {
      this.todolist[number].editStatue = true;
      
    },
    SelectedShow: function() {
      this.onlySelectedShow = false;
      this.onlyUnselectedShow = true;
      console.log(this.onlySelectedShow);
      console.log(this.onlyUnselectedShow);
    },//UnselectedShow
    UnselectedShow: function() {
      this.onlyUnselectedShow = false;
      this.onlySelectedShow = true;
      console.log(this.onlySelectedShow);
      console.log(this.onlyUnselectedShow);
    },
    allShow: function() {
      this.onlySelectedShow = true;
      this.onlyUnselectedShow = true;
    },
    deleteTodoList:function(){
      this.todolist = [];
    },
    changeTodo:function(number){
      this.todolist[number].editStatue = false;
    }
  }
};
</script>


<style lang="less" scoped>
.app {
  width: 550px;
  margin: 0 auto 0;
  background: rgba(0, 0, 0, 0);
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  .todoinput {
    position: relative;
    width: 550px;
    height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    .todolistSelectAll {
      width: 50px;
      height: 50px;
      transform: rotate(90deg);
      -webkit-appearance: none;
      outline: none;
      position: absolute;
      margin: 0;
      margin-top: -10px;
      margin-left: -10px;
    }
    .todolistSelectAll::before {
      content: "❯";
      font-size: 22px;
      color: #e6e6e6;
      padding: 10px 27px 10px 27px;
    }
    .todolistSelectAll:checked:before {
      color: #737373;
    }
    .userinput {
      width: 500px;
      height: 50px;
      margin-left: 50px;
      font-size: 22px;
      border: 0;
      padding: 0;
      outline: none;
    }

    .userinput::-webkit-input-placeholder {
      color: rgba(0, 0, 0, 0.2);
      font-style: oblique;
      font-size: 22px;
    }
  }

  .todolist .listinfo ul,
  li {
    position: relative;
    list-style: none;
    margin: 0;
    text-align: left;
    padding: 0;
    border: 0;
  }
  .todolist .listinfo ul li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .todolist .listinfo .todoCheck {
    width: 50px;
    height: 50px;
    -webkit-appearance: none;
    outline: none;
    margin: 0;
    float: left;
    padding: 5px 0 5px;
    margin: auto 0;
    top: 0;
    bottom: 0;
    position: absolute;
  }
  .todolist .listinfo .todoCheck::after {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
  }
  .todolist .listinfo .todoCheck:checked:after {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
  }
  .todolist .listinfo span {
    width: 450px;
    margin-left: 50px;
    display: inherit;
    line-height: 50px;
    font-size: 22px;
    white-space: pre-line;
    word-break: break-all;
  }
  .todolist .listinfo li:hover .delete {
    display: block;
  }
  .todolist .listinfo .delete {
    position: absolute;
    background: rgba(0, 0, 0, 0);
    border: 0px;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    color: #cc9a9a;
    margin-bottom: 11px;
    outline: none;
    display: none;
  }
  .todolist .listinfo .userChangeTodo {
    width: 499px;
    height: 50px;
    margin-left: 50px;
    font-size: 22px;
    border: 0;
    padding: 0;
    outline: none;
  }

  .todolist .listinfo .userChangeTodo:focus {
    border: 1px solid rgba(0, 0, 0, 0.8);
  }
  .todolist .listinfo .todoOver {
    text-decoration: line-through;
    opacity: 0.2;
  }
  .listbutton {
    color: #777;
    padding: 10px 15px;
    height: 20px;
    text-align: center;
    border-top: 1px solid #e6e6e6;
    position: relative;
    z-index: 1;
  }
  .listbutton span {
    margin-left: -10px;
    margin-right: 100px;
  }
  .listbutton button {
    border: 1px solid rgba(0, 0, 0, 0);
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    color: inherit;
    outline: none;
  }
  .listbutton button:hover {
    border: 1px solid rgba(255, 0, 0, 0.2);
    border-radius: 3px;
  }
  .listbutton .btnchecked {
    border: 1px solid rgba(255, 0, 0, 0.2);
    border-radius: 3px;
  }

  .listbutton a {
    margin-left: 40px;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  .listbutton a:hover {
    text-decoration: underline;
  }
  .listbutton::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    z-index: -1;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
      0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
      0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }
}
.title span {
  font-size: 100px;
  color: rgba(255, 0, 0, 0.1);
}

</style>

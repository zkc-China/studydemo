<template>
    <div>
        <div class="title">
            <span>todos</span>
        </div>
        <div class="app">

            <div class="todoinput">
                <input type="checkbox" name="" id="" class="todolistSelectAll">
                <input type="text" name="" id="" class="userinput" placeholder="What needs to be done?">
            </div>
            <div class="todolist">
                <div class="listinfo">
                    <ul>
                        <li>
                            <input type="checkbox" name="" id="" class="todoCheck">
                            <span>asdasd</span>
                            <button class="delete">x</button>
                        </li>
                        <li>
                            <input type="checkbox" name="" id="" class="todoCheck">
                            <span>asdasdadaasdasdadaasdasdadaasdasdadaasdasdadaasdasdada</span>
                            <button class="delete">x</button>
                        </li>
                        <li>
                            <input type="text" name="" id="" class="userChangeTodo">
                        </li>
                        <li>
                            <input type="checkbox" name="" id="" class="todoCheck">
                            <span>asdasd</span>
                            <button class="delete">x</button>
                        </li>
                        <li class="todoOver">
                            <input type="checkbox" name="" id="" class="todoCheck">
                            <span>asdasd</span>
                            <button class="delete">x</button>
                        </li>
                    </ul>
                </div>
                <div class="listbutton">
                    <span>5 items left</span>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                    <a href="">Clear completed</a>
                </div>
            </div>
        </div>
    </div>

</template>


<script>
export default {};
</script>

<style scoped>


.todoinput .userinput::-webkit-input-placeholder {
  color: rgba(0, 0, 0, 0.2);
  font-style: oblique;
  font-size: 22px;
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
.todolist .listinfo li:hover > bottom{
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
.todolist .listinfo .todoOver{
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

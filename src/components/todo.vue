<template>
  <div id="todolist">
    <div class="title">
      <p>todos</p>
    </div>
    <div class="conent">
      <input type="checkbox" name="todoInfo" class="allSelect">
      <input type="text" placeholder="What needs to be done?" class="userinput">
      <div class="list">
        <input type="checkbox" name="todoInfo" id="">
        <span>阿斯达斯的 阿斯达斯的 阿斯达斯的 </span>
        <button class="delect">X</button>
      </div>
      <div class="list">
        <input type="checkbox" name="todoInfo" id="">
        <span>阿斯达斯的 阿斯达斯的 阿斯达斯的 </span>
        <button class="delect">X</button>
      </div>
      <div class="list">
        <input type="checkbox" name="todoInfo" id="">
        <span>阿斯达斯的 阿斯达斯的 阿斯达斯的 </span>
        <button class="delect">X</button>
      </div>
      <div class="list">
        <input type="checkbox" name="todoInfo" id="">
        <span>阿斯达斯的 阿斯达斯的 阿斯达斯的 </span>
        <button class="delect">X</button>
      </div>
      <div class="list">
        <input type="checkbox" name="todoInfo" id="">
        <span>阿斯达斯的 阿斯达斯的 阿斯达斯的 </span>
        <button class="delect">X</button>
      </div>
      <div class="list">
        <input type="text" class="edit" value="asdasd">
      </div>
      <div class="list ">
        <span class="textover">asdasdadaasdasdadaasdasdadaasdasdadaasdasdadaasdasdada</span>
        <button class="delect">X</button>
      </div>
      <div class="list">
        <span>阿斯达斯的 阿斯达斯的 阿斯达斯的 </span>
        <button class="delect">X</button>
      </div>
      <div class="list">
        <span>阿斯达斯的 阿斯达斯的 阿斯达斯的 </span>
        <button class="delect">X</button>
      </div>
      <div class="list">
        <input type="text" class="edit" value="asdasd">
      </div>
      <div class="list">
        <span>阿斯达斯的 阿斯达斯的 阿斯达斯的 </span>
        <button class="delect">X</button>
      </div>
      <div class="list">
        <span>阿斯达斯的 阿斯达斯的 阿斯达斯的 </span>
        <button class="delect">X</button>
      </div>
      <div class="list">
        <input type="text" class="edit" value="asdasd">
      </div>
      <div class="footer">
        <span>5 items left</span>
        <button v-on="aaa()">ALL</button>
        <button v-on="aaa()">Active</button>
        <button v-on="aaa()" class="btnchecked">Completed</button>
        <a href="#">Clear completed</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {

  name: "todulist",
  methods: {
    aaa() {}
  }
};
</script>

<style>
.conent {
  width: 550px;
  margin: 10px auto;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 100px;
  position: relative;
}
.conent .allSelect {
  position: absolute;
  outline: none;
  width: 40px;
  height: 40px;
  -webkit-appearance: none;
  transform: rotate(90deg);
}
.conent .allSelect:before {
  content: "❯";
  font-size: 22px;
  color: #e6e6e6;
  padding: 10px 27px 10px 27px;
}
.conent .allSelect:checked:before {
  color: #737373;
}
.title p {
  margin: 0px;
  color: rgba(255, 0, 0, 0.2);
  font-size: 100px;
}
.userinput {
  width: 490px;
  height: 65px;
  line-height: 33px;
  font-size: 24px;
  border: 0px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-left: 60px;
}
.userinput::-webkit-input-placeholder {
  color: rgba(0, 0, 0, 0.2);
  font-style: oblique;
}
.userinput:focus {
  outline: none;
}
.icon {
  background-size: 30%;
}
ul li {
  list-style: none;
}
.list {
  width: 550px;
  min-height: 65px;
  text-align: left;
  font-size: 24px;
  line-height: 33px;
  margin: 0px auto;
  line-height: 1.2;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.list input {
  position: absolute;
  width: 40px;
  height: 40px;
  margin: 10px 0 10px;
  -webkit-appearance: none;
  background: none;
  outline: none;
}
.list input::after {
  content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
}
.list input:checked:after {
  content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
}
.list span {
  width: 430px;
  display: inherit;
  padding: 15px 60px 15px 15px;
  -webkit-transition: color 0.4s;
  transition: color 0.4s;
  vertical-align: middle;
  position: relative;
  white-space: pre-line;
  word-break: break-all;
  margin-left: 50px;
}
.list .textover {
  width: 480px;
  display: inherit;
  padding: 15px 60px 15px 15px;
  transition: color 0.4s;
  vertical-align: middle;
  position: relative;
  white-space: pre-line;
  word-break: break-all;
  line-break: 35px;
  color: rgba(0, 0, 0, 0.3);
  text-decoration: line-through;
}
.list .delect {
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
}
.list .delect:hover {
  color: rgba(255, 0, 0, 0.8);
}
.footer {
  color: #777;
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  border-top: 1px solid #e6e6e6;
  position: relative;
}
.footer span {
  margin-left: -10px;
  margin-right: 100px;
}
.footer button {
  border: 1px solid rgba(0, 0, 0, 0);
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  color: inherit;
  outline: none;
}
.footer button:hover {
  border: 1px solid rgba(255, 0, 0, 0.2);
  border-radius: 3px;
}
.footer .btnchecked {
  border: 1px solid rgba(255, 0, 0, 0.2);
  border-radius: 3px;
}
</style>


<template>
  <div id="todolist">
    <div class="title">
      <p>todos</p>
    </div>
    <div class="conent">
      <input type="text" placeholder="What needs to be done?" class="userinput">
      <div class="list">
        <span>阿斯达斯的 阿斯达斯的 阿斯达斯的 </span>
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
      <div class="list ">
        <span class="textover">asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd</span>
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
}
.title p {
  margin: 0px;
  color: rgba(255, 0, 0, 0.2);
  font-size: 100px;
}
.userinput {
  width: 540px;
  height: 65px;
  line-height: 33px;
  font-size: 24px;
  border: 0px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: rgba(0, 0, 0, 0.2);
  padding-left: -10px;
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
.list span {
  width: 480px;
  display: inherit;
  padding: 15px 60px 15px 15px;
  transition: color 0.4s;
  vertical-align: middle;
  position: relative;
  white-space: pre-line;
  word-break: break-all;
  line-break: 35px;
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

.footer a {
  margin-left: 40px;
  color: inherit;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}
.footer::after {
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
.list .edit {
  width: 526px;
  height: 65px;
  line-height: 33px;
  font-size: 24px;
  border: 1px solid rgba(0, 0, 0, 0.9);
  box-shadow: rgba(0, 0, 0, 0.2);
  outline: none;
  padding-left: 20px;
}
/* .userinput:focus {
  outline-color: rgba(0, 0, 0, 0.9);
  border-bottom: 1px solid rgba(0, 0, 0, 0.9);
} */
</style>
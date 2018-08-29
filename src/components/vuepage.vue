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

<style scoped>

</style>

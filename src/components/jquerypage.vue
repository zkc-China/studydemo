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

</style>

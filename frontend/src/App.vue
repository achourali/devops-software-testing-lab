<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <addTask />
    <tasksList/>

  </div>
</template>

<script>
import addTask from "./components/addTask.vue";
import tasksList from "./components/tasksList.vue"

export default {
  name: "App",
  components: {
    addTask,
    tasksList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

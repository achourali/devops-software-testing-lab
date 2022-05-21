<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <addTask />
  </div>
</template>

<script>
import addTask from "./components/addTask.vue";

export default {
  name: "App",
  components: {
    addTask,
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

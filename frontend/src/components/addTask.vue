<template>
  <div>
    add task : <input placeholder="task" v-model="description"/>
    <button type="button" @click="addTask">Add</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      description: "",
    };
  },
  methods: {
    addTask() {
      axios
        .post(this.backURL + "/task",{description:this.description})
        .then(() =>{ this.description=""});
    },
  },
};
</script>

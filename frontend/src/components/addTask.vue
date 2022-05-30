<template>
  <div>
    <div class="ui action input">
      <input type="text" placeholder="Task description" v-model="description" />
      <button class="ui button" @click="addTask">Add task</button>
    </div>
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
        .post(this.backURL + "/task", { description: this.description })
        .then(() => {
          this.description = "";
        });
    },
  },
};
</script>

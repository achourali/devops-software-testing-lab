<template>
  <div>
    <div class="ui center aligned segment">
      <h2 class="ui header">Tasks</h2>
      <taskCard v-for="task in tasks" :key="task.id" :task="task" />
    </div>
  </div>
</template>

<script>
import taskCard from "./taskCard.vue";
import axios from "axios";
import { io } from "socket.io-client";

export default {
  data() {
    return {
      tasks: [],
    };
  },
  mounted() {
    this.getTasks();
    const socket = io(this.socketioURL, {
      reconnectionDelayMax: 10000,
    });

    socket.on("tasksUpdated", () => this.getTasks());
  },
  methods: {
    getTasks() {
      axios
        .get(this.backURL + "/tasks")
        .then((responce) => (this.tasks = responce.data));
    },
  },
  components: {
    taskCard,
  },
};
</script>

<template>
  <div>tasks: <taskCard v-for="task in tasks" :key="task.id" :task="task" /></div>
</template>

<script>
import taskCard from "./taskCard.vue";
import axios from "axios"
import { io } from "socket.io-client";

export default {
  data() {
    return {
      tasks: [],
    };
  },
  mounted(){
      axios.get(this.backURL+"/tasks").then(((responce)=>this.tasks =responce.data))
      const socket = io("ws://localhost:3001", {
          reconnectionDelayMax: 10000,
      });
      console.log(socket)
      
  },
  components: {
    taskCard,
  },
};
</script>

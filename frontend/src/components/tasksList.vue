<template>
  <div>tasks: <taskCard v-for="task in tasks" :key="task.id" :task="task" /></div>
</template>

<script>
import taskCard from "./taskCard.vue";
import axios from "axios"

export default {
  data() {
    return {
      tasks: [],
    };
  },
  mounted(){
      axios.get(this.backURL+"/tasks").then(((responce)=>this.tasks =responce.data))
      
  },
  components: {
    taskCard,
  },
};
</script>

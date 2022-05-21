<template>
  <div>
    {{ this.task.id }} {{ this.task.description }}

    <button v-if="!this.task.completed" @click="completed"  style="background:#a8323a">
      mark as completed
    </button>
    <button v-else @click="uncompleted"  style="background:#42b883">mark as uncompleted</button>
  </div>
</template>

<script>
import axios from "axios"
export default {
  props: ["task"],
  methods: {
    completed() {
      axios.put(this.backURL + "/task/" + this.task.id,{...this.task,completed:true});
    },
    uncompleted() {
      axios.put(this.backURL + "/task/" + this.task.id,{...this.task,completed:false});
    },
  },
};
</script>

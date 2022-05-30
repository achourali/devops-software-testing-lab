<template>
  <div>
    <div class="ui centered card">
      <div class="content">
        <div class="header">Task n° {{ this.task.id }}:</div>
        <div class="description">
          {{ this.task.description }}
        </div>
      </div>
      <div class="extra content">
        <div
          class="ui basic green button"
          v-if="!this.task.completed"
          @click="completed"
        >
          mark as completed
        </div>
        <div class="ui basic red button" v-else @click="uncompleted">
          mark as uncompleted
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["task"],
  methods: {
    completed() {
      axios.put(this.backURL + "/task/" + this.task.id, {
        ...this.task,
        completed: true,
      });
    },
    uncompleted() {
      axios.put(this.backURL + "/task/" + this.task.id, {
        ...this.task,
        completed: false,
      });
    },
  },
};
</script>

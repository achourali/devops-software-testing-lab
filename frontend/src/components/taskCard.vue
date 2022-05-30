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
        <div class="ui basic yellow button" v-else @click="uncompleted">
          mark as uncompleted
        </div>
        <button class="ui right floated  icon red button" @click="remove">
          <i class="trash icon"></i>
        </button>
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
    remove(){
      axios.delete(this.backURL + "/task/" + this.task.id);

    }
  },
};
</script>

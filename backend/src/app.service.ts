import { Injectable } from '@nestjs/common';
import { Task } from './entities/task';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  tasks: Task[] = [];

  getAll() {
    return this.tasks;
  }

  getById(id: number) {
    const task = this.tasks.find((value) => value.id == id);

    return task;
  }

  create(task: Task) {
    let lastId = 0;

    if (this.tasks.length > 0) {
      lastId = this.tasks[this.tasks.length - 1].id;
    }

    task.id = lastId + 1;
    task.completed=false;

    this.tasks.push(task);

    return task;
  }

  update(task: Task) {
    const taskArray = this.getById(task.id);

    if (taskArray) {
      taskArray.description = task.description;
      taskArray.completed = task.completed;
    }

    return taskArray;
  }

  delete(id: number) {
    const index = this.tasks.findIndex((value) => value.id == id);

    this.tasks.splice(index, 1);
  }
}

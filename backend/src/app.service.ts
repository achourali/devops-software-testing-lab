import { BadRequestException, Injectable } from '@nestjs/common';
import { Task } from './entities/task';
import {SocketioService} from './socketio.service'

@Injectable()
export class AppService {

  constructor(private socketioService:SocketioService){
  }


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
    this.socketioService.emitEvent('tasksUpdated')
    return task;
  }

  update(task: Task) {
    const taskToUpdate = this.getById(task.id);

    if (taskToUpdate) {
      taskToUpdate.description = task.description;
      taskToUpdate.completed = task.completed;
    }else{
      throw new BadRequestException('id not found')
    }

    return taskToUpdate;
  }

  delete(id: number) {
    const index = this.tasks.findIndex((value) => value.id == id);
    if(index==-1) throw new BadRequestException('id not found')
    return this.tasks.splice(index, 1)[0];
  }
}

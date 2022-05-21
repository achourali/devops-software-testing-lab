import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Task } from './entities/task';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('tasks')
  async getAll(): Promise<Task[]> {
    return this.appService.getAll();
  }

  @Get('task/:id')
  async getById(@Param('id') id: number): Promise<Task> {
    return this.appService.getById(id);
  }

  @Post('task')
  async create(@Body() task: Task): Promise<Task> {
    return this.appService.create(task);
  }

  @Put('task/:id')
  async update(@Param('id') id: number, @Body() task: Task): Promise<Task> {
    task.id = id;

    return this.appService.update(task);
  }

  @Delete('task/:id')
  async delete(@Param('id') id: number) {
    this.appService.delete(id);
  }
}

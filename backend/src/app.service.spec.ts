import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { SocketioService } from './socketio.service';

describe('AppController', () => {
  let appService: AppService;

  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [AppService,SocketioService],
    }).compile();

    appService = await app.get(AppService);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appService.getHello()).toBe('Hello World!');
    });
  });

  describe('add task 1', () => {
    it('should return the added task', () => {
      let task = { description: 'task 1', id: null, completed: null };
      expect(appService.create(task)).toStrictEqual({
        completed: false,
        description: 'task 1',
        id: 1,
      });
    });
  });

  describe('add task 2', () => {
    it('should return the added task with the next id', () => {
      let task = { description: 'task 2', id: 999, completed: null };
      expect(appService.create(task)).toStrictEqual({
        completed: false,
        description: 'task 2',
        id: 2,
      });
    });
  });

  describe('get all tasks', () => {
    it('should return previously added tasks', () => {
      let tasks = [
        { description: 'task 1', id: 1, completed: false },
        { description: 'task 2', id: 2, completed: false },
      ];
      expect(appService.getAll()).toStrictEqual(tasks);
    });
  });

  describe('update existing task', () => {
    it('should return the updated task', () => {
      let task = { id: 2, description: 'task 2', completed: true };
      expect(appService.update(task)).toStrictEqual(task);
    });
  });


  describe('update not existing task', () => {
    it('should throw an errro', async () => {
        let task = { id: 99, description: 'task 2', completed: true };
        try {
            await appService.update(task);
            expect(true).toBe(false);
          } catch (error) {
            expect(error).toBeInstanceOf(BadRequestException);
          }
    
    });
  });

  describe('delete existing task', () => {
    it('should return the deleted task', () => {
      let task = { id: 2, description: 'task 2', completed: true };
      expect(appService.delete(2)).toStrictEqual(task);
    });
  });

  describe('delete not existing task', () => {
    it('should throw an error ', async () => {
      try {
        await appService.delete(99);
        expect(true).toBe(false);
      } catch (error) {
        expect(error).toBeInstanceOf(BadRequestException);
      }

    });
  });

  describe('check all tests', () => {
    it('should return the tasks after all test', () => {
      let tasks = [{ description: 'task 1', id: 1, completed: false }];
      expect(appService.getAll()).toStrictEqual(tasks);
    });
  });
});

import { Injectable } from '@nestjs/common';
import { createServer } from 'http';
import { Server } from 'socket.io';


@Injectable()
export class SocketioService {
  private io;

  constructor() {
    const httpServer = createServer();
    this.io = new Server(httpServer, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
      },
    });

    this.io.on('connection', (socket) => {
      console.log('new connection');
    });

    httpServer.listen(3001);
  }
}

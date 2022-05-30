import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocketioService } from './socketio.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,SocketioService],
})
export class AppModule {}

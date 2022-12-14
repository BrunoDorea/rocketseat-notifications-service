/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { NotificationRepository } from '../../../src/app/repositories/notification-repository';
import { SendNotification } from 'src/app/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
  exports: [NotificationRepository]
})
export class HttpModule {}

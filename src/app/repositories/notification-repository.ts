/* eslint-disable prettier/prettier */
import { Notification } from "../entities/notification";

export abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>;
}
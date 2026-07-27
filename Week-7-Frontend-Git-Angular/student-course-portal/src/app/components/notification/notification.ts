import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  providers: [NotificationService],
  template: `<p>Notification Component Loaded</p>`
})
export class NotificationComponent {

  // Component-level provider creates a separate instance
  // of NotificationService for this component.

  constructor(private notificationService: NotificationService) {}

}
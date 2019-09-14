import { Component } from '@angular/core';
import { ToastService } from './app/services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trip-planner';

  constructor(private toastService: ToastService) {}
}

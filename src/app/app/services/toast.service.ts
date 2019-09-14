import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toasts: any[] = [];

  constructor() { }

  showSuccess(text: string) {
    this.show(text, { classname: 'bg-success text-light', delay: 10000 });
  }

  showError(text: string) {
    this.show(text, { classname: 'bg-danger text-light', delay: 10000 });
  }

  showStandard() {
    this.show('I am a standard toast');
  }

  private show(text: string, options: any = {}) {
    this.toasts.push({ text, ...options });
  }

  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}

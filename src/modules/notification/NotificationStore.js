import { decorate, observable, action } from 'mobx';

class NotificationStore {
  open: boolean = false;
  message: string;
  durationMs: number;
  onClose: Function = () => {
    this.open = false;
  }

  showMessage(message, durationMs) {
    this.message = message;
    this.durationMs = durationMs;
    this.open = true;
  }
}

decorate(NotificationStore, {
  open: observable,
  message: observable,
  durationMs: observable,
  onClose: observable,
  showMessage: action
});

export default new NotificationStore();

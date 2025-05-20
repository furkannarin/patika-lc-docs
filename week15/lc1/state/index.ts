import { observable, action, makeObservable } from 'mobx'

type ToastConfig = {
  message: string
  duration: number
  isVisible: boolean
}

class GlobalState {
  isAuthenticated: boolean = false;
  userData: Record<string, unknown> = {};

  toastConfig: ToastConfig = { duration: 60 * 1000, isVisible: false, message: 'NO_MSG_EXISTS' }

  constructor() {
    makeObservable(this, {
      isAuthenticated: observable,
      userData: observable,
      toastConfig: observable,
      setToasterDuration: action,
      setToasterVisibility: action,
      setToasterMessage: action
    })
  }

  setToasterDuration(duration: number) {
    this.toastConfig.duration = duration * 1000;
  }

  setToasterVisibility(newVisibility: boolean) {
    this.toastConfig.isVisible = newVisibility;
  }

  setToasterMessage(message: string) {
    this.toastConfig.message = message;
  }
}

export default new GlobalState();

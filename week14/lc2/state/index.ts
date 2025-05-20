import { observable, action, makeObservable } from 'mobx'

class Auth {
  isAuthenticated: boolean = false;
  userData: Record<string, unknown> = {};

  constructor() {
    makeObservable(this, {
      isAuthenticated: observable,
      userData: observable,
    })
  }
}

export default new Auth();

import { IPrisoner, IUser } from 'src/interfaces';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  private prisoner: any;
  private user: any;
  private registerEdit:any;
  constructor() {}
  setPrisoner(newPrisoner: IPrisoner) {
    this.prisoner = newPrisoner;
  }
  getPrisoner() {
    return this.prisoner;
  }

  setUser(newUser: IUser | null | { login: string; password: string }): void {
    this.user = newUser;
  }
  getUser() {
    return this.user;
  }

  setRegisterEdit(register: IUser | null ): void {
    this.registerEdit = register;
  }
  getRegisterEdit() {
    return this.registerEdit;
  }
}

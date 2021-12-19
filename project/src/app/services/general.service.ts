import { IPrisoner, IUser } from 'src/interfaces';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  private prisoner:any;
  private user:any;
  constructor() {}
  setPrisoner(newPrisoner: IPrisoner) {
    this.prisoner = newPrisoner;
  }
  getPrisoner() {
    return this.prisoner;
  }

  setUser(newUser: IUser): void {
    this.user = newUser;
  }
  getUser() {
    return this.user;
  }
}

interface IUser {
  id: number;
  full_name: string;
  email: string;
  password: string;
  role: RoleEnum;
}

interface IPrisoner {
  id: number;
  fullName: string;
  dateOfBirth: Date;
  taxNumber: number;
  registartionCode: number;
  caseNumber: number;
  reason: string;
  dateOfTrial: Date;
  from: Date;
  till: Date;
}

interface IPrisonerLog {
  id: number;
  userId: number;
  prisonerId: number;
  type: ActionEnum;
  date: Date;
  oldValue: string | number | Date;
  newValue: string | number | Date;
}

enum RoleEnum {
  administrator = 'адміністратор',
  registrator = 'реєстратор',
}

enum ActionEnum {
  create = 'створення',
  modifi = 'модифікація',
  delete = 'видалення',
}

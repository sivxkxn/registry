export interface IUser {
  id: number;
  full_name: string;
  taxNumber: string;
  email: string;
  password: string;
  role?: RoleEnum;
  organization?: string;
  isActive: Active;
}

export interface IPrisoner {
  id: number;
  fullName: string;
  dateOfBirth: Date;
  taxNumber: string;
  registartionCode: string;
  caseNumber: string;
  live: string;
  gender: Gender;
  dateOfTrial: Date;
  from: Date;
  till: Date;
  reason: string;
  article: string;
  trial: string;
  benefits?: Benefits;
  disease?: string;
}
export interface IPrisonerLog {
  id: number;
  userId: number;
  prisonerId: number;
  type: ActionEnum;
  date: Date;
  oldValue: string | number | Date;
  newValue: string | number | Date;
}

export enum RoleEnum {
  administrator = 'адміністратор',
  registrator = 'реєстратор',
}

export enum Gender {
  male = 'Чоловіча',
  female = 'Жіноча',
}

export enum ActionEnum {
  create = 'створення',
  modifi = 'модифікація',
  delete = 'видалення',
}

export enum Benefits {
  true = 'є',
  false = 'немає',
}
export enum Active {
  true = 'Активний',
  false = 'Деактивований',
}

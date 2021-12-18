export interface IUser {
  id: number;
  fullName: string;
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
  registerName:string;
  prisonerName: string;
  type: ActionEnum;
  date: Date;
  fieldName:string;
  oldValue?: string | number | Date | null | undefined;
  newValue?: string | number | Date | null | undefined;
}

export enum RoleEnum {
  administrator = 'Адміністратор',
  registrator = 'Реєстратор',
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

export enum prisonerUkr {
  id = 'Ідентифікатор',
  fullName =  "Ім'я",
  dateOfBirth =  'Дата народження',
  taxNumber = 'ІНН',
  registartionCode = 'Регістрацційний номер',
  caseNumber = 'Номер справи',
  live = 'Місце реєстрації',
  gender = 'Стать',
  dateOfTrial = 'Дата винесення вироку',
  from = "Ув'язнанний з",
  till = "Ув'язнаний до",
  reason = 'Причнина',
  article = 'Стаття',
  trial = 'Орган, який виніс вирок',
  benefits = 'Пільги',
  disease = 'Хвороби'
}
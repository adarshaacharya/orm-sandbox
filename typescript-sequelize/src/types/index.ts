export interface UserInterface {
  id: number;
  name: string;
  email: string;
  password: string;
  passwordHash: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserSaveInterface {
  name: string;
  email: string;
  password: string;
}

export interface AuthInterface {
  email: string;
  password: string;
}

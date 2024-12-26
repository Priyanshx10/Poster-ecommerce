export interface FormData {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
}

export type AuthMode = 'login' | 'signup';
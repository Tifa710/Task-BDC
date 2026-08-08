export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'teamleader' | 'teammember';
  leaderId?: number;
}

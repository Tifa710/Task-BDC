import { User } from '../Models/usermodel';

export const users: User[] = [
  // Admins
  {
    id: 1,
    name: 'Ahmed Mohamed',
    email: 'ahmed.admin@example.com',
    password: 'Admin@123',
    role: 'admin',
  },
  {
    id: 2,
    name: 'Sara Ali',
    email: 'sara.admin@example.com',
    password: 'Admin@123',
    role: 'admin',
  },

  // Team Leaders
  {
    id: 3,
    name: 'Omar Hassan',
    email: 'omar.leader@example.com',
    password: 'Leader@123',
    role: 'teamleader',
  },
  {
    id: 4,
    name: 'Mona Adel',
    email: 'mona.leader@example.com',
    password: 'Leader@123',
    role: 'teamleader',
  },
  {
    id: 5,
    name: 'Youssef Tarek',
    email: 'youssef.leader@example.com',
    password: 'Leader@123',
    role: 'teamleader',
  },

  // Team Members - Leader: Omar
  {
    id: 6,
    name: 'Nada Mahmoud',
    email: 'nada.member@gmail.com',
    password: 'Member@123',
    role: 'teammember',
    leaderId: 3,
  },
  {
    id: 7,
    name: 'Khaled Samir',
    email: 'khaled.member@example.com',
    password: 'Member@123',
    role: 'teammember',
    leaderId: 3,
  },

  // Team Members - Leader: Mona
  {
    id: 8,
    name: 'Salma Ahmed',
    email: 'salma.member@example.com',
    password: 'Member@123',
    role: 'teammember',
    leaderId: 4,
  },
  {
    id: 9,
    name: 'Mostafa Ali',
    email: 'mostafa.member@example.com',
    password: 'Member@123',
    role: 'teammember',
    leaderId: 4,
  },

  // Team Members - Leader: Youssef
  {
    id: 10,
    name: 'Fatma Ibrahim',
    email: 'fatma.member@example.com',
    password: 'Member@123',
    role: 'teammember',
    leaderId: 5,
  },
  {
    id: 11,
    name: 'Ali Mahmoud',
    email: 'ali.member@example.com',
    password: 'Member@123',
    role: 'teammember',
    leaderId: 5,
  },
  {
    id: 12,
    name: 'Nour Hany',
    email: 'nour.member@example.com',
    password: 'Member@123',
    role: 'teammember',
    leaderId: 5,
  },
];

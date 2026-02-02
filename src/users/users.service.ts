import { CreateUserDto } from './dtos/create-user.dto';

export class UsersService {
  users: CreateUserDto[] = [
    {
      id: 1,
      name: 'mgmg',
      email: 'mgmg@example.com',
      gender: 'female',
      isMarried: false,
    },
    {
      id: 2,
      name: 'alex',
      email: 'alex@example.com',
      gender: 'male',
      isMarried: true,
    },
    {
      id: 3,
      name: 'sophia',
      email: 'sophia@example.com',
      gender: 'female',
      isMarried: false,
    },
    {
      id: 4,
      name: 'liam',
      email: 'liam@example.com',
      gender: 'male',
      isMarried: false,
    },
    {
      id: 5,
      name: 'emma',
      email: 'emma@example.com',
      gender: 'female',
      isMarried: true,
    },
    {
      id: 6,
      name: 'noah',
      email: 'noah@example.com',
      gender: 'male',
      isMarried: false,
    },
    {
      id: 7,
      name: 'ava',
      email: 'ava@example.com',
      gender: 'female',
      isMarried: false,
    },
    {
      id: 8,
      name: 'oliver',
      email: 'oliver@example.com',
      gender: 'male',
      isMarried: true,
    },
    {
      id: 9,
      name: 'mia',
      email: 'mia@example.com',
      gender: 'female',
      isMarried: false,
    },
    {
      id: 10,
      name: 'ethan',
      email: 'ethan@example.com',
      gender: 'male',
      isMarried: true,
    },
  ];

  getAllUsers() {
    return this.users;
  }

  getUserById(id: number) {
    console.log(id);
    return this.users.find((user) => user.id === id);
  }

  createUser(user: CreateUserDto) {
    const newUsers = this.users.push(user);
    return this.users;
  }
}

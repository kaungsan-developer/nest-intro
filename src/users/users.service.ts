import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
  users: CreateUserDto[] = [
    {
      id: 1,
      name: 'mgmg',
      email: 'mgmg@example.com',
      gender: 'female',
      isMarried: false,
      password: 'password',
    },
    {
      id: 2,
      name: 'alex',
      email: 'alex@example.com',
      gender: 'male',
      isMarried: true,
      password: 'password',
    },
    {
      id: 3,
      name: 'sophia',
      email: 'sophia@example.com',
      gender: 'female',
      isMarried: false,
      password: 'password',
    },
    {
      id: 4,
      name: 'liam',
      email: 'liam@example.com',
      gender: 'male',
      isMarried: false,
      password: 'password',
    },
    {
      id: 5,
      name: 'emma',
      email: 'emma@example.com',
      gender: 'female',
      isMarried: true,
      password: 'password',
    },
    {
      id: 6,
      name: 'noah',
      email: 'noah@example.com',
      gender: 'male',
      isMarried: false,
      password: 'password',
    },
    {
      id: 7,
      name: 'ava',
      email: 'ava@example.com',
      gender: 'female',
      isMarried: false,
      password: 'password',
    },
    {
      id: 8,
      name: 'oliver',
      email: 'oliver@example.com',
      gender: 'male',
      isMarried: true,
      password: 'password',
    },
    {
      id: 9,
      name: 'mia',
      email: 'mia@example.com',
      gender: 'female',
      isMarried: false,
      password: 'password',
    },
    {
      id: 10,
      name: 'ethan',
      email: 'ethan@example.com',
      gender: 'male',
      isMarried: true,
      password: 'password',
    },
  ];

  getAllUsers() {
    if (!this.authService.isAuthenticated) {
      return 'you are not authenticated.';
    }
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

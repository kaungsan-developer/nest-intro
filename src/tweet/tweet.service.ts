import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TweetService {
  constructor(private readonly usersService: UsersService) {}
  tweets = [
    {
      id: 1,
      text: 'Just started learning JavaScript 🚀',
      date: '2026-01-10',
      userId: 1,
    },
    {
      id: 2,
      text: 'Coding late nights hit different.',
      date: '2026-01-11',
      userId: 2,
    },
    {
      id: 3,
      text: 'Debugging is basically being a detective 🕵️‍♂️',
      date: '2026-01-12',
      userId: 1,
    },
    {
      id: 4,
      text: 'Arrays and objects finally make sense!',
      date: '2026-01-13',
      userId: 1,
    },
    {
      id: 5,
      text: 'Console.log is my best friend.',
      date: '2026-01-14',
      userId: 4,
    },
    {
      id: 6,
      text: 'Why does one missing semicolon break everything?',
      date: '2026-01-15',
      userId: 2,
    },
  ];

  getTweets() {
    return this.tweets;
  }

  getTweetsByUserId(userId: number) {
    const user = this.usersService.getUserById(userId);
    const tweets = this.tweets.filter((t) => t.userId === userId);
    const res = tweets.map((t) => ({
      text: t.text,
      date: t.date,
      userName: user?.name,
    }));

    return res;
  }
}

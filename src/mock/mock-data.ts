import {BoostAbility, DailyAward, Friend, LeaderBoard, LeaderBoardUser, Task, User,} from '../interfaces/interfaces.ts';

export const mockUser: User = {
  oneTapIncome: 1,
  oneHourIncome: 1,
  name: 'User1',
  energyPercent: 60,
  isAutoRenew: true,
  balance: 0,
  videoUrls: [
    {
      url: 'https://youtu.be/ZlrH4BAj4bU?si=s1WmD6CIdOJMQSeE',
      image: 'https://i.ytimg.com/vi/ZlrH4BAj4bU/hqdefault.jpg',
    },
    {
      url: 'https://youtu.be/smNt0U4DUco?si=filz91McFhFRbnWz',
      image: 'https://i.ytimg.com/vi/smNt0U4DUco/hqdefault.jpg',
    },
  ],
};

export const mockBoost: BoostAbility[] = [
  {
    title: 'Multitap',
    description: 'Увеличивает количество монет, которое вы можете заработать за 1 тап по экрану',
    imageUrl: '/src/assets/multitap-boost.svg',
    price: 10,
    level: 1,
  },
  {
    title: 'Energy limit',
    description: 'Увеличивает количество энергии',
    imageUrl: '/src/assets/energy-boost.svg',
    price: 10,
    level: 1,
  },
];

// Mock data for LeaderBoardUser
export const leaderBoardUsersMock: LeaderBoardUser[] = [

];

// Mock data for LeaderBoard
export const leaderBoardMock: LeaderBoard = {
  users: leaderBoardUsersMock,
  me: {
    id: 'user3',
    position: 3,
    username: 'Charlie',
    refAmount: 130,
  },
  adImgUrl: '/src/assets/Любовь-к-автомобилям-шапка4 2.png',
};

export const tasksMock: Task[] = [
  {
    id: 'task1',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/2048px-Telegram_2019_Logo.svg.png',
    title: 'Complete Profile Setup',
    award: 10000,
    link: 'https://example.com/profile-setup',
  },
  {
    id: 'task2',
    imgUrl: 'https://example.com/image2.jpg',
    title: 'Refer a Friend',
    award: 200000,
    link: 'https://example.com/refer-friend',
  },
  {
    id: 'task3',
    imgUrl: 'https://example.com/image3.jpg',
    title: 'First Purchase',
    award: 150,
    link: 'https://example.com/first-purchase',
  },
  {
    id: 'task4',
    imgUrl: 'https://example.com/image4.jpg',
    title: 'Leave a Review',
    award: 50,
    link: 'https://example.com/leave-review',
  },
  {
    id: 'task5',
    imgUrl: 'https://example.com/image5.jpg',
    title: 'Share on Social Media',
    award: 75,
    link: 'https://example.com/share-social-media',
  },
  {
    id: 'task6',
    imgUrl: 'https://example.com/image6.jpg',
    title: 'Complete a Survey',
    award: 120,
    link: 'https://example.com/complete-survey',
  },
  {
    id: 'task7',
    imgUrl: 'https://example.com/image7.jpg',
    title: 'Watch a Tutorial',
    award: 80,
    link: 'https://example.com/watch-tutorial',
  },
  {
    id: 'task8',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/2048px-Telegram_2019_Logo.svg.png',
    title: 'Join our Newsletter',
    award: 60000000000,
    link: 'https://example.com/join-newsletter',
  },
  {
    id: 'task9',
    imgUrl: 'https://example.com/image9.jpg',
    title: 'Participate in a Contest',
    award: 9000000,
    link: 'https://example.com/participate-contest',
  },
  {
    id: 'task10',
    imgUrl: 'https://example.com/image10.jpg',
    title: 'Download our App',
    award: 110,
    link: 'https://example.com/download-app',
  },
];

export const friendsMock: Friend[] = [
  {
    id: 'friend1',
    profilePhotoUrl:
      'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png',
    username: 'Alice',
    award: 5000,
  },
  {
    id: 'friend2',
    profilePhotoUrl: 'https://example.com/photo2.jpg',
    username: 'Bob',
    award: 5000,
  },
  {
    id: 'friend3',
    profilePhotoUrl:
      'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png',
    username: 'Charlie',
    award: 20000,
  },
  {
    id: 'friend4',
    profilePhotoUrl: 'https://example.com/photo4.jpg',
    username: 'Dave',
    award: 5000,
  },
  {
    id: 'friend5',
    profilePhotoUrl:
      'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png',
    username: 'Eve',
    award: 20000,
  },
  {
    id: 'friend6',
    profilePhotoUrl: 'https://example.com/photo6.jpg',
    username: 'Frank',
    award: 5000,
  },
  {
    id: 'friend7',
    profilePhotoUrl: 'https://example.com/photo7.jpg',
    username: 'Grace',
    award: 5000,
  },
  {
    id: 'friend8',
    profilePhotoUrl: 'https://example.com/photo8.jpg',
    username: 'Hank',
    award: 5000,
  },
  {
    id: 'friend9',
    profilePhotoUrl: 'https://example.com/photo9.jpg',
    username: 'Ivy',
    award: 20000,
  },
  {
    id: 'friend10',
    profilePhotoUrl: 'https://example.com/photo10.jpg',
    username: 'Jack',
    award: 20000,
  },
];

export const dailyAwardMock: DailyAward = {
  isAvailable: false,
  dailyStreak: 3,
  nextAwardTimestamp: 1719280636792,
  award: {
    title: 'Поздравляем',
    imageUrl: '/src/assets/treasure.png',
    imageText: '10K',
    description: 'Вы получили 10000 монет',
  },
};

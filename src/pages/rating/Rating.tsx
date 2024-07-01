import { FC, useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { leaderBoardMock, LeaderBoardUser } from '../../mock/mock-data.ts';
import adImage from '../../assets/Любовь-к-автомобилям-шапка4 2.png';
import RatingListItem from './components/RatingListItem.tsx';
import { SERVER_URL } from '../../../api/requests.tsx';

interface Props {}

const Rating: FC<Props> = () => {
  const [ratingData, setRatingData] = useState(leaderBoardMock);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${SERVER_URL}/users`);
        const users: LeaderBoardUser[] = await response.json();

        // Додаємо нових користувачів до існуючого масиву ratingData.users
        const updatedUsers = [...ratingData.users];
        users.forEach((user) => {
          const newUser = { ...user }; // створюємо новий об'єкт, щоб не змінювати оригінальний
          newUser.id = user.id;
          newUser.username = user.name || `User${updatedUsers.length + 1}`;

          // Рахуємо суму нагород друзів користувача
          newUser.refAmount = user.friends ? user.friends.reduce((sum, friend) => sum + (friend.award || 0), 0) : 0;

          const existingUser = updatedUsers.find(existingUser => existingUser.id === newUser.id);
          if (!existingUser) {
            updatedUsers.push(newUser);
          }
        });

        // Сортуємо користувачів за значенням refAmount у спадному порядку
        updatedUsers.sort((a, b) => b.refAmount - a.refAmount);

        // Встановлюємо позицію кожного користувача після сортування
        updatedUsers.forEach((user, index) => {
          user.position = index + 1;
        });

        setRatingData(prevState => ({
          ...prevState,
          users: updatedUsers,
        }));
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Box textAlign="center" width="100%">
      <Typography fontWeight={800} fontSize={25} color="common.white">
        Лидерборд
      </Typography>
      <Typography fontWeight={600} fontSize={12} pt={3} color="common.white">
        Статистика по самым активным рефоводам
      </Typography>
      <Box
        mt={1}
        mb={3}
        sx={{
          backgroundImage: `url(${adImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '94px',
          backgroundPosition: 'center',
          borderRadius: '11px',
        }}
      ></Box>
      <Box
        sx={{
          padding: '4px',
          bgcolor: '#182724',
          borderRadius: '8px',
          px: 0,
        }}
      >
        {ratingData.users.map((user) => (
          <RatingListItem key={user.position} rating={user} />
        ))}
      </Box>
    </Box>
  );
};

export default Rating;

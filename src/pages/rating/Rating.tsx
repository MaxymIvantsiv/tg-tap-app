import { FC, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { leaderBoardMock } from '../../mock/mock-data.ts';
import adImage from '../../assets/Любовь-к-автомобилям-шапка4 2.png';
import RatingListItem from './components/RatingListItem.tsx';

interface Props {}

const Rating: FC<Props> = () => {
  const [ratingData] = useState(leaderBoardMock);

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

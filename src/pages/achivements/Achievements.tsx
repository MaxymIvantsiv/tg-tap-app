import {FC, useState} from 'react';
import {Box, Button, Typography} from '@mui/material';
import {containerStyle} from '../../styles/styles.ts';
import {dailyAwardMock} from '../../mock/mock-data.ts';
import CheckIcon from '../../assets/check.svg?react';
import DailyCheckIcon from '../../assets/daily-check.svg?react';
import AchivementsDialog from './components/AchivementsDialog.tsx';
import CountDown from './components/CountDown.tsx';

interface Props {}

const Day = (isAvailable: boolean, index: number) => (
  <Box border="0.5px solid #646464" borderRadius="3px" height={27} width={24} key={index}>
    <DailyCheckIcon fill={isAvailable ? '#7AFB7F' : '#646464'} />
    <Typography fontWeight={600} fontSize={5} color="common.white" bgcolor="#646464" borderRadius="2px" pb="1px">
      День {index + 1}
    </Typography>
  </Box>
);

const Achievements: FC<Props> = () => {
  const days = Array(7).fill(undefined);
  const [dailyAward] = useState(dailyAwardMock);
  const { award, nextAwardTimestamp, isAvailable, dailyStreak } = dailyAward;
  const [selectedBoost, setSelectedBoost] = useState<boolean>(false);

  return (
    <Box textAlign="center">
      <Typography fontWeight={800} fontSize={25} color="common.white">
        Награды
      </Typography>
      <Typography fontWeight={600} fontSize={12} py={1.5} px={3} color="common.white">
        Получайте каждый день награды за вашу активность
      </Typography>
      <Box sx={{ ...containerStyle, py: 1, px: 1.5 }}>
        <Box display="flex">
          <Typography fontWeight={800} fontSize={18} color="common.white" textAlign="start">
            ЕЖЕДНЕВНОЕ ВОЗНАГРАЖДЕНИЕ
          </Typography>
          <Box>
            <Typography fontWeight={600} fontSize={8} color="text.secondary">
              ДОСТУПНО
            </Typography>
            {isAvailable ? (
              <Box display="flex" gap="2px" alignItems="center" justifyContent="center">
                <CheckIcon />
                <Typography fontWeight={600} fontSize={8} color="#7AFB7F" display="inline" pt="1px">
                  СЕЙЧАС
                </Typography>
              </Box>
            ) : (
              <div>
                <CountDown targetTimestamp={nextAwardTimestamp} />
              </div>
            )}
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" pt={2}>
          <Box display="flex" gap="6px">
            {days.map((_, index) => Day(index + 1 <= dailyStreak, index))}
          </Box>
          <Button
            variant="contained"
            size="small"
            sx={{ height: '27px' }}
            disabled={!isAvailable}
            onClick={() => setSelectedBoost(true)}
          >
            <Typography fontWeight={800} fontSize={12} color={'common.white'}>
              КЛЕЙМ
            </Typography>
          </Button>
        </Box>
      </Box>
      {selectedBoost && (
        <AchivementsDialog onClose={() => setSelectedBoost(false)} open={Boolean(selectedBoost)} award={award} />
      )}
    </Box>
  );
};

export default Achievements;

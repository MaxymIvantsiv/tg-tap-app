import React, {useEffect, useState} from 'react';
import {Box, Typography} from '@mui/material';
import CountDownIcon from '../../../assets/countdown.svg?react';

interface CountdownProps {
  targetTimestamp: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetTimestamp }) => {
  const calculateTimeLeft = () => {
    const difference = targetTimestamp - new Date().getTime();
    let timeLeft = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box display="flex" flexDirection="row" alignItems="center" gap="2px">
      <CountDownIcon />
      <Typography fontWeight={600} fontSize={8} color="#fff">
        {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:
        {String(timeLeft.seconds).padStart(2, '0')}
      </Typography>
    </Box>
  );
};

export default Countdown;

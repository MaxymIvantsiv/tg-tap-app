import { FC, useState } from 'react';
import { Avatar, Box, ButtonBase, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import AchivIcon from '../../assets/robot.svg?react';
import DollarIcon from '../../assets/dollar.svg?react';
import { mockUser } from '../../mock/mock-data.ts';
import { User } from '../../interfaces/interfaces.ts';
import './main.scss';
import Battery from './components/Battery.tsx';
import VideoBlock from './components/VideoBlock.tsx';
import Earn from './components/Earn.tsx';

interface Props {}

const Main: FC<Props> = () => {
  const theme = useTheme();
  const isExtraSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const [user] = useState<User>(mockUser);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 100); // Animation duration is 300ms
  };

  return (
    <Box>
      <Stack flexDirection="row" alignItems="center" gap={1.5}>
        <Box sx={{ border: '1.5px #03DABB solid', padding: '5px', width: 'fit-content', borderRadius: '50%' }}>
          <Avatar
            sx={{
              background: 'radial-gradient(#0C1615, #03DABB);',
              borderRadius: '50%',
              width: 56,
              height: 56,
            }}
            alt="Remy Sharp"
            src="/broken-image.jpg"
          >
            <AchivIcon />
          </Avatar>
        </Box>
        <Typography color="common.white" fontWeight={800} fontSize={20}>
          {user.name}
        </Typography>
      </Stack>

      <Stack flexDirection="row" gap={2.5} pt={1} justifyContent="center">
        <Box bgcolor="#182724" color="primary.main" px="5px" py="2px" borderRadius={2} maxWidth={95}>
          <Typography fontSize={10} textAlign="center">
            Прибыль за тап
          </Typography>
          <Stack justifyContent="center" flexDirection="row" gap={0.5}>
            <DollarIcon />
            <Typography display="inline" color="common.white" fontWeight={800} fontSize={10}>
              +{user.oneTapIncome}
            </Typography>
          </Stack>
        </Box>
        <Box bgcolor="#182724" color="primary.main" px="5px" py="2px" borderRadius={2} maxWidth={95}>
          <Typography fontSize={10} textAlign="center">
            Прибыль в час
          </Typography>
          <Stack justifyContent="center" flexDirection="row" gap={0.5}>
            <DollarIcon />
            <Typography display="inline" color="common.white" fontWeight={800} fontSize={10}>
              +{user.oneHourIncome}
            </Typography>
          </Stack>
        </Box>
      </Stack>

      <Stack alignItems="center" pt={2.5}>
        <Box
          sx={{
            border: '1px #03DABB solid',
            padding: '24px',
            width: isExtraSmall ? '124px' : 'calc(40vw + 24px)',
            height: isExtraSmall ? '124px' : 'calc(40vw + 24px)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ButtonBase
            sx={{ borderRadius: '50%' }}
            className={`button ${isAnimating ? 'animate' : ''}`}
            onClick={handleClick}
          >
            <Avatar
              sx={{
                background: 'radial-gradient(#03DABB, #03DA99);',
                borderRadius: '50%',
                width: isExtraSmall ? '120px' : 'calc(40vw)',
                height: isExtraSmall ? '120px' : 'calc(40vw)',
              }}
              alt="Remy Sharp"
              src="/broken-image.jpg"
              className={`button ${isAnimating ? 'animate' : ''}`}
            >
              <AchivIcon width={60} height={60} />
            </Avatar>
          </ButtonBase>
        </Box>
      </Stack>

      <Earn balance={user.balance} />

      <Stack flexDirection="row" gap={0.5}>
        <Box flex={1}>
          <Battery />
        </Box>
        <Box flex={1}>
          <Stack gap={0.5}>
            {user.videoUrls.map((url) => (
              <VideoBlock key={url.url} imageUrl={url.image} youtubeUrl={url.url} />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Main;

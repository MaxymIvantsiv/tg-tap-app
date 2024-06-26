import React, { FC } from 'react';
import { BottomNavigation, BottomNavigationAction, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import nav from '../../assets/navigation1.png';
import TasksIcon from '../../assets/tasks.svg?react';
import InviteIcon from '../../assets/invite.svg?react';
import MeIcon from '../../assets/main-page.svg?react';
import RatingIcon from '../../assets/rating.svg?react';
import AchivIcon from '../../assets/achivs.svg?react';
import { Link, useLocation } from 'react-router-dom';

interface Props {}

const Navigation: FC<Props> = () => {
  const [value, setValue] = React.useState(2);
  const { pathname } = useLocation();
  const theme = useTheme();
  const isExtraSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box>
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundImage: `url('${nav}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100px',
          backgroundPosition: 'bottom',
          height: '100px',
          width: '100vw',
          zIndex: '0',
        }}
      ></Box>
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          // mx: isExtraSmall ? 2 : 0
        }}
      >
        <Box px={2}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(_, newValue) => {
              setValue(newValue);
            }}
            sx={{
              backgroundColor: 'none',
              height: '80px',
              fontSize: '8px',
              fontWeight: 600,
            }}
          >
            <BottomNavigationAction
              label={
                <Typography fontSize={8} fontWeight={600}>
                  Пригласить
                </Typography>
              }
              icon={<InviteIcon fill={pathname === '/invite' ? 'white ' : '#004037'} />}
              sx={{ color: pathname === '/invite' ? 'white !important' : '#004037' }}
              component={Link}
              to="/invite"
            />
            <BottomNavigationAction
              label={
                <Typography fontSize={8} fontWeight={600}>
                  Задания
                </Typography>
              }
              icon={<TasksIcon fill={pathname === '/tasks' ? 'white ' : '#004037'} />}
              component={Link}
              to="/tasks"
              sx={{ color: pathname === '/tasks' ? 'white !important' : '#004037' }}
            />
            <BottomNavigationAction
              icon={<MeIcon />}
              component={Link}
              to="/"
              sx={{
                color: pathname === '/' ? 'white !important' : '#004037',
                fontSize: '64px',
                height: '94px',
                // marginBottom: '100px',
                bottom: 20,
              }}
            />
            <BottomNavigationAction
              label={
                <Typography fontSize={8} fontWeight={600}>
                  Рейтинг
                </Typography>
              }
              icon={<RatingIcon fill={pathname === '/rating' ? 'white ' : '#004037'} />}
              component={Link}
              to="/rating"
              sx={{ color: pathname === '/rating' ? 'white !important' : '#004037' }}
            />
            <BottomNavigationAction
              label={
                <Typography fontSize={8} fontWeight={600}>
                  Награды
                </Typography>
              }
              icon={<AchivIcon fill={pathname === '/achievements' ? 'white ' : '#004037'} />}
              component={Link}
              to="/achievements"
              sx={{ color: pathname === '/achievements' ? 'white !important' : '#004037' }}
            />
          </BottomNavigation>
        </Box>
      </Box>
    </Box>
  );
};

export default Navigation;

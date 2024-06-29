import {FC} from 'react';
import {Box, useMediaQuery, useTheme} from '@mui/material';
import {Outlet} from 'react-router-dom';

interface Props {}

const Layout: FC<Props> = () => {
  const theme = useTheme();
  const isExtraSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    // <Box sx={{
    // backgroundImage: `url(${backgroundImage})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    // backgroundColor: 'background.default',
    // }}>
    <Box
      // sx={{height: 'calc(100vh - 110px)',}}
      overflow="auto"
      pt={isExtraSmall ? 2 : '14vh'}
      px={4}
      pb={isExtraSmall ? 16 : 2}
    >
      <Outlet />
    </Box>
    // </Box>
  );
};

export default Layout;

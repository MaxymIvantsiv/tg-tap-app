import {FC} from 'react';
import {Box, ButtonBase, Stack, Typography} from '@mui/material';
import {NumericFormat} from 'react-number-format';
import rocketImage from '../../../assets/rocket.png';
import Arrow from '../../../assets/dashed-arrow.svg?react';
import {useNavigate} from 'react-router-dom';

interface Props {
  balance: number;
}

const Earn: FC<Props> = ({ balance }) => {
  const navigate = useNavigate();

  const handleBoostClick = () => {
    navigate('/boost');
  };

  return (
    <Stack alignItems="center" pt={1.5} sx={{ position: 'relative' }}>
      <Typography fontWeight={600} fontSize={13} color="primary.main">
        Вы заработали
      </Typography>
      <Typography fontWeight={800} fontSize={30} color="common.white">
        <NumericFormat value={balance} displayType="text" thousandSeparator=","></NumericFormat>
      </Typography>
      <Box sx={{ position: 'absolute', right: -1, top: -50, borderRadius: '50%' }}>
        <ButtonBase
          onClick={handleBoostClick}
          sx={{
            borderRadius: '50%',
            backgroundColor: '#1A2725',
            height: '45px',
            width: '45px',
            border: '3px solid #162E2B',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              borderRadius: '50px',
              padding: '3px',
              background: 'linear-gradient(45deg, #2D4945, transparent)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            },
          }}
        >
          <img src={rocketImage} alt="" style={{ height: '21px', width: '21px' }} />
        </ButtonBase>
        <Typography fontWeight={800} fontSize={12} color={'common.white'}>
          BOOST!
        </Typography>
      </Box>
      <Box sx={{ position: 'absolute', right: 55, top: 10 }}>
        <Arrow />
      </Box>
    </Stack>
  );
};

export default Earn;

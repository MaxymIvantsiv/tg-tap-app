import {FC, useState} from 'react';
import {Box, ButtonBase, Stack, Typography} from '@mui/material';
import {NumericFormat} from 'react-number-format';
import rocketImage from '../../assets/rocket.png';
import {BoostAbility, User} from '../../interfaces/interfaces.ts';
import {mockBoost, mockUser} from '../../mock/mock-data.ts';
import DollarIcon from '../../assets/dollar.svg?react';
import ZipperIcon from '../../assets/zipper.svg?react';
import ArrowIcon from '../../assets/double-arrow.svg?react';
import {useNavigate} from 'react-router-dom';
import {containerStyle} from '../../styles/styles.ts';
import BoostDialog from './components/BoostDialog.tsx';

// Шлях до вашого файлу useMainPageHook.ts
import { useMainPageHook } from '../../hooks/useMainPageHook'; // Переконайтеся, що шлях відповідає реальній структурі вашого проекту

// Використовуємо хук для отримання користувача та обробки кліків


interface Props {}

const Boost: FC<Props> = () => {
  const { user, handleButtonTapClick } = useMainPageHook();
  const [boosts] = useState<BoostAbility[]>(mockBoost);
  const [selectedBoost, setSelectedBoost] = useState<BoostAbility | undefined>(undefined);
  const navigate = useNavigate();

  const handleBoostClick = () => {
    navigate('/');
  };

  return (
    <Stack alignItems="center" pt={1.5} sx={{ position: 'relative' }}>
      <Typography fontWeight={600} fontSize={13} color="primary.main">
        Ваш баланс
      </Typography>
      <Typography fontWeight={800} fontSize={30} color="common.white">
        <NumericFormat value={user.balance} displayType="text" thousandSeparator=","></NumericFormat>
      </Typography>
      <Stack flexDirection="row" gap={2.5} pt={1} justifyContent="center">
        <Box bgcolor="#182724" color="primary.main" px="5px" py="2px" borderRadius={2} maxWidth={95}>
          <Typography fontSize={10} textAlign="center">
            Прибыль за тап
          </Typography>
          <Stack justifyContent="center" flexDirection="row" gap={0.5}>
            {' '}
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
            {' '}
            <DollarIcon />
            <Typography display="inline" color="common.white" fontWeight={800} fontSize={10}>
              +{user.oneHourIncome}
            </Typography>
          </Stack>
        </Box>
      </Stack>
      <Box pt={3}>
        <ButtonBase
          onClick={handleBoostClick}
          sx={{
            borderRadius: '50%',
            backgroundColor: '#1A2725',
            height: '45px',
            width: '45px',
            border: '6px solid #162E2B',
            background: 'linear-gradient(45deg, #03DABB, #03DA99)',
          }}
        >
          <img src={rocketImage} alt="" style={{ height: '21px', width: '21px' }} />
        </ButtonBase>
        <Typography fontWeight={800} fontSize={12} color={'common.white'}>
          BOOST!
        </Typography>
      </Box>
      <Box sx={{ ...containerStyle, display: 'flex', mt: '10px', mb: '45px' }}>
        <ZipperIcon />
        <Box pl={'18px'}>
          <Typography fontWeight={600} fontSize={10} color={'primary.main'}>
            Full energy
          </Typography>
          <Typography fontWeight={600} fontSize={10} color={'text.secondary'}>
            6/6 доступно
          </Typography>
        </Box>
      </Box>
      <Typography fontWeight={800} fontSize={20} color={'common.white'}>
        Прокачай добычу монет!
      </Typography>
      {boosts.map((boost) => (
        <ButtonBase
          sx={{ ...containerStyle, display: 'flex', mt: '10px', alignItems: 'center', height: '65px' }}
          onClick={() => setSelectedBoost(boost)}
        >
          <img src={boost.imageUrl} alt="" style={{ maxWidth: '42px' }} />
          <Box pl={'18px'} flex={1}>
            <Typography fontWeight={600} fontSize={10} color={'primary.main'} textAlign="start">
              {boost.title}
            </Typography>
            <Box display={'flex'} gap={0.5} alignItems="center">
              <Typography fontWeight={800} fontSize={12} color={'common.white'} display="inline">
                {boost.price}
              </Typography>
              <Typography fontWeight={600} fontSize={10} color={'text.secondary'} display="inline">
                • {boost.level} lvl
              </Typography>
            </Box>
          </Box>
          <Box pr={1}>
            <ArrowIcon />
          </Box>
        </ButtonBase>
      ))}
      {selectedBoost && (
        <BoostDialog data={selectedBoost} onClose={() => setSelectedBoost(undefined)} open={Boolean(selectedBoost)} />
      )}
    </Stack>
  );
};

export default Boost;

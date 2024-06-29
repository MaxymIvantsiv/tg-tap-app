import {FC} from 'react';
import {containerStyle} from '../../../styles/styles.ts';
import {Avatar, Box, Typography} from '@mui/material';
import {Friend} from '../../../interfaces/interfaces.ts';
import {NumericFormat} from 'react-number-format';
import DollarIcon from '../../../assets/dollar.svg?react';
import RobotIcon from '../../../assets/robot.svg?react';

interface Props {
  friend: Friend;
}

const FriendListItem: FC<Props> = ({ friend }) => {
  const { award, username, profilePhotoUrl } = friend;

  return (
    <Box
      sx={{
        ...containerStyle,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        px: '8px',
        py: '8px',
        pr: '14px',
        width: 'inherit',
      }}
    >
      <Box sx={{ border: '1.5px #03DABB solid', padding: '2px', width: 'fit-content', borderRadius: '50%' }}>
        <Avatar
          sx={{
            background: 'radial-gradient(#0C1615, #03DABB);',
            borderRadius: '50%',
            width: 21,
            height: 21,
          }}
          alt="Remy Sharp"
          src={profilePhotoUrl}
        >
          <RobotIcon height={8} width={8} />
        </Avatar>
      </Box>
      <Typography fontWeight={600} fontSize={10} color={'common.white'} textAlign="start">
        {username}
      </Typography>
      <Box display={'flex'} gap={0.5} alignItems="center" justifyContent="flex-end" flex={1}>
        <DollarIcon />
        <Typography fontWeight={800} fontSize={10} color={'common.white'} display="inline">
          <NumericFormat value={award} displayType="text" thousandSeparator="," prefix={'+'}></NumericFormat>
        </Typography>
      </Box>
    </Box>
  );
};

export default FriendListItem;

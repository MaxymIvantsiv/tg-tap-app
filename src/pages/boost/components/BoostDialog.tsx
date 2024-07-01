import {Box, Button, Modal, Typography} from '@mui/material';
import {BoostAbility} from '../../../interfaces/interfaces.ts';
import DollarIcon from '../../../assets/dollar.svg?react';
import {containerStyle} from '../../../styles/styles.ts';
import { GetCurrentUser } from '../../hooks/useMainPageHook.ts';

let currentUser = null;

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
  data: BoostAbility;
}

export default function BoostDialog(props: SimpleDialogProps) {
  const { onClose, open, data } = props;
  const { imageUrl, title, price, description, level } = data;

  const handleClose = () => {
    onClose();
  };

const handleUpgrade = () => {
  currentUser = await GetCurrentUser();
  console.log(title);
  if (title === "Multitap") {
  } else if (title === "Energy limit") {

  }
};

  return (
    <Modal onClose={handleClose} open={open}>
      <Box
        display="flex"
        flexDirection="column"
        gap={1}
        alignItems="center"
        sx={{
          ...containerStyle,
          borderRadius: 4,
          position: 'absolute',
          top: '75%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '350px',
          // height: '200px',
          px: 2,
          py: 1,
          pb: 3,
          color: '#fff',
        }}
      >
        <img src={imageUrl} alt="" style={{ maxWidth: '67px' }} />
        <Typography fontWeight={600} fontSize={18}>
          {title}
        </Typography>
        <Typography fontWeight={400} fontSize={12} textAlign="center">
          {description}
        </Typography>
        <Box display={'flex'} gap={1} alignItems="center">
          <DollarIcon />
          <Typography fontWeight={800} fontSize={18} color={'common.white'} display="inline">
            {price}
          </Typography>
          <Typography fontWeight={600} fontSize={18} color={'text.secondary'} display="inline">
            • {level} lvl
          </Typography>
        </Box>
        <Button variant="contained" fullWidth size="large" onClick={handleUpgrade}>
		
          <Typography fontWeight={600} fontSize={12} color={'common.white'} display="inline" textTransform="none">
            Получить
          </Typography>
        </Button>
      </Box>
    </Modal>
  );
}

import { Box, Button, IconButton, InputAdornment, Modal, TextField, Typography } from '@mui/material';
// import {BoostAbility} from "../../../interfaces/interfaces.ts";
import { containerStyle } from '../../../styles/styles.ts';
import CopyIcon from '../../../assets/copy.svg?react';
import SendInvite from '../../../assets/send-invite.svg?react';

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
  // data: BoostAbility;
}

export default function InviteFriendDialog(props: SimpleDialogProps) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('https://t.me/');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <Modal onClose={handleClose} open={open}>
      <Box
        display="flex"
        flexDirection="column"
        gap={1}
        alignItems="flex-start"
        sx={{
          ...containerStyle,
          borderRadius: 4,
          position: 'absolute',
          top: '50%',
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
        <Typography fontWeight={600} fontSize={18} textTransform="uppercase" textAlign="start">
          Пригласить друга
        </Typography>
        <Typography fontWeight={400} fontSize={8} textAlign="start" color="text.secondary">
          ПРИГЛАШАЙТЕ ДРУЗЕЙ И ЗАРАБАТЫВАЙТЕ ВМЕСТЕ
        </Typography>
        <TextField
          size="small"
          value="https://t.me/"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={() => handleCopy()}>
                  <CopyIcon />
                </IconButton>
              </InputAdornment>
            ),
            readOnly: true,
          }}
        />
        <Button variant="contained" fullWidth size="large">
          <SendInvite />
          <Typography
            fontWeight={600}
            fontSize={12}
            pl={1}
            color={'common.white'}
            display="inline"
            textTransform="none"
          >
            ОТПРАВИТЬ ССЫЛКУ
          </Typography>
        </Button>
      </Box>
    </Modal>
  );
}

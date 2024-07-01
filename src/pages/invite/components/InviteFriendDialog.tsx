import { Box, Button, IconButton, InputAdornment, Modal, TextField, Typography } from '@mui/material';
// import { BoostAbility } from "../../../interfaces/interfaces.ts";
import { containerStyle } from '../../../styles/styles.ts';
import CopyIcon from '../../../assets/copy.svg?react';
import SendInvite from '../../../assets/send-invite.svg?react';
import { UserID, OpenLink } from '../../../hooks/useMainPageHook.ts'; // Іменований імпорт

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
  // data: BoostAbility;
}

export const InviteLink = () => {
  let telegramUserId = UserID();
  return 'https://t.me/taptapproject_bot?start=fren=' + telegramUserId;
};

export default function InviteFriendDialog(props: SimpleDialogProps) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(InviteLink()); // Виклик функції
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleSendInvite = () => {
    OpenLink("https://t.me/share/url?url=" + InviteLink()); // Виклик функції
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
          value={InviteLink()} // Виклик функції
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={handleCopy}>
                  <CopyIcon />
                </IconButton>
              </InputAdornment>
            ),
            readOnly: true,
          }}
        />
        <Button variant="contained" fullWidth size="large" onClick={handleSendInvite}>
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

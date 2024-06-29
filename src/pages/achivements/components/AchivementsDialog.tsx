import {Box, Modal, Typography} from '@mui/material';
// import {BoostAbility} from "../../../interfaces/interfaces.ts";
import {containerStyle} from '../../../styles/styles.ts';
import {Award} from '../../../interfaces/interfaces.ts';

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
  award: Award;
}

export default function AchivementsDialog(props: SimpleDialogProps) {
  const { onClose, open, award } = props;
  const { title, description, imageText, imageUrl } = award;

  const handleClose = () => {
    onClose();
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
        <Typography fontWeight={600} fontSize={18} textTransform="uppercase" textAlign="center">
          {title}
        </Typography>
        <Box
          bgcolor="#3FC0A6"
          borderRadius="7px"
          height={59}
          width={59}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <img src={imageUrl} alt="" height={29} width={29} />
          <Typography fontWeight={800} fontSize={18} textTransform="uppercase" textAlign="center">
            {imageText}
          </Typography>
        </Box>

        <Typography fontWeight={600} fontSize={13} textTransform="uppercase" textAlign="center">
          {description}
        </Typography>
      </Box>
    </Modal>
  );
}

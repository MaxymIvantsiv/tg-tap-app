import {FC} from 'react';
import {containerStyle} from '../../../styles/styles.ts';
import {Box, Typography} from '@mui/material';
import giftImg from '../../../assets/gift.png';
import {InviteOffer} from '../../../interfaces/interfaces.ts';
import {NumericFormat} from 'react-number-format';
import DollarIcon from '../../../assets/dollar.svg?react';

interface Props {
  offer: InviteOffer;
}

const OfferListItem: FC<Props> = ({ offer }) => {
  const { title, award } = offer;

  return (
    <Box
      sx={{
        ...containerStyle,
        display: 'flex',
        alignItems: 'center',
        // gap: '10px',
        px: '19px',
        py: '11px',
        width: 'inherit',
      }}
    >
      <img src={giftImg} height={46} />
      <Box pl={'18px'} flex={1}>
        <Typography fontWeight={600} fontSize={12} color={'primary.main'} textAlign="start">
          {title}
        </Typography>
        <Box display={'flex'} gap={0.5} alignItems="center">
          <DollarIcon />
          <Typography fontWeight={800} fontSize={10} color={'common.white'} display="inline">
            <NumericFormat value={award} displayType="text" thousandSeparator=","></NumericFormat>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OfferListItem;

import { FC, useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import OfferListItem from './components/OfferListItem.tsx';
import FriendListItem from './components/FriendListItem.tsx';
import InviteIcon from '../../assets/invite.svg?react';
import CopyIcon from '../../assets/copy.svg?react';
import InviteFriendDialog, { InviteLink } from './components/InviteFriendDialog.tsx';
import { GetCurrentUser } from '../../hooks/useMainPageHook.ts';
import { User, Friend } from '../../interfaces/interfaces.ts'; // Імпорт типів

interface Props {}

let currentUser = null;

const inviteOffers = [
  {
    title: 'Пригласить друга',
    award: 5000,
    description: 'для вас и вашего друга',
  },
  {
    title: 'Пригласить друга с Telegram Premium',
    award: 20000,
    description: 'для вас и вашего друга',
  },
];

const Invite: FC<Props> = () => {
  const [selectedBoost, setSelectedBoost] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null); // Вказуємо правильний тип даних для user

  useEffect(() => {
    const fetchUser = async () => {
      currentUser = await GetCurrentUser();
	  console.log("Load user");
      setUser(currentUser);
    };
    fetchUser();
  }, []);

  const handleCopy = async () => {
    try {
      let copyLink = InviteLink();
      await navigator.clipboard.writeText(copyLink);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <Box textAlign="center">
      <Typography fontWeight={800} fontSize={25} color="common.white">
        Пригласите друзей!
      </Typography>
      <Typography fontWeight={600} fontSize={12} py={1.5} color="common.white">
        Вы и ваш друг получите бонусы
      </Typography>
      <Box display="flex" flexDirection="column" gap="10px">
        {inviteOffers.map((offer) => (
          <OfferListItem key={offer.title} offer={offer} />
        ))}
      </Box>
      <Typography fontWeight={600} fontSize={12} color="common.white" textAlign="start" py={1.5}>
        Список ваших друзей ({currentUser?.friends?.length || 0})
      </Typography>
      <Box display="flex" flexDirection="column" gap="5px" maxHeight="250px" sx={{ overflowY: 'auto' }}>
        {currentUser?.friends?.map((friend: Friend) => ( // Вказуємо правильний тип даних для friend
          <FriendListItem key={friend.id} friend={friend} />
        ))}
      </Box>
      <Box display="flex" gap={1}>
        <Button variant="contained" fullWidth size="large" onClick={() => setSelectedBoost(true)}>
          <Typography
            fontWeight={600}
            fontSize={12}
            color={'common.white'}
            display="inline"
            textTransform="none"
            pr={1}
          >
            Пригласить друга
          </Typography>
          <InviteIcon fill={'#fff'} />
        </Button>
        <Button
          variant="contained"
          size="large"
          sx={{
            p: 1,
            minHeight: 0,
            minWidth: 0,
          }}
          onClick={handleCopy}
        >
          <CopyIcon fill={'#fff'} />
        </Button>
      </Box>
      {selectedBoost && <InviteFriendDialog onClose={() => setSelectedBoost(false)} open={Boolean(selectedBoost)} />}
    </Box>
  );
};

export default Invite;

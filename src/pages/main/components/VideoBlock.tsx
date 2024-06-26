import { FC } from 'react';
import { Box, ButtonBase, Link, useMediaQuery, useTheme } from '@mui/material';
import './videoBlock.scss';

interface Props {
  imageUrl: string;
  youtubeUrl: string;
}

const VideoBlock: FC<Props> = ({ imageUrl, youtubeUrl }) => {
  const theme = useTheme();
  const isExtraSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ButtonBase component={Link} href={youtubeUrl} target="_blank">
      <Box bgcolor="#182724" color="primary.main" p={'4px'} borderRadius={2}>
        <Box
          borderRadius={1}
          height={isExtraSmall ? '65px' : '85px'}
          overflow="hidden"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <img
            src={imageUrl}
            alt="Thumbnail"
            style={{
              width: '100%',
              objectFit: 'cover',
              objectPosition: 'center center',
            }}
          />
        </Box>
      </Box>
    </ButtonBase>
  );
};

export default VideoBlock;

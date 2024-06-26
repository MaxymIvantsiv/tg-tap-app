import { FC } from 'react';
import { Task } from '../../../interfaces/interfaces.ts';
import { containerStyle } from '../../../styles/styles.ts';
import { Avatar, Box, ButtonBase, Link, Typography } from '@mui/material';
import ArrowIcon from '../../../assets/double-arrow.svg?react';
import { NumericFormat } from 'react-number-format';
import DollarIcon from '../../../assets/dollar.svg?react';

interface Props {
  task: Task;
}

const TaskListItem: FC<Props> = ({ task }) => {
  const { imgUrl, title, link, award } = task;

  return (
    <ButtonBase
      sx={{ ...containerStyle, display: 'flex', mt: '10px', pl: 1, alignItems: 'center', height: '65px' }}
      component={Link}
      href={link}
      target="_blank"
    >
      <Avatar src={imgUrl}></Avatar>
      <Box pl={'18px'} flex={1}>
        <Typography fontWeight={600} fontSize={10} color={'common.white'} textAlign="start">
          {title}
        </Typography>
        <Box display={'flex'} gap={0.5} alignItems="center">
          <DollarIcon fill="#3FC0A6" />
          <Typography fontWeight={800} fontSize={12} color={'common.white'} display="inline">
            <NumericFormat value={award} displayType="text" thousandSeparator=","></NumericFormat>
          </Typography>
        </Box>
      </Box>
      <Box pr={1}>
        <ArrowIcon />
      </Box>
    </ButtonBase>
  );
};

export default TaskListItem;

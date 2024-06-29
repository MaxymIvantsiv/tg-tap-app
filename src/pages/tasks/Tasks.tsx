import React, {FC, useState} from 'react';
import {Box, Tab, Tabs, Typography} from '@mui/material';
import {tasksMock} from '../../mock/mock-data.ts';
import TaskListItem from './components/TaskListItem.tsx';

interface Props {}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box pb={23}>{children}</Box>}
    </div>
  );
}

const Tasks: FC<Props> = () => {
  const [value, setValue] = React.useState(0);
  const [tasks] = useState(tasksMock);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box textAlign="center" width="100%" mb={8}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Задания" />
          <Tab label="Прокачка" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box sx={{ p: 3 }}>
          <Typography fontWeight={800} fontSize={25} color="common.white">
            Задания
          </Typography>
          <Typography fontWeight={600} fontSize={12} pt={3} color="common.white">
            Получайте каждый день награды за вашу активность
          </Typography>
        </Box>
        <Box>
          {tasks.map((task) => (
            <TaskListItem key={task.id} task={task} />
          ))}
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography fontWeight={800} fontSize={25} color="common.white">
          Прокачка
        </Typography>
        <Typography fontWeight={600} fontSize={12} pt={3} color="common.white">
          Повышайте свою прибыль, прокачивая карточки
        </Typography>
      </CustomTabPanel>
    </Box>
  );
};

export default Tasks;

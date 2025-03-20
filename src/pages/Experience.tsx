import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Experience() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="w-full">

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="UNL" {...a11yProps(0)} />
          <Tab label="Leidos" {...a11yProps(1)} />
          <Tab label="Mutual of Omaha" {...a11yProps(2)} />
          <Tab label="CompanyCam" {...a11yProps(3)} />
          <Tab label="Kiewit" {...a11yProps(4)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        UNL
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        Leidos
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        Mutual of Omaha
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
        CompanyCam
      </CustomTabPanel>

      <CustomTabPanel value={value} index={4}>
        Kiewit
      </CustomTabPanel>

    </div>
  );
}
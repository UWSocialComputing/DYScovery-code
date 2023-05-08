import * as React from "react";
import Title from "../../components/Title/Title";
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import InfoIcon from '@mui/icons-material/Info';
import TuneIcon from '@mui/icons-material/Tune';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ChatIcon from '@mui/icons-material/Chat';

function DetailPage() {
  var value = "hello";

  const handleChange = (event) => {
    console.log("hello");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-8">
      <Title />
      
      <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
        <Tab icon={<InfoIcon />} label="ABOUT" />
        <Tab icon={<TuneIcon />} label="PREFERENCES" />
        <Tab icon={<LocationOnIcon />} label="NEIGHBORHOOD" />
        <Tab icon={<ReviewsIcon />} label="REVIEWS" />
        <Tab icon={<ChatIcon />} label="CHAT" />
      </Tabs>

      <div>Details Page in progress!!!</div>
    </div>
  );
}

export default DetailPage;

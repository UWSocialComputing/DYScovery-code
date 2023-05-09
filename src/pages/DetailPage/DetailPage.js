import * as React from "react";
import Title from "../../components/Title/Title";
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import InfoIcon from '@mui/icons-material/Info';
import TuneIcon from '@mui/icons-material/Tune';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ChatIcon from '@mui/icons-material/Chat';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function DetailPage() {
  var value = "hello";

  const handleChange = (event) => {
    console.log("hello");
  }

  return (
    <div className="min-h-screen flex-col items-center justify-between p-8">
      <Title />

      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
        <Tab icon={<InfoIcon />} label="ABOUT" />
        <Tab icon={<TuneIcon />} label="PREFERENCES" />
        <Tab icon={<LocationOnIcon />} label="NEIGHBORHOOD" />
        <Tab icon={<ReviewsIcon />} label="REVIEWS" />
        <Tab icon={<ChatIcon />} label="CHAT" />
      </Tabs>
      </div>

      <Card variant="outlined">
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            About
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Insert text here.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card variant="outlined">
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Preferences
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Insert text here.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card variant="outlined">
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Neighborhood
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Insert text here.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card variant="outlined">
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Reviews
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Insert text here.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card variant="outlined">
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Social Media
          </Typography>
            <InstagramIcon />
            <TwitterIcon />
        </CardContent>
      </CardActionArea>
    </Card>

    </div>
  );
}

export default DetailPage;

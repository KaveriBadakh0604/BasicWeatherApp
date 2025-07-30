import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}){
    const init_url = "https://images.pexels.com/photos/30729280/pexels-photo-30729280.jpeg";
    return (
        <div className="infoBox">
            <h1>Weather Info</h1>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={init_url}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <div>Temperature: {info.temp}&deg;C</div>
                    <div>Humidity: {info.humidity}</div>
                    <div>Minimum Temperature: {info.tempMin}&deg;C</div>
                    <div>Maximum Temperature: {info.tempMax}&deg;C</div>
                    <br />
                    <div>The weather can be described as {info.weather} and feels like: {info.feelslike}&deg;C</div>
                </Typography>
            </CardContent>
            </Card>
        </div>
    )
}
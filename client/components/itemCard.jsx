import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './styles.css'
import { useNavigate } from "react-router-dom";


export default function ItemCard(props) {
  const navigate = useNavigate();

  const messageRedirect = () => {
    navigate('../details')
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 200 }}
      image={props.picture} 
      title="item image"
    />
    <CardContent>
    <Typography gutterBottom variant="h5" component="div">
        {props.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {props.description}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        ${props.price}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={() => messageRedirect()}>Messages</Button>
    </CardActions>
  </Card>
  );
}

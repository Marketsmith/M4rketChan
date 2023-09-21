import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './styles.css'
import { useNavigate } from "react-router-dom";


import { useDispatch, useSelector } from "react-redux";
import { DETAILS } from "../constants/actionTypes"; 


export default function ItemCard(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const details = useSelector((state) => state.user.details);

  const itemDetails = {
    name: props.name,
    picture: props.picture,
    description: props.description,
    price: props.price,
    city : props.city,
    date : props.date
  };


  const messageRedirect = () => {
    dispatch({ type: DETAILS, payload: itemDetails });
    navigate('../details');

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
      <Button size="small" onClick={messageRedirect}>Messages</Button>
    </CardActions>
  </Card>
  );
}

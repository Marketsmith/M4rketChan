import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


//styles
import './styles.css'
import { useContext } from "react";
import {itemCartContext} from './searchbar'
// Navigate
import { useNavigate } from "react-router-dom";


export default function ItemCard() {

  // use context of items DATA 
  const itemCart = useContext(itemCartContext);

  // Navigate
  const navigate = useNavigate();

  // itemsCart => chat : [] => useEffect hook => GET request 

  const messageRedirect = () => {
    navigate('../details')
  }


  return (
    itemCart.map((item, index) => (
      <Card key={index} sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 200 }}
          image={item.picture} 
          title="item image"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${item.price}
          </Typography>
        </CardContent>
        <CardActions>

          <Button size="small" onClick={() => messageRedirect()}>Messages</Button>
        </CardActions>
      </Card>
      
    ))
  );
}

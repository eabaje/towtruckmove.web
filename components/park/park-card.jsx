import React from 'react'
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
const useStyles = makeStyles({
    root: {
      maxWidth: 345
    }
  });
function ParkCard({data}) {
  return (
    <>
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {data.ParkName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          CardActions are just a flexbox component that wraps the children in
          8px of padding and 8px horizontal padding between children.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button size="small" color="primary">
          Primary
        </Button>
        <Button size="small" color="secondary">
          Secondary
        </Button>
      </CardActions>
    </Card>
    
    
    </>
  )
}

export default ParkCard
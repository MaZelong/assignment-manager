/**
 * Created by devin on 1/5/16.
 */
import React from 'react';
import Avatar from 'material-ui/lib/avatar';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

const CardExampleWithAvatar = () => (
  <Card>
    <CardMedia
      overlay={<CardTitle title="Assignment 1" subtitle="PHMX 601"/>}
      style={{
        maxHeight: '30vw',
        overflow: 'hidden'
      }}
    >
      <img src="http://www.planwallpaper.com/static/images/FreeGreatPicture.com-18429-hd-color-background-wallpaper.jpg"


      />
    </CardMedia>
    <CardTitle title="Objective" />
    <CardText>
      In this individual assignment, you are expected to use all the relevant information to create a basic modeling
      report that covers summary statistics, visual exploratory analysis, data checkout,
      noncompartmental analysis, and a naïve pooled model.
    </CardText>
    <CardActions>
      <FlatButton label="Get Assignment Material"/>
      <FlatButton label="Get Assignment Data"/>
    </CardActions>
  </Card>
);

export default CardExampleWithAvatar;
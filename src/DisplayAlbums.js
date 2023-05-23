import React, { useState } from 'react';
import Search from './Search';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: '20px',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
});

function DisplayAlbums({ vinylAlbums }) {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredAlbums = vinylAlbums.filter((album) =>
    album.name.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => a.name.localeCompare(b.name)); // sort the albums by name in ascending order

  return (
    <div className={classes.root}>
      <Search onSearch={handleSearch} />
      <Grid container spacing={3}>
        {filteredAlbums.map((album) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={album.name}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {album.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {album.artist} 
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {album.genre} ({album.year})
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default DisplayAlbums;
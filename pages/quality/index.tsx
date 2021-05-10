import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Card, CardContent, Container, Typography, Grid, Button, useMediaQuery } from '@material-ui/core';
import Rohs from './rohs';
import TPD from './tpd';

interface JoinProps {}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
  },
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
}));

const Join = ({}: JoinProps) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const classes = useStyles();

  return (
    <div>
      <Container>
        <Typography variant="h2" component="h2">
          品质与检测
        </Typography>

        <Typography variant="h5" component="h5">
          安全理念
        </Typography>

        <div>
          <Card>
            <CardContent>
              <section className={classes.pagePaddingTop}>
                <Rohs></Rohs>
              </section>
            </CardContent>
          </Card>

          <section className={classes.pagePaddingTop}>
            <Card>
              <CardContent>
                <TPD></TPD>
              </CardContent>
            </Card>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default Join;

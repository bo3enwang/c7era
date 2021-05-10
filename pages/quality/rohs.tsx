import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Card, Container, Typography, Grid, Button, useMediaQuery } from '@material-ui/core';
import SectionHeader from '../../components/SectionHeader';
import Image from '../../components/Image';

interface RohsProps {}

const useStyles = makeStyles((theme) => ({
  root: {},
  image: {
    boxShadow: '25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)',
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
  },
}));

const Rohs = ({}: RohsProps) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container justify="space-between" spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
      <Grid item container alignItems="center" xs={12} md={6} data-aos={'fade-up'}>
        <SectionHeader
          title={
            <span>
              我们坚持使用安全的材质
              <br />
              <Typography component="span" variant="h5" color="primary">
                食品级油杯
              </Typography>
            </span>
          }
          subtitle="油杯食品级PCTG升级材料，不含双酚A，防漏油，防裂效果，安全性高"
          align="left"
          disableGutter
          titleVariant="h3"
        />
      </Grid>
      <Grid item container justify="flex-start" alignItems="center" xs={12} md={6} data-aos={'fade-up'}>
        <Image
          src="/img/pods.jpg"
          alt="TheFront Company"
          // className={classes.image}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        />
      </Grid>
    </Grid>
  );
};

export default Rohs;

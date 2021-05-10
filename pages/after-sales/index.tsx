import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Card, Container, Typography, Grid, Button, useMediaQuery, Paper } from '@material-ui/core';
import Image from '../../components/Image';
import SectionHeader from '../../components/SectionHeader';

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
  title: {
    textAlign: 'center',
    padding: '50px',
    background: '#fff',
  },
  textGreen: {
    color: '#81dbdf',
    fontSize: 21,
    textAlign: 'center',
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
      <div className={classes.title}>
        <Typography variant="h2" component="h2" gutterBottom>
          售后政策
        </Typography>
      </div>
      <Container>
        <Typography variant="body1" gutterBottom className={classes.textGreen}></Typography>
        <Typography variant="body1" gutterBottom></Typography>

        <div>
          <Grid container justify="space-between" spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
            <Grid item container alignItems="center" xs={12} md={8} data-aos={'fade-up'}>
              <SectionHeader
                title={
                  <span>
                    C7承诺 「以换代修」
                    <br />
                    <Typography component="span" variant="inherit" color="primary">

                      
                    </Typography>
                  </span>
                }
                subtitle="消费者通过任意渠道购得C7正品商品出现质量问题，皆可通过C7官方公众号申请质保。"
                // ctaGroup={[
                //   <Button variant="contained" color="primary" size="large">
                //     Start now
                //   </Button>,
                //   <Button variant="outlined" color="primary" size="large">
                //     Learn more
                //   </Button>,
                // ]}
                align="left"
                disableGutter
                titleVariant="h3"
              />
            </Grid>
            <Grid item container justify="flex-start" alignItems="center" xs={12} md={4} data-aos={'fade-up'}>
              <Image
                src="/img/after-sales-gzh.jpg"
                alt="TheFront Company"
                // className={classes.image}
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Join;

import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Typography, Grid, Button, useMediaQuery } from '@material-ui/core';
import SectionHeader from '../../components/SectionHeader';
import Image from '../../components/Image';

interface TPDProps {}

const TPD = ({}: TPDProps) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container justify="space-between" spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
      <Grid item container justify="flex-start" alignItems="center" xs={12} md={6} data-aos={'fade-up'}>
        <Image
          src="/img/oil.jpg"
          alt="TheFront Company"
          // className={classes.image}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        />
      </Grid>
      <Grid item container alignItems="center" xs={12} md={6} data-aos={'fade-up'}>
        <SectionHeader
          title={
            <span>
              品质烟油
              <br />
              <Typography component="span" variant="h5" color="primary">
                所有烟油通过安全品质检测
              </Typography>
            </span>
          }
          subtitle={
            <span>
              我们的烟油经过八大重金属，理化指标（折光指数；二甘醇；甲醇；烟碱（尼古丁）；双乙酰；无机砷含量）等检测。
              <div>坚持使用安全放心的烟油</div>
            </span>
          }
          ctaGroup={[
            <Button variant="contained" color="primary" size="large">
              下载检测报告
            </Button>,
          ]}
          align="right"
          disableGutter
          titleVariant="h3"
        />
      </Grid>
    </Grid>
  );
};

export default TPD;

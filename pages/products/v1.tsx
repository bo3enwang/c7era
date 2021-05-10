import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../../components/Image';
import SectionHeader from '../../components/SectionHeader';
import Detail from '../../components/Detail';

const useStyles = makeStyles(() => ({
  main: {
    marginTop: 20,
  },
  media: {
    height: 230,
  },
}));

interface ProductsProps {}

const Products = ({}: ProductsProps) => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Container>
        <Image
          src="/img/v1/p1.jpg"
          alt=""
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        />

        {/* <Grid container justify="space-between" spacing={4}>
          <Grid item container alignItems="center" xs={12} md={6} data-aos={'fade-up'}>
            <Typography variant="h4" align={'center'} className={'section-header__title'} color="textPrimary">
              磁吸技术
            </Typography>
          </Grid>
          <Grid item container justify="flex-start" alignItems="center" xs={12} md={6} data-aos={'fade-up'}>
            <Typography variant="h5" align={'center'} className={'section-header__title'} color="textPrimary">
              即插即用 灵敏感应 轻松换弹；
            </Typography>
          </Grid>
        </Grid> */}

        <div style={{ marginBottom: 36 }} data-aos={'fade-up'}>
          <SectionHeader
            title={
              <span>
                ​磁吸技术
                <br />
                <Typography component="span" variant="inherit" color="primary"></Typography>
              </span>
            }
            subtitle="即插即用 灵敏感应 轻松换弹；"
            align="left"
            disableGutter
            titleVariant="h3"
          />
        </div>
        <div style={{ marginBottom: 36 }} data-aos={'fade-up'}>
          <SectionHeader
            title={
              <span>
                呼吸灯
                <br />
                <Typography component="span" variant="inherit" color="primary"></Typography>
              </span>
            }
            subtitle="烟弹放入呼吸灯闪亮；抽吸呼吸灯既亮，酷炫机身"
            align="right"
            disableGutter
            titleVariant="h3"
          />
        </div>

        <div>
          <Detail></Detail>
        </div>
      </Container>
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xlinkHref="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(86,188,249,0.7" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(86,188,249,0.5)" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(86,188,249,0.3)" />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#56bcf9" />
        </g>
      </svg>
    </div>
  );
};

export default Products;

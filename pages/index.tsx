import { Container, Grid, Card, CardContent, CardMedia, Chip, Avatar } from '@material-ui/core';
import { useRouter } from 'next/router';
import Carousel from 'react-material-ui-carousel';

function Banner({ src }: { src: any }) {
  return (
    <Card raised className="index__banner">
      <Grid container spacing={0} className="BannerGrid">
        <img src={src} className="index__banner__image"></img>
      </Grid>
    </Card>
  );
}

const Product = () => {
  const router = useRouter();
  return (
    <Card className="product">
      <CardContent>
        <CardMedia
          className="product__cover"
          component="img"
          alt="Contemplative Reptile"
          image="/img/vdevice.png"
          title="C7 一代"
          style={{ width: 150, margin: 'auto' }}
        />
      </CardContent>
      <CardContent style={{ textAlign: 'center' }}>
        <Chip
          avatar={<Avatar>V1</Avatar>}
          label="C7一代 点击探索"
          color="primary"
          clickable
          onClick={() => {
            router.push('/products/v1');
          }}
        />
      </CardContent>
    </Card>
  );
};

const IndexPage = () => {
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <Carousel>
          <Banner src={'/img/banner1.jpg'}></Banner>
          <Banner src={'/img/banner2.jpg'}></Banner>
          <Banner src={'/img/banner3.jpg'}></Banner>
        </Carousel>
      </div>

      <div
        data-aos="fade-up"
        // data-aos-offset="200"
        // data-aos-delay="50"
        // data-aos-duration="500"
        // data-aos-easing="ease-in-out"
        // data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <Container>
          <Grid container justify="center">
            <Grid>
              <h1>口碑产品</h1>
            </Grid>
          </Grid>
          <Grid container justify="space-around" spacing={6}>
            <Grid item xs={3}>
              <Product></Product>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default IndexPage;

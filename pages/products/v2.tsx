import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../../components/Image';

const useStyles = makeStyles(() => ({
  main: {
    marginTop: 100,
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
          src="/img/new.jpg"
          alt=""
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        />
      </Container>
    </div>
  );
};

export default Products;

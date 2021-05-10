import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Pod from '../../components/Pod';

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
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Pod
              title="夏日西瓜"
              description="冰凉夏日的一股清凉"
              img="/img/pods/watermelon.png"
              reductivity={4}
              cold={3}
              sweet={4}
              hit={2}
            ></Pod>
          </Grid>
          <Grid item xs={6}>
            <Pod
              title="冰爽可乐"
              description="可乐味扑面而来，让你一口劲爽"
              img="/img/pods/cola.png"
              reductivity={4}
              cold={4}
              sweet={3}
              hit={4}
            ></Pod>
          </Grid>
          <Grid item xs={6}>
            <Pod
              title="甜心草莓"
              description="浓浓的草莓香味，难以忘却"
              img="/img/pods/strawberry.png"
              reductivity={3}
              cold={2}
              sweet={5}
              hit={2}
            ></Pod>
          </Grid>
          <Grid item xs={6}>
            <Pod
              title="绿豆冰棍"
              description="夏日冰棍的感觉，童年的记忆"
              img="/img/pods/greenbean.png"
              reductivity={4}
              cold={4}
              sweet={2}
              hit={3}
            ></Pod>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Products;

import React from 'react';
import { Card, CardHeader, CardContent, Container, Typography, Grid } from '@material-ui/core';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import StoreIcon from '@material-ui/icons/Store';
interface JoinProps {}

const Join = ({}: JoinProps) => {
  return (
    <div>
      <Container>
        <div data-aos="fade-left">
          <Typography variant="h3" align="center" gutterBottom>
            <StoreIcon fontSize="inherit" color="primary" /> 直营店模式
          </Typography>
        </div>

        <div style={{ marginBottom: 60 }}>
          <Grid container spacing={5}>
            <Grid item sm={4}>
              <Card data-aos="fade-up-right">
                <CardHeader
                  title="旗舰店"
                  subheader="获取C7ERA独家专营产品"
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                />
                <CardContent>
                  <div>
                    <Typography variant="subtitle1" align="center">
                      启动资金：≥15万元
                    </Typography>
                    <Typography variant="subtitle1" align="center">
                      地址选择：日均人流≥3000
                    </Typography>
                    <Typography variant="subtitle1" align="center">
                      人员配置：2-3名全职员工
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={4}>
              <Card data-aos="fade-up-right">
                <CardHeader
                  title="标准店"
                  subheader="获取C7ERA独家专营产品"
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                />
                <CardContent>
                  <div>
                    <Typography variant="subtitle1" align="center">
                      启动资金：≥10万元
                    </Typography>
                    <Typography variant="subtitle1" align="center">
                      地址选择：日均人流≥1000
                    </Typography>
                    <Typography variant="subtitle1" align="center">
                      人员配置：2-3名全职员工
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={4}>
              <Card data-aos="fade-up-right">
                <CardHeader
                  title="mini店"
                  subheader="获取C7ERA独家专营产品"
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                />
                <CardContent>
                  <div>
                    <Typography variant="subtitle1" align="center">
                      启动资金：≥5万元
                    </Typography>
                    <Typography variant="subtitle1" align="center">
                      地址选择：日均人流≥500
                    </Typography>
                    <Typography variant="subtitle1" align="center">
                      人员配置：2-3名全职员工
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>

        <Typography variant="h3" align="center" gutterBottom data-aos="fade-right">
          <BeachAccessIcon fontSize="inherit" color="primary" />
          低库存盈利模式
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" gutterBottom data-aos="fade-right">
          定义： ShopinShop (RSIS)旨在打造场景融入式的跨界销售，即在用户原有消费场景中，最大化利用提供服
          务期间的门店沉淀时间，高效转化用户的全新业务模式。
        </Typography>

        <Grid container spacing={5}>
          <Grid item sm={12}>
            <Card data-aos="flip-left">
              <CardHeader />
              <CardContent>
                <div>
                  <Typography variant="subtitle1">
                    潜在场景：高频的生活服务类场景：网吧、酒吧、KTV、茶馆、咖啡厅、餐饮、美发店、美甲、刺青、台球房、汽车保养等
                    2.连锁型的生活服务类场景更佳，可以批量加盟改造。对于门店的价值：提升坪效，获取额外收入，提升客流量。
                  </Typography>

                  <Typography variant="subtitle1" align="center">
                    启动资金：5000元
                  </Typography>
                  <Typography variant="subtitle1" align="center">
                    月收益：5000+
                  </Typography>
                  <Typography variant="subtitle1" align="center">
                    人员配置：1人
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Join;

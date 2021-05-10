import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      // backgroundColor: theme.palette.background.paper,
    },
    chip: {
      margin: theme.spacing(0.5),
    },
    section1: {
      margin: theme.spacing(3, 2),
    },
    section2: {
      margin: theme.spacing(2),
    },
    section3: {
      margin: theme.spacing(3, 1, 1),
    },
  })
);

const Detail = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h6">
              产品名称
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6">
              Cool Seven C7ERA 雾化器
            </Typography>
          </Grid>
        </Grid>
        {/* <Typography color="textSecondary" variant="body2">
          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall.
        </Typography> */}
      </div>
      <Divider variant="middle" />
      <div className={classes.section1}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h6">
              包装清单
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6" align="right">
              雾化杆包装
            </Typography>
            <Typography gutterBottom variant="h6" align="right">
              雾化杆 x 1
            </Typography>
            <Typography gutterBottom variant="h6" align="right">
              雾化弹 x 2
            </Typography>
            <Typography gutterBottom variant="h6" align="right">
              Type-C数据线 x 1
            </Typography>
          </Grid>
        </Grid>
        {/* <Typography color="textSecondary" variant="body2">
          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall.
        </Typography> */}
      </div>
      <Divider variant="middle" />
      <div className={classes.section1}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h6">
              雾化杆参数
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6" align="right">
              颜色：暗夜黑，魔力红，动感橙，梦幻蓝，炫彩紫（渐变）
            </Typography>
            <Typography gutterBottom variant="h6" align="right">
              电池容量：340mAh
            </Typography>
            <Typography gutterBottom variant="h6" align="right">
              充电时间：理论时长50分钟左右 满电状态可抽一颗雾化弹
            </Typography>
            <Typography gutterBottom variant="h6" align="right">
              外壳材质：航空铝
            </Typography>
          </Grid>
        </Grid>
        {/* <Typography color="textSecondary" variant="body2">
          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall.
        </Typography> */}
      </div>
      <Divider variant="middle" />
      <div className={classes.section1}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h6">
              雾化弹参数
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6" align="right">
              雾化仓容量：2.0ml
            </Typography>
            <Typography gutterBottom variant="h6" align="right">
              油仓材质：食品级PCTG
            </Typography>
            <Typography gutterBottom variant="h6" align="right">
              主要成分：食品级甘油，尼古丁盐，丙二醇，食用级香料
            </Typography>
          </Grid>
        </Grid>
        {/* <Typography color="textSecondary" variant="body2">
          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall.
        </Typography> */}
      </div>
    </div>
  );
};

export default Detail;

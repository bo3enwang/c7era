import * as React from 'react';
import { Theme, createStyles, makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Rating, { IconContainerProps } from '@material-ui/lab/Rating';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import DetailsIcon from '@material-ui/icons/Details';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import FavoriteIcon from '@material-ui/icons/Favorite';

const BackRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

const ColdRating = withStyles({
  iconFilled: {
    color: '#86d6d8',
  },
  iconHover: {
    color: '#b9e8ea',
  },
})(Rating);

const HitdRating = withStyles({
  iconFilled: {
    color: '#193a47',
  },
  iconHover: {
    color: '#2f6b82',
  },
})(Rating);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      flex: '1 0 auto',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 200,
      height: 'auto',
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  })
);

type RatingRange = 1 | 2 | 3 | 4 | 5;

type PodProps = {
  title: string;
  reductivity: RatingRange;
  cold: RatingRange;
  sweet: RatingRange;
  hit: RatingRange;
  description: string;
  img: string;
};

const Pod = ({ title, reductivity, cold, sweet, hit, img }: PodProps) => {
  const classes = useStyles();
  return (
    <div data-aos="zoom-out-up">
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              夏日里西瓜的冰凉滋味
            </Typography>
            <div>
              <Typography component="legend">还原度</Typography>
              <BackRating
                defaultValue={reductivity}
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
                readOnly
              />
            </div>
            <div>
              <Typography component="legend">冰凉度</Typography>
              <ColdRating defaultValue={cold} precision={0.5} icon={<AcUnitIcon fontSize="inherit" />} readOnly />
            </div>
            <div>
              <Typography component="legend">甜度</Typography>
              <Rating defaultValue={sweet} precision={0.5} icon={<GroupWorkIcon fontSize="inherit" />} readOnly />
            </div>
            <div>
              <Typography component="legend">击喉感</Typography>
              <HitdRating defaultValue={hit} precision={0.5} icon={<DetailsIcon fontSize="inherit" />} readOnly />
            </div>
          </CardContent>
        </div>
        <CardMedia className={classes.cover} image={img} title={title} />
      </Card>
    </div>
  );
};

export default Pod;

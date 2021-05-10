import { LazyLoadImage } from 'react-lazy-load-image-component';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
  },
  dBlock: {
    display: 'block',
  },
}));

const Image = (props: any) => {
  const { src, srcSet, alt, lazy, lazyProps, className, ...rest } = props;

  const classes = useStyles();
  if (lazy) {
    return (
      <LazyLoadImage
        className={clsx('image', classes.root, classes.dBlock, className)}
        alt={alt}
        src={src}
        srcSet={srcSet}
        effect="opacity"
        {...lazyProps}
        {...rest}
      />
    );
  }

  return <img className={clsx('image', classes.root, className)} alt={alt} src={src} srcSet={srcSet} {...rest} />;
};

export default Image;

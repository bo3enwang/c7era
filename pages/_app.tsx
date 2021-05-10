import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import {
  Typography,
  CssBaseline,
  Link as MuiLink,
  Button,
  Menu,
  MenuItem,
  Container,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import Link from '../components/Link';
import { useRouter } from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

import '../styles/app.scss';
import '../styles/index.scss';
import '../styles/animate.min.css';

function Copyright() {
  return (
    <div>
      <Typography variant="body2" align="center">
        {'Copyright © '}
        <MuiLink color="inherit" href="https://www.c7era.com/">
          中山碳纪元科技有限公司
        </MuiLink>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      {/* <Typography variant="body2" align="center">
        <a style={{ color: '#93bce0' }} href="https://beian.miit.gov.cn" target="_blank">
          黔ICP备20006892号-1
        </a>
      </Typography> */}
    </div>
  );
}

interface AppProps {
  Component: any;
  pageProps: any;
}

const _App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div className="c7era">
      <Dialog open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title">{'是否已经成年?'}</DialogTitle>
        <DialogContent>
          <DialogContentText>注意 ​本品含有尼古丁，尼古丁是一种致瘾的成分。 未成年人禁止使用！</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => {
              router.push('https://www.google.com/');
            }}
            color="primary"
          >
            未满18岁，离开
          </Button>
          <Button
            onClick={() => {
              setOpen(false);
            }}
            color="primary"
            autoFocus
          >
            已满18岁，继续访问
          </Button>
        </DialogActions>
      </Dialog>

      <Head>
        <title>C7ERA</title>
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <CssBaseline />
      <div className="banner">
        <img src="/img/18x.png" alt="" />
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            router.push('/products/v1');
          }}
        >
          V1 系列
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            router.push('/products/v2');
          }}
        >
          V2 系列
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            router.push('/products/pods');
          }}
        >
          系列烟弹
        </MenuItem>
      </Menu>
      <header className="header sticky">
        <img className="header__logo" src="/img/logo.png" alt="" />
        <nav className="nav">
          <div className="links">
            <Link className="nav-link" href="/">
              <Button size="large">首页</Button>
            </Link>
            <Button size="large" onClick={handleClick}>
              产品
            </Button>
            <Link className="nav-link" href="/quality">
              <Button size="large">C7品质</Button>
            </Link>
            <Link className="nav-link" href="/after-sales">
              <Button size="large">售后服务</Button>
            </Link>
            <Link className="nav-link" href="/joining">
              <Button size="large">门店加盟</Button>
            </Link>
          </div>
        </nav>
      </header>
      <main className="main">
        <Component {...pageProps} />
      </main>
      <footer className="footer">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <div className="footer__info__item">
                <h3 className="footer__info__item-label">C7 新闻</h3>
                <div>C7 实验室</div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="footer__info__item">
                <h3 className="footer__info__item-label">C7 责任</h3>
                <div className="footer__info__item-description">
                  <div>
                    保护未成年人，坚守社会责任，坚持拒绝销售给未成年人并发起“小熊行动”，我们坚决相关规定执行，无论现在抑或是将来都将不向未成年人销售电子雾化器。
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="footer__info__item">
                <h3 className="footer__info__item-label">合作咨询</h3>
                <div className="contact">
                  <div className="contact-name">招商加盟经理：Apex</div>
                  <img className="contact-wx" src="/img/wx1.png" alt="" />
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>

        <Copyright />
      </footer>
    </div>
  );
};

export default _App;

import React, { useState, useEffect, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Box } from '@material-ui/core';
import Motif from 'assets/images/Motif.svg';

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  heroSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '100px 0 80px',
    position: 'relative',
    textAlign: 'center',
    zIndex: 2,
    '& h3': {
      textTransform: 'uppercase',
      marginBottom: 20,
    },
    '& h1': {
      color: palette.primary.main,
    },
    '& > button': {
      height: 56,
      width: 194,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    [breakpoints.down('xs')]: {
      margin: '64px 0',
    },
  },
  tradingInfo: {
    width: '100%',
    position: 'relative',
    zIndex: 2,
    justifyContent: 'center',
    [breakpoints.down('md')]: {
      flexWrap: 'wrap',
    },
    '& > div': {
      background: palette.background.default,
      width: 'calc(25% - 24px)',
      maxWidth: 288,
      minWidth: 220,
      height: 133,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      margin: 12,
      '& p': {
        marginBottom: 24,
        textTransform: 'uppercase',
      },
      [breakpoints.down('xs')]: {
        height: 'unset',
      },
    },
  },
  quickInfo: {
    textAlign: 'center',
    margin: '128px auto 30px',
    width: '100%',
    maxWidth: 800,
    '& h2': {
      marginBottom: 60,
    },
  },
  swapContainer: {
    textAlign: 'center',
    padding: '20px 0',
    maxWidth: 1048,
    margin: 'auto',
    width: '100%',
    '& > div': {
      width: '100%',
    },
    '& .MuiButtonGroup-root': {
      marginBottom: 50,
      '& button': {
        maxWidth: 180,
        width: '50%',
        height: 48,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'transparent',
        border: `1px solid ${palette.primary.dark}`,
        color: 'white',
        '&.active': {
          background: '#FFFFFFDE',
          border: `1px solid transparent`,
          color: palette.background.default,
        },
        '&:first-child': {
          borderTopLeftRadius: 24,
          borderBottomLeftRadius: 24,
        },
        '&:last-child': {
          borderTopRightRadius: 24,
          borderBottomRightRadius: 24,
        },
      },
    },
    [breakpoints.down('xs')]: {
      '& .MuiGrid-item': {
        width: '100%',
        marginBottom: 32,
        textAlign: 'center',
      },
    },
  },
  buttonGroup: {
    textAlign: 'center',
    padding: '20px 0',
    maxWidth: 1048,
    margin: 'auto',
    width: '100%',
    '& > div': {
      width: '100%',
    },
    '& .MuiButtonGroup-root': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 50,
      '& button': {
        maxWidth: 180,
        width: '50%',
        height: 48,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'transparent',
        border: `1px solid ${palette.primary.dark}`,
        color: palette.text.secondary,
        '&.active': {
          background: '#FFFFFFDE',
          border: `1px solid transparent`,
          color: palette.background.default,
        },
        '&:first-child': {
          borderTopLeftRadius: 24,
          borderBottomLeftRadius: 24,
        },
        '&:last-child': {
          borderTopRightRadius: 24,
          borderBottomRightRadius: 24,
        },
      },
    },
    [breakpoints.down('xs')]: {
      '& .MuiGrid-item': {
        width: '100%',
        marginBottom: 32,
        textAlign: 'center',
      },
    },
  },
  swapInfo: {
    textAlign: 'left',
    marginBottom: 60,
    [breakpoints.down('sm')]: {
      order: -1,
    },
    '& h3': {
      marginBottom: 16,
    },
  },
  rewardsContainer: {
    textAlign: 'center',
    margin: '172px 0 100px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [breakpoints.down('xs')]: {
      margin: '32px 0 64px',
    },
  },
  buyFiatContainer: {
    background: palette.background.paper,
    height: 338,
    borderRadius: 48,
    marginBottom: 160,
    overflow: 'hidden',
    position: 'relative',
    [breakpoints.down('sm')]: {
      height: 'auto',
    },
    [breakpoints.down('xs')]: {
      marginBottom: 80,
    },
    '& > img': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: 1248,
    },
    '& > div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingRight: 80,
      height: '100%',
      position: 'relative',
      zIndex: 2,
      [breakpoints.down('sm')]: {
        flexDirection: 'column',
        padding: 0,
      },
    },
    '& .buyFiatInfo': {
      display: 'flex',
      width: '50%',
      alignItems: 'center',
      position: 'relative',
      '& img': {
        width: 200,
        maxWidth: 320,
      },
      '& > div': {
        width: 'calc(100% - 200px)',
        '& > h3': {
          marginBottom: 12,
        },
      },
      [breakpoints.down('sm')]: {
        width: '100%',
      },
      [breakpoints.down('xs')]: {
        flexDirection: 'column',
        '& img, & > div': {
          width: '100%',
        },
        '& img': {
          margin: '-32px 0',
        },
        '& div': {
          padding: '0 20px 20px',
        },
      },
    },
    '& .buyFiatWrapper': {
      width: 408,
      [breakpoints.down('sm')]: {
        width: 'calc(100% - 64px)',
        marginBottom: 32,
      },
      [breakpoints.down('xs')]: {
        width: 'calc(100% - 40px)',
      },
      '& .buyContent': {
        background: palette.background.default,
        borderRadius: 20,
        padding: 24,
        '& > div': {
          padding: 0,
          border: 'none',
          background: 'transparent',
          '& > p': {
            marginBottom: 8,
          },
        },
      },
      '& > button': {
        height: 56,
        marginTop: 20,
      },
    },
  },
  featureHeading: {
    margin: 'auto',
    textAlign: 'center',
    '& h3': {
      color: 'rgba(255, 255, 255, 0.87)',
      marginBottom: 32,
    },
  },
  featureDivider: {
    width: 32,
    height: 2,
    background: palette.success.dark,
    margin: 'auto',
  },
  featureContainer: {
    '& > div.MuiGrid-root': {
      marginTop: 32,
      '& > div': {
        '& img': {
          width: 150,
          maxWidth: 240,
        },
        '& > div': {
          width: 'calc(100% - 270px)',
        },
        [breakpoints.down('xs')]: {
          flexDirection: 'column',
          '& img, & > div': {
            width: '100%',
            textAlign: 'center',
          },
        },
      },
    },
    '& .featureText': {
      marginLeft: 8,
      '& h3': {
        color: 'white',
        marginBottom: 8,
      },
    },
  },
  communityContainer: {
    margin: '100px 0',
    '& .socialContent': {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 48,
      '& > div': {
        margin: 16,
        textAlign: 'center',
        width: 120,
        '& a': {
          textDecoration: 'none',
          color: palette.text.primary,
          '&:hover': {
            color: 'white',
            '& svg path': {
              fill: 'white',
            },
          },
        },
        '& svg': {
          width: 64,
          height: 64,
          '& path': {
            fill: palette.text.primary,
          },
        },
      },
    },
  },
  smallCommunityContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
    height: 56,
    position: 'fixed',
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 24,
    background: 'rgb(27, 32, 43, 0.9)',
    backdropFilter: 'blur(30px)',
    zIndex: 10,
    '& svg': {
      width: 32,
      height: 32,
      cursor: 'pointer',
      '&:hover path': {
        fill: palette.text.primary,
      },
      '& path': {
        fill: palette.text.secondary,
      },
    },
    [breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const LandingPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div id='landing-page' style={{ width: '100%' }}>
      <Box className={classes.quickInfo}>
        <Typography style={{ fontSize: '24px' }}>
          QuickSwap is a next-generation layer-2 decentralized exchange and
          Automated Market Maker.
        </Typography>
        <img src={Motif} alt='Motif' />
      </Box>
    </div>
  );
};

export default LandingPage;

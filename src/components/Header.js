import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito'
  },
  appbar: {
    background: 'none',
  },
  appbarTitle: {
    flexGrow: '1'
  },
  colorTitle:{
    color: '#5AFF3D'
  },
  container: {
    textAlign: 'center',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto'
  },
  icon: {
    color: '#fff',
    fontSize: '2rem'
  },
  title: {
    color: 'white',
    fontSize: '4.5rem'

  },
  goDown: {
    color: '#5AFF3D',
    fontSize: '4rem'
  }
});

export default function Header () {
    const classes = useStyles();
  
    return(
      <div className={classes.root}>
        <AppBar className={classes.appbar} elevation={0}>
          <Toolbar className={classes.appbarWrapper}>
            <h1 className={classes.appbarTitle}>
              My<span className={classes.colorTitle}>Island.</span>
            </h1>
            <IconButton>
                <SortIcon className={classes.icon}/>
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br /> My
            <span className={classes.colorTitle}>Island.</span>
          </h1>
          <IconButton>
            <ExpandMoreIcon className={classes.goDown} />
          </IconButton>
        </div>
      </div>
    )
  }
import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Link, useHistory} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import {IconButton, Menu, MenuItem, Tab, Tabs} from "@material-ui/core";
import PhoneIcon from '@material-ui/icons/Phone';
import "./navbar.component.css";
import { AccountCircle } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        indicator: {
            backgroundColor: "black",
        },
        customStyleOnTab: {
            fontSize: '1.8rem',
            fontFamily: "Syne, sans-serif"
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    })
);

interface NavProps {
    user: any;
}

export const NavbarComponent: React.FC<NavProps> = ({user}) => {
    const history = useHistory();
    const classes = useStyles();
    const [tabValue, setTabValue] = React.useState(0);
    const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    const handleTabChange = (event: any, newValue: number) => {
        setTabValue(newValue);
        switch (newValue) {
            case 0:
                history.push('/');
                break;
            case 1:
                history.push('/store');
                break;
            case 2:
                history.push('/about');
                break;
            default:
                history.push('/');
        }
    };

    return (
        <div className={classes.root}>
            <AppBar position="sticky" id="app-bar" elevation={0}>
                <Toolbar id="tool-bar">
                    <Tabs
                        onChange={handleTabChange}
                        textColor="inherit"
                        classes={{
                            indicator: classes.indicator,
                        }}
                        value={tabValue}
                    >
                        <Tab icon={<PhoneIcon/>}/>
                        <Tab label={<span className={classes.customStyleOnTab}>Store</span>}/>
                        <Tab label={<span className={classes.customStyleOnTab}>About</span>}/>
                    </Tabs>
                    {auth && (
            <div>
              <IconButton
                // size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
                    
                </Toolbar>
            </AppBar>
        </div>
    );
};

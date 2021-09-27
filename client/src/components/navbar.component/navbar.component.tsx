import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Link, useHistory} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Avatar, Button, Grid, Tab, Tabs} from "@material-ui/core";
import "./navbar.component.css";

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
                    <Grid container justify="space-between" spacing={4}>
                        <Grid item>
                            <Tabs
                                onChange={handleTabChange}
                                textColor="inherit"
                                classes={{
                                    indicator: classes.indicator,
                                }}
                                value={tabValue}
                            >
                                <Tab icon={<Avatar alt="test avatar" src="/logo.png"/>}/>
                                <Tab label={<span className={classes.customStyleOnTab}>Store</span>}/>
                                <Tab label={<span className={classes.customStyleOnTab}>About</span>}/>
                            </Tabs>
                        </Grid>
                        <Grid item>
                            <Link id="login-link" to="/login">
                                {user.name ?
                                    <Button id="login-link" color="inherit">Sign Out</Button> :
                                    <Button id="login-link" color="inherit">Sign In</Button>
                                }
                            </Link>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
};

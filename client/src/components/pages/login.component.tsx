import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import React, {useState} from "react";
import {Avatar, Button, Grid, Paper, TextField} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {Link} from 'react-router-dom'
import {PersonAdd} from "@material-ui/icons";
import "./login.component.css"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        avatar: {
            margin: theme.spacing(1),
            marginLeft: theme.spacing(40),
            alignItems: "center",
        },
        paper: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        form: {
            width: "100%", // Fix IE 11 issue.
            marginTop: theme.spacing(1),
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        gridItem: {
            padding: theme.spacing(1)
        }
    })
);

export const LoginComponent: React.FC = () => {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<string>();
    return (
        <React.Fragment>
            <Paper id="paper-container" className={classes.paper} elevation={5}>
                <Grid container spacing={0} id="grid-container">
                    <Grid item xs={4} md={12} className={classes.gridItem}>
                        <Avatar className={classes.avatar} alt="test avatar" src="/logo.png"/>Account Login
                    </Grid>
                    <Grid item xs={4} md={12} className={classes.gridItem}>
                        <TextField
                            required
                            id="email"
                            type="email"
                            label="Username or Email"
                            variant="standard"
                            fullWidth
                            name="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={4} md={12} className={classes.gridItem}>
                        <TextField
                            required
                            id="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            fullWidth
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={4} md={12} className={classes.gridItem}>
                        <Typography>
                            <section id="signup-container">
                                Don't have an account? Click below to sign up!
                            </section>
                            <section>
                                <Link id="register-link" to="/register">
                                    <Button id="signup-button" color="inherit" endIcon={<PersonAdd/>}>Sign Up</Button>
                                </Link>
                            </section>
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </React.Fragment>
    );
}
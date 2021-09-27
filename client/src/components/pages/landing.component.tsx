import React from "react";
import "./landing.component.css"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
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

export const LandingComponent: React.FC = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container spacing={0} justifyContent="space-around" alignItems="center" id={"landingComponent"}>
                <Grid item xs={6} md={12} className={classes.gridItem}>
                    <Typography variant="h6" className={classes.title} id={"landing-text"}>
                        pVo
                    </Typography>
                </Grid>
                <Grid item xs={6} md={6} className={classes.gridItem} id={"landing-in-left"}>
                    <Typography variant="h6" className={classes.title} id={"typo-text"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur, distinctio doloribus
                        dolorum fuga vel velit veritatis! Error, eum, ipsum? Aliquam aliquid, amet at ea minus molestias
                        neque sint? Laudantium?
                    </Typography>
                </Grid>
                <Grid item xs={6} md={6} className={classes.gridItem} id={"landing-in-right"}>
                    <Typography variant="h6" className={classes.title} id={"typo-text"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at blanditiis commodi cumque
                        deleniti dignissimos dolorum eligendi esse illum itaque laborum magnam modi natus nihil,
                        obcaecati praesentium repellendus reprehenderit voluptatem.
                    </Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
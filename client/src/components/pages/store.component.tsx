import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import './store.component.css';

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
    })
);

export const StoreComponent: React.FC = () => {
    const classes = useStyles();
    return (
        <div id={"storeComponent"}>
            <Typography variant="h1" className={classes.title} id={"store-text"}>
                STORE
            </Typography>
        </div>
    );
}
import { BottomNavigationAction, Grid, BottomNavigation, makeStyles, createStyles } from "@material-ui/core";
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';


const useStyles = makeStyles(() =>
    createStyles({
        footer: {
            position: 'absolute',
            bottom: '0',
            width: '100%',
            '& svg': {
                fontSize: '1.4em'
            }
        }
    })
)

// TODO: replace bottomnavigation with div and buttons instead, lighter and easier to customize for our needs.

function Footer() {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12}>
                <BottomNavigation className={classes.footer}>
                    <BottomNavigationAction icon={<FaGithub />} />
                    <BottomNavigationAction icon={<FaDiscord />} />
                    <BottomNavigationAction icon={<FaEnvelope />} />
                </BottomNavigation>
            </Grid>
        </Grid>
    )
}

export default Footer;

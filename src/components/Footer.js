import React from "react";
import {Box, Link, Grid, Container, InputBase, Button, makeStyles} from '@material-ui/core';
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

const links = [
    {
        label: 'Home',
        url: '/'
    },
    {
        label: 'Menu',
        url: '/menu'
    },
    {
        label: 'About',
        url: '/about'
    },
]

const useStyles = makeStyles(theme => ({
    inputStyles: {
        border: "1px solid white",
        color: "white",
        borderRadius: theme.shape.borderRadius,
        height: '36.5px',
        padding: theme.spacing(2),
        marginRight: '8px'
    },
    buttonStyles: {
        textTransform: 'capitalize',
    }
}))

function Footer() {
    const classes = useStyles()
    return (
        <footer className="footer">
            <Box
                px={5}
                py={5}
                bgcolor="white"
                color="black"
            >
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid
                            item 
                            xs={12}
                            sm={3}
                            container
                        >
                                
                            
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <p>Discovery</p>
                            {links.map((link) => {
                                return (
                                    <Box key={link.label}>
                                        <Link href={link.url} color="inherit">
                                            { link.label }
                                        </Link>
                                    </Box>
                                )
                            })}
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <p>Follow Us</p>
                            <Grid container direction="row">
                                <Box>
                                    <Link href="https://www.facebook.com/" color="inherit" target="_blank">
                                        <FacebookIcon/>
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="https://www.instagram.com/" color="inherit" target="_blank">
                                        <InstagramIcon/>
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="https://twitter.com/" color="inherit" target="_blank">
                                        <TwitterIcon/>
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="https://linkedin.com/" color="inherit" target="_blank">
                                        <LinkedInIcon/>
                                    </Link>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <p style={{whiteSpace: 'nowrap', marginBottom: '8px'}}>For getting exclusive recipes and discounts</p>
                            <Grid container direction="row" wrap="nowrap">
                                <Box>
                                    <InputBase
                                        placeholder="Enter your email"
                                        variant="outlined"
                                        className={classes.inputStyles}
                                    />
                                </Box>
                                <Box>
                                    <Button
                                        variant="contained" 
                                        className={classes.buttonStyles}
                                    >   
                                        Subscribe
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    );
}

export default Footer;
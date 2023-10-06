import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
    Box,
    Button, Card, CardActions, CardContent, CardHeader, Container, GlobalStyles, Grid, Link, ThemeProvider, Typography
} from "@mui/material";
import Layout from "@theme/Layout";
import React from "react";

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const tiers = [
    {
        title: 'Glasses',
        price: '1000',
    },
    {
        title: 'Dress',
        price: '1000',
    },
    {
        title: 'Hat',
        price: '1000',
    },
    {
        title: 'necklaces',
        price: '1000',
    }, {
        title: 'bracelets',
        price: '1000',
    }, {
        title: 'watches',
        price: '1000',
    }, {
        title: 'pins',
        price: '1000',
    }, {
        title: 'socks',
        price: '1000',
    }, {
        title: 'gloves',
        price: '1000',
    },
];
const footers = [
    {
        title: 'Company',
        description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
        title: 'Features',
        description: [
            'Cool stuff',
            'Random feature',
            'Team feature',
            'Developer stuff',
            'Another one',
        ],
    },
    {
        title: 'Resources',
        description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
        title: 'Legal',
        description: ['Privacy policy', 'Terms of use'],
    },
];


export default function shopping(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <main>
                <Container disableGutters maxWidth="sm" component="main" sx={{pt: 8, pb: 6}}>
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Shopping
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" component="p">
                        Make a right purchase! Remember to plan before you purchase.
                    </Typography>
                </Container>
                <Container maxWidth="md" component="main">
                    <Grid container spacing={5} alignItems="flex-end">
                        {tiers.map((tier) => (
                            <Grid
                                item
                                key={tier.title}
                                xs={12}
                                sm={tier.title === 'Enterprise' ? 12 : 6}
                                md={4}
                            >
                                <Card>
                                    <CardHeader
                                        title={tier.title}
                                        subheader={tier.subheader}
                                        titleTypographyProps={{align: 'center'}}
                                        // action={tier.title === 'Pro' ? <StarIcon /> : null}
                                        subheaderTypographyProps={{
                                            align: 'center',
                                        }}
                                        sx={{
                                            backgroundColor: (theme) =>
                                                theme.palette.mode === 'light'
                                                    ? theme.palette.grey[200]
                                                    : theme.palette.grey[700],
                                        }}
                                    />
                                    <CardContent>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'baseline',
                                                mb: 2,
                                            }}
                                        >

                                            <Typography component="h2" variant="h6" color="text.primary" align='center'>
                                                <img src='img/undraw_docusaurus_react.svg' alt='product picture'/>
                                                ${tier.price + ' coins'}
                                            </Typography>
                                        </Box>
                                        <ul>
                                        </ul>
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            fullWidth
                                            variant='contained'
                                        >
                                            purchase
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                {/* Footer */}
                <Container
                    maxWidth="md"
                    component="footer"
                    sx={{
                        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                        mt: 8,
                        py: [3, 6],
                    }}
                >
                    <Grid container spacing={4} justifyContent="space-evenly">
                        {footers.map((footer) => (
                            <Grid item xs={6} sm={3} key={footer.title}>
                                <Typography variant="h6" color="text.primary" gutterBottom>
                                    {footer.title}
                                </Typography>
                                <ul>
                                    {footer.description.map((item) => (
                                        <li key={item}>
                                            <Link href="#" variant="subtitle1" color="text.secondary">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Grid>
                        ))}
                    </Grid>
                    <Copyright sx={{mt: 5}}/>
                </Container>
            </main>
        </Layout>
    );
}

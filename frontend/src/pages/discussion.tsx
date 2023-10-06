import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {Box,
    Button, Card, CardActions, CardContent, CardHeader, Container, GlobalStyles, Grid, Link, ThemeProvider, Typography } from "@mui/material";
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
        title: 'Phone',
        price: '100',
        description: [
            '10 users included',
            '2 GB of storage',
            'Help center access',
            'Email support',
        ],
        buttonText: 'Sign up for free',
        buttonVariant: 'outlined',
    },
    {
        title: 'Pro',
        subheader: 'Most popular',
        price: '15',
        description: [
            '20 users included',
            '10 GB of storage',
            'Help center access',
            'Priority email support',
        ],
        buttonText: 'Get started',
        buttonVariant: 'contained',
    },
    {
        title: 'Enterprise',
        price: '30',
        description: [
            '50 users included',
            '30 GB of storage',
            'Help center access',
            'Phone & email support',
        ],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
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
                    {/* Hero unit */}
                    <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Discussions
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" component="p">
                            Make a right purchase!
                        </Typography>
                    </Container>
                    {/* End hero unit */}
                    <Container maxWidth="md" component="main">
                        <Grid container spacing={5} alignItems="flex-end">
                            {tiers.map((tier) => (
                                // Enterprise card is full width at sm breakpoint
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
                                            titleTypographyProps={{ align: 'center' }}
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
                                                <Typography component="h2" variant="h3" color="text.primary">
                                                    ${tier.price}
                                                </Typography>
                                                <Typography variant="h6" color="text.secondary">
                                                    /mo
                                                </Typography>
                                            </Box>
                                            <ul>
                                                {tier.description.map((line) => (
                                                    <Typography
                                                        component="li"
                                                        variant="subtitle1"
                                                        align="center"
                                                        key={line}
                                                    >
                                                        {line}
                                                    </Typography>
                                                ))}
                                            </ul>
                                        </CardContent>
                                        <CardActions>
                                            <Button
                                                fullWidth
                                                variant={tier.buttonVariant as 'outlined' | 'contained'}
                                            >
                                                {tier.buttonText}
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
                        <Copyright sx={{ mt: 5 }} />
                    </Container>

                {/*<Typography*/}
                {/*    component="h1"*/}
                {/*    variant="h2"*/}
                {/*    align="center"*/}
                {/*    color="text.primary"*/}
                {/*    gutterBottom*/}
                {/*>*/}
                {/*    Pricing*/}
                {/*</Typography>*/}
                {/*<Container disableGutters maxWidth="sm" component="main" sx={{pt: 8, pb: 6}}>*/}
                {/*    <Typography*/}
                {/*        component="h1"*/}
                {/*        variant="h2"*/}
                {/*        align="center"*/}
                {/*        color="text.primary"*/}
                {/*        gutterBottom*/}
                {/*    >*/}
                {/*        Pricing*/}
                {/*    </Typography>*/}
                {/*    <Typography variant="h5" align="center" color="text.secondary" component="p">*/}
                {/*        Quickly build an effective pricing table for your potential customers with*/}
                {/*        this layout. It&apos;s built with default MUI components with little*/}
                {/*        customization.*/}
                {/*    </Typography>*/}
                {/*</Container>*/}
            </main>
        </Layout>
    );
}

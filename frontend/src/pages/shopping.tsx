import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
    Box,
    Button, Card, CardActions, CardContent, CardHeader, Container,
    Dialog,
    DialogActions, DialogContent, DialogContentText, DialogTitle, GlobalStyles, Grid, Link, ThemeProvider, Typography
} from "@mui/material";
import Layout from "@theme/Layout";
import React, {useState} from "react";

//check wether user can purchase specific item
const coinOwned = 10000

const tiers = [
    {
        title: 'Glasses',
        price: '500',
    },
    {
        title: 'Dress',
        price: '500',
    },
    {
        title: 'Hat',
        price: '500',
    },
    {
        title: 'necklaces',
        price: '1000',
    }, {
        title: 'bracelets',
        price: '1000000',
    }, {
        title: 'watches',
        price: '10000',
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

// function PaperComponent(props: PaperProps) {
//     return (
//         <Draggable
//             handle="#draggable-dialog-title"
//             cancel={'[class*="MuiDialogContent-root"]'}
//         >
//             <Paper {...props} />
//         </Draggable>
//     );
// }

export default function shopping(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    const [purchaseConfirmation, setPurchaseConfirmation] = useState<boolean>(false)


    const handleClickOpen = () => {
        setPurchaseConfirmation(true);
    };

    const handleClose = () => {
        setPurchaseConfirmation(false);
    };
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
                                        titleTypographyProps={{align: 'center'}}
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
                                            <Typography component="h2" variant="h6" color="text.primary" align='center'
                                                        display={'linline'}>
                                                <img src='img/undraw_docusaurus_react.svg' alt='product picture'/>
                                                {tier.price + ' coins'}
                                            </Typography>
                                        </Box>
                                        <ul>
                                        </ul>
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            fullWidth
                                            variant='contained'
                                            disabled={coinOwned < parseInt(tier.price)}
                                            onClick={handleClickOpen}
                                        >
                                            purchase
                                        </Button>
                                        <Dialog
                                            open={purchaseConfirmation}
                                            onClose={handleClose}
                                            aria-labelledby="draggable-dialog-title"
                                        >
                                            <DialogTitle style={{cursor: 'move'}} id="draggable-dialog-title">
                                                Purchase Confirmation
                                            </DialogTitle>
                                            <DialogContent>
                                                <DialogContentText style={{ wordWrap: "break-word" }}>
                                                    THINK BEFORE YOU BUY. Are you confirm to puchase?
                                                </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button autoFocus onClick={handleClose}>
                                                    Cancel
                                                </Button>
                                                <Button onClick={handleClose}>Purchase</Button>
                                            </DialogActions>
                                        </Dialog>
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
                </Container>
            </main>
        </Layout>

    )
        ;
}

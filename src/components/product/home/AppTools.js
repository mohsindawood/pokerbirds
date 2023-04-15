import React, { Component } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Tabs,
  Tab,
  Button,
} from "@mui/material";
import Image from "next/image";
import {
  MotionInView,
  varFadeInLeft,
  varFadeInDown,
} from "src/components/animate";
const services = [
  {
    title: "Dashboard",
    heading: "Admin Dashboard is a powerful tool",
    features: [
      {
        icon: "bar-chart.png",
        heading: "Statistics",
        description:
          "Admin can see the statistics of orders, products, users, etc. in real time on the homepage.",
      },
      {
        icon: "new-product.png",
        heading: "Products Management",
        description:
          "Admin can add, edit, delete products from the dashboard and mark them as featured.",
      },
      {
        icon: "shopping-bag.png",
        heading: "Orders Management",
        description:
          "Admin can view all the orders placed by the users and can mark them as completed, on the way, returned or delivered.",
      },
      {
        icon: "bell.png",
        heading: "Notifications",
        description:
          "Admin dashboard will notify the admin about the latest updates.",
      },
    ],
    image: "/img/nextjs-ecommerce-dashboard.png",
  },
  {
    title: "Listing",
    heading: "Powerful filteration",
    features: [
      {
        icon: "page-layout.png",
        heading: "Products Layout",
        description:
          "Users can change the layout for listing products as list or gird.",
      },
      {
        icon: "sort.png",
        heading: "Sorting",
        description:
          "Client app includes the sorting feature for sorting products.",
      },
      {
        icon: "filter.png",
        heading: "Filteration",
        description:
          "The client app includes the filtration feature for filtering products and selecting.",
      },
      {
        icon: "search.png",
        heading: "Search",
        description:
          "The client app includes the search products feature for searching products from the database.",
      },
    ],
    image: "/img/commercehope-app-desktop.png",
  },
];

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default class UserInterfaces extends Component {
  state = {
    slideIndex: 0,
    updateCount: 0,
  };
  //  btnSize = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  render() {
    return (
      <>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            pt: { lg: 7, md: 3, xs: 2 },
            pb: 8,
            bgcolor: (theme) => theme.palette.background.paper,
          }}
        >
          <Container>
            {/* slider */}
            <Tabs
              onChange={(e, v) => this.setState({ slideIndex: v })}
              value={this.state.slideIndex}
              aria-label="basic tabs example"
              centered
              sx={{ pb: 5 }}
            >
              {services.map((item, i) => (
                <Tab key={i} label={item.title} {...a11yProps(i)} />
              ))}
            </Tabs>
            <Box>
              <Grid container spacing={3}>
                <Grid item xs={12} md={5}>
                  <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
                    <MotionInView variants={varFadeInDown}>
                      <Typography variant="h2" color="text.primary" mb={3}>
                        {services[this.state.slideIndex].heading}
                      </Typography>
                    </MotionInView>
                    {services[this.state.slideIndex].features.map((item, i) => (
                      <MotionInView
                        key={Math.random()}
                        variants={varFadeInDown}
                      >
                        <Grid
                          container
                          spacing={1}
                          sx={{
                            mt: 0.5,
                            justifyContent: { xs: "center", sm: "left" },
                          }}
                        >
                          <Grid item xs={12} sm={12} md={2}>
                            <Box textAlign="center">
                              <Image
                                src={"/icons/" + item.icon}
                                width={40}
                                height={40}
                                layput="fixed"
                                alt={
                                  "icon-" +
                                  item.icon +
                                  "next js react js ecommerce script"
                                }
                              />
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={12} md={10}>
                            <Typography
                              variant="subtitle1"
                              color="text.primary"
                            >
                              {item.heading}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              mt={0.6}
                            >
                              {item.description}
                            </Typography>
                          </Grid>
                        </Grid>
                      </MotionInView>
                    ))}
                    <MotionInView key={Math.random()} variants={varFadeInLeft}>
                      <Button
                        variant="contained"
                        color="primary"
                        // size={this.btnSize ? "small":"large"}
                        sx={{ mt: 2 }}
                        size="large"
                      >
                        Get Started
                      </Button>
                    </MotionInView>
                  </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      height: 1,
                      position: "relative",
                    }}
                  >
                    <Image
                      src={services[this.state.slideIndex].image}
                      alt={`reactjs ecommerce commercehope tools icon-${
                        services[this.state.slideIndex].image
                      }`}
                      placeholder="blur"
                      blurDataURL={services[this.state.slideIndex].image}
                      layout="fill"
                      objectFit="contain"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
        {/* <Box
          component="svg"
          xmlns="http://www.w3.org/2000/svg"
          id="wave"
          viewBox="0 0 1440 210"
          version="1.1"
          sx={{
            bgcolor: "background.default",
            transform: "rotate(180deg)",
            background: (theme) => theme.palette.background.paper,
            path: {
              fill: (theme) => theme.palette.background.paper,
            },
          }}
        >
          <path d="M0,63L80,80.5C160,98,320,133,480,129.5C640,126,800,84,960,87.5C1120,91,1280,140,1440,154C1600,168,1760,147,1920,140C2080,133,2240,140,2400,143.5C2560,147,2720,147,2880,122.5C3040,98,3200,49,3360,24.5C3520,0,3680,0,3840,28C4000,56,4160,112,4320,122.5C4480,133,4640,98,4800,91C4960,84,5120,105,5280,108.5C5440,112,5600,98,5760,94.5C5920,91,6080,98,6240,105C6400,112,6560,119,6720,126C6880,133,7040,140,7200,150.5C7360,161,7520,175,7680,175C7840,175,8000,161,8160,143.5C8320,126,8480,105,8640,80.5C8800,56,8960,28,9120,17.5C9280,7,9440,14,9600,31.5C9760,49,9920,77,10080,94.5C10240,112,10400,119,10560,122.5C10720,126,10880,126,11040,115.5C11200,105,11360,84,11440,73.5L11520,63L11520,210L11440,210C11360,210,11200,210,11040,210C10880,210,10720,210,10560,210C10400,210,10240,210,10080,210C9920,210,9760,210,9600,210C9440,210,9280,210,9120,210C8960,210,8800,210,8640,210C8480,210,8320,210,8160,210C8000,210,7840,210,7680,210C7520,210,7360,210,7200,210C7040,210,6880,210,6720,210C6560,210,6400,210,6240,210C6080,210,5920,210,5760,210C5600,210,5440,210,5280,210C5120,210,4960,210,4800,210C4640,210,4480,210,4320,210C4160,210,4000,210,3840,210C3680,210,3520,210,3360,210C3200,210,3040,210,2880,210C2720,210,2560,210,2400,210C2240,210,2080,210,1920,210C1760,210,1600,210,1440,210C1280,210,1120,210,960,210C800,210,640,210,480,210C320,210,160,210,80,210L0,210Z" />
        </Box> */}
      </>
    );
  }
}

import React from "react";
import { Container, Box, Typography, Grid, Link } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Card from "./Card";

const cardData = [
  {
    img: "/static/home/11.jpg",
    link: "#",
    name: "Creative App",
    paragraph: "ios, design",
  },
  {
    img: "/static/home/12.jpg",
    link: "#",
    name: "Icon Pack",
    paragraph: "Android & iOs, Design",
  },
];

export default function OurWork() {
  const theme = useTheme();
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Container>
        <Box sx={{ my: { lg: 8, md: 6, xs: 2 } }}>
          <TabContext value={value}>
            <Box
              sx={{
                display: { md: "flex", xs: "block" },
                justifyContent: "space-between",
                alignItems: "center",
                [theme.breakpoints.down("md")]: { textAlign: "center" },
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  color="primary"
                  sx={{ fontWeight: 400, my: 1 }}
                >
                  OUR WORK
                </Typography>
                <Typography
                  variant="h2"
                  sx={{ my: { md: 0, xs: 1 } }}
                  color="text.primary"
                >
                  Portfolio
                </Typography>
              </Box>
              <Box
                sx={{
                  button: {
                    fontSize: "16px",
                    borderRadius: "40px 40px 40px 20px",
                    padding: 2,
                    mr: "8px !important",
                    border: "none",
                    color: `${theme.palette.text.primary}`,
                    background: `${alpha(theme.palette.primary.main, 0.16)}`,
                    "&.Mui-selected": {
                      background: `${theme.palette.primary.main}`,
                      color: `${theme.palette.common.white}`,
                    },
                  },
                  ".MuiTabs-indicator": {
                    display: "none"
                  }
                }}
              >
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab value="1" label="All" />
                  <Tab value="2" label="Web Apps" />
                  <Tab value="3" label="Graphic" />
                </TabList>
              </Box>
            </Box>
            <TabPanel value="1">
              <Card />
            </TabPanel>
            <TabPanel value="2">
              <Card />
            </TabPanel>
            <TabPanel value="3">
              <Grid container spacing={4}>
                {cardData.map((v) => (
                  <Grid key={Math.random()} item lg={4} md={4} sm={6} xs={12}>
                    <Box my={5}>
                      <Box
                        sx={{
                          borderRadius: 2,
                          overflow: "hidden",
                          img: {
                            objectFit: "cover",
                            transition: `all 0.8s`,
                            ":hover": {
                              transform: `scale(1.1)`,
                            },
                          },
                        }}
                      >
                        <Link href={v.link} target="_blank">
                          <img
                            src={v.img}
                            alt="magentoassist "
                            width="100%"
                            height="350px"
                          />
                        </Link>
                      </Box>
                      <Typography
                        variant="h4"
                        color="text.primary"
                        sx={{ my: { md: 2, xs: 1 } }}
                      >
                        {v.name}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ my: { md: 2, xs: 1 } }}
                      >
                        {v.paragraph}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
    </>
  );
}
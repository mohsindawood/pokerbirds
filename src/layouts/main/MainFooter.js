// materials
import {
  Box,
  Grid,
  Link as RouterLink,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Link from "src/utils/link";
//
import { useTheme, alpha } from "@mui/material/styles";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import LocationOnIcon from '@mui/icons-material/LocationOn';
// components
import Logo from "../../components/Logo"
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
const contactData = [
  {
    icon: <LocationOnIcon />,
    name: "Address",
    paragraph: "Sargodha Punjab, Pakistan",
    href: "https://goo.gl/maps/Vayyej7BgeMe1smSA",
  },
  {
    icon: <EmailRoundedIcon />,
    name: "Email",
    paragraph: "info@techgater.com",
    href: "mailto:info@businessname.com",
  },
  {
    icon: <CallRoundedIcon />,
    name: "Phone",
    paragraph: "+92 303 5501602",
    href: "tel:+923035501602",
  },

];

const companyData = [
  {
    href: "/about",
    name: "About Us",
  },
  {
    href: "/services",
    name: "Services",
  },
  {
    href: "/product",
    name: "Our Product",
  },
  {
    href: "/team",
    name: "Team",
  },
  {
    href: "/blogs/material-ui-week-day-picker",
    name: "Blog",
  },
  {
    href: "/pricing",
    name: "Pricing",
  },
];
const resourceData = [
  {
    name: "Changelog",
    href: "#"
  },
  {
    name: "Updates",
    href: "#"
  },
  {
    name: "Provider",
    href: "#"
  },
  {
    name: "Affiliat",
    href: "#"
  },
  {
    name: "Roadmap",
    href: "#"
  },
]

export default function MainFooter() {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ my: { lg: 8, md: 6, xs: 1 } }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item lg={3} md={3} sm={4} xs={12}>
              <RouterLink
                component={Link}
                href="/"
                sx={{
                  svg: {
                    height: "55px"
                  },

                }}
              >
                <Logo />
              </RouterLink>
              <List sx={{ pt: 4 }}>
                {contactData.map((v) => (
                  <ListItem
                    key={Math.random()}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      svg: {
                        fill: `${theme.palette.text.secondary}!important`,
                        mr: 1,
                      },
                    }}
                  >
                    {v.icon}
                    <ListItemText>
                      <RouterLink
                        component={Link}
                        href={v.href}
                        color="text.secondary"
                      >
                        {v.paragraph}
                      </RouterLink>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>

            </Grid>
            <Grid item lg={3} md={3} sm={4} xs={12}>
              <Box sx={{ [theme.breakpoints.down("sm")]: { display: "none" } }}>
                <Typography variant="h4" color="text.primary">
                  Company
                </Typography>

                <List >
                  {companyData.map((v) => (
                    <ListItem key={Math.random()}>
                      <ListItemText>
                        <RouterLink
                          component={Link}
                          href={v.href}
                          color="text.secondary"
                        >
                          {v.name}
                        </RouterLink>
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>

            <Grid item lg={3} md={3} sm={4} xs={12}>
              <Typography variant="h4" color="text.primary">
                Resources
              </Typography>
              <List >
                {resourceData.map((v) => (
                  <ListItem
                    key={Math.random()}
                  >
                    <ListItemText>
                      <RouterLink
                        component={Link}
                        href={v.href}
                        color="text.secondary"
                      >
                        {v.name}
                      </RouterLink>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item lg={3} md={3} sm={4} xs={12}>
              <Box sx={{ [theme.breakpoints.down("sm")]: { display: "none" } }}>
                <Typography variant="h4" color="text.primary">
                  Support
                </Typography>
                <List>
                  <ListItem>
                    <RouterLink
                      component={Link}
                      href="/get-quote"
                      color="text.secondary"
                    >
                      Contact
                    </RouterLink>
                  </ListItem>
                  <ListItem>
                    <RouterLink
                      component={Link}
                      href="/terms-of-service"
                      color="text.secondary"
                    >
                      Terms of Services
                    </RouterLink>
                  </ListItem>
                  <ListItem>
                    <RouterLink
                      component={Link}
                      href="/refund-policy"
                      color="text.secondary"
                    >
                      Refund Policy
                    </RouterLink>
                  </ListItem>
                  <ListItem>
                    <RouterLink
                      component={Link}
                      href="/privacy-policy"
                      color="text.secondary"
                    >
                      Privacy Policy
                    </RouterLink>
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

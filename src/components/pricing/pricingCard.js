import {
  Card,
  CardContent,
  Box,
  Typography,
  List,
  ListItem,
  CardActions,
  Button,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { useRouter } from "next/router";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
const RootStyled = styled(Card)(({ theme, styleprops }) => ({
  borderRadius: theme.spacing(1),
  border: `1px solid ${theme.palette.divider}`,
  position: "relative",
  paddingBottom: styleprops === "enterprise" ? theme.spacing(6) : 0,
  marginTop: styleprops === "enterprise" ? theme.spacing(-3) : 0,
  ...(styleprops === "enterprise" && {
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    border: `1px solid ${theme.palette.divider}`,
  }),
  zIndex: 99,
  [theme.breakpoints.down("md")]: {
    paddingBottom: 0,
    margin: 0,
  },
  ".top-sec": {
    position: "relative",
    textAlign: "center",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(8),
    zIndex: 1,
    [theme.breakpoints.down("md")]: {
      h1: {
        fontSize: "42px!important",
        sup: {
          fontSize: 18,
        },
      },
    },
    sup: {
      fontSize: 20,
      fontWeight: 400,
    },
    "&:before": {
      content: "''",
      height: 320,
      width: "130%",
      background:
        styleprops === "enterprise"
          ? theme.palette.gradients.primary
          : alpha(theme.palette.grey[600], 0.2),
      borderRadius: "100%",
      zIndex: -1,
      position: "absolute",
      top: "-50%",
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
  ".MuiListItem-root": {
    //     justifyContent: "center",
    paddingTop: theme.spacing(0.7),
    paddingBottom: theme.spacing(0.7),
    fontWeight: 500,
  },
  ".MuiCardActions-root": {
    marginTop: theme.spacing(3),
    justifyContent: "center",
    button: {
      borderRadius: 20,
      paddingLeft: 30,
      paddingRight: 30,
    },
  },
  borderBottom:
    styleprops === "enterprise"
      ? `7px solid ${theme.palette.primary.main}`
      : `7px solid ${theme.palette.divider}`,
}));

function PricingCard({ data, noAction }) {
  const { plan, price, features } = data;
  const router = useRouter();
  return (
    <RootStyled
      styleprops={noAction ? "" : plan}
      {...(!noAction &&
        plan === "basic" && {
          sx: { marginRight: { md: -3, xs: 0 }, zIndex: 0 },
        })}
      {...(!noAction &&
        plan === "startup" && {
          sx: { marginLeft: { md: -3, xs: 0 }, zIndex: 0 },
        })}
    >
      <Box className="top-sec">
        <Typography
          variant="h6"
          color={
            !noAction && plan === "enterprise" ? "common.white" : "primary"
          }
          textTransform="uppercase"
        >
          {plan}
        </Typography>
        <Typography
          variant="h1"
          color={
            !noAction && plan === "enterprise" ? "common.white" : "primary"
          }
          textTransform="uppercase"
        >
          {price}
          <sup> $</sup>
        </Typography>
        <Typography
          variant="caption"
          fontWeight={600}
          color={
            !noAction && plan === "enterprise" ? "common.white" : "primary"
          }
          textTransform="uppercase"
        >
          one time
        </Typography>
      </Box>
      <CardContent>
        <List>
          {features.map((v) => (
            <ListItem sx={{}}>
              {v.active ? (
                <CheckCircleRoundedIcon sx={{ color: "primary.main", mr: 1 }} />
              ) : (
                <CancelRoundedIcon sx={{ color: "error.main", mr: 1 }} />
              )}

              {v.item}
            </ListItem>
          ))}
        </List>
        {!noAction && (
          <CardActions>
            <Button
              variant={plan === "enterprise" ? "contained" : "outlined"}
              onClick={() =>
                router.push(
                  `https://secure.2checkout.com/checkout/buy?merchant=254336791152&currency=USD&tpl=default&dynamic=1&return-type=redirect&return-url=https%3A%2F%2Ftechgater.com%2Fthank-you&src=https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2F1jrsMeJHqEekBiWZ_eCZyokLHu_OKPIT9%2Fview%3Fusp%3Dsharing&prod=Commercehope+%7C+ReactJS+Ecommerce+Script+With+ChatGPT&price=300&type=digital&qty=1&signature=74fa9465c93c14b4ba8a19b015124363d6e954198495d6ee4f73626f88a8a679`
                )
              }
            >
              Select Plan
            </Button>
          </CardActions>
        )}
      </CardContent>
    </RootStyled>
  );
}

export default PricingCard;

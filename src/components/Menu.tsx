import { FC, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import ArticleIcon from "@mui/icons-material/Article";
import MenuIcon from "@mui/icons-material/Menu";
import PeopleIcon from "@mui/icons-material/People";
import WineBarIcon from "@mui/icons-material/WineBar";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";

import Logo from "../components/Logo";
import theme from "../theme";

const Mennu: FC = () => {
  const menuItems = ["About Us", "Our Wine", "Blog"];
  const menuIcons = [<PeopleIcon />, <WineBarIcon />, <ArticleIcon />];
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawer, setDrawer] = useState(false);

  return (
    <>
      <Box
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          display: "flex",
          backgroundColor: theme.palette.bg?.main,
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
          padding: theme.spacing(3),
          paddingBottom: 0,
          gap: theme.spacing(3),
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "8px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to={"/"}>
            <IconButton size="large">
              <Logo fontSize="large" />
            </IconButton>
          </Link>
          <Typography variant="floray">Floray Wines</Typography>
        </Box>
        {!isPhone && (
          <Box sx={{ display: "flex", gap: "8px" }}>
            {menuItems.map((item, idx, arr) => {
              return (
                <NavLink
                  key={idx}
                  to={`/${item.replace(" ", "-").toLowerCase()}`}
                >
                  <Button key={item}>{item}</Button>
                </NavLink>
              );
            })}
          </Box>
        )}
        {isPhone && (
          <IconButton
            color="inherit"
            aria-label="menu"
            size="large"
            onClick={() => setDrawer(!drawer)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        )}
      </Box>
      <Drawer
        variant="persistent"
        anchor="right"
        open={drawer}
        sx={{
          width: "50%",
          backgroundColor: theme.palette.bg?.main,
          [`& .MuiDrawer-paper`]: {
            width: "100%",
            boxSizing: "border-box",
            backgroundColor: theme.palette.bg?.main,
          },
        }}
      >
        <Box
          sx={{
            overflow: "auto",
            backgroundColor: theme.palette.bg?.main,
            top: "83px",
            height: "calc(100vh - 83px)",
            position: "relative",
          }}
        >
          <List>
            {menuItems.map((item, idx) => (
              <>
                {idx !== 0 && <Divider variant="middle" key={item} />}
                <Link
                  key={idx}
                  to={`/${item.replace(" ", "-").toLowerCase()}`}
                  onClick={() => setDrawer(false)}
                >
                  <ListItem sx={{ backgroundColor: theme.palette.bg?.main }}>
                    <ListItemButton>
                      <ListItemIcon>{menuIcons[idx]}</ListItemIcon>
                      <ListItemText primary={item} sx={{ color: "black" }} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              </>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Mennu;

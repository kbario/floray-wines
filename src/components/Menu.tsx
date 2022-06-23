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
import MailIcon from "@mui/icons-material/MailOutline";
import InboxIcon from "@mui/icons-material/InboxOutlined";
import { FC, useState } from "react";
import Logo from "../components/Logo";
import { NavLink, Link } from "react-router-dom";
import theme from "../theme";
import MenuIcon from "@mui/icons-material/Menu";

const Mennu: FC = () => {
  const menuItems = ["About Us", "Our Wine", "Blog"];
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
          <Typography variant="h5">Floray Wines</Typography>
        </Box>
        {!isPhone && (
          <Box sx={{ display: "flex", gap: "8px" }}>
            {menuItems.map((item, idx, arr) => {
              return (
                <NavLink
                  key={idx}
                  to={`/${item.replace(" ", "-").toLowerCase()}`}
                >
                  <Button>{item}</Button>
                </NavLink>
              );
            })}
          </Box>
        )}
        {isPhone && (
          <IconButton color="inherit" aria-label="menu" size="large">
            <MenuIcon fontSize="large" onClick={() => setDrawer(!drawer)} />
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
          // flexShrink: 0,
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
          }}
        >
          <List>
            {menuItems.map((item, idx) => (
              <>
                {idx !== 0 && <Divider variant="middle" />}
                <Link
                  to={`/${item.replace(" ", "-").toLowerCase()}`}
                  onClick={() => setDrawer(false)}
                >
                  <ListItem key={item}>
                    <ListItemButton>
                      <ListItemIcon>
                        {idx % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={item} />
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

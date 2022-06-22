import {
  Box,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { FC } from "react";
import Logo from "../components/Logo";
import { NavLink, Link } from "react-router-dom";
import theme from "../theme";
import MenuIcon from "@mui/icons-material/Menu";

const Mennu: FC = () => {
  const menuItems = ["About Us", "Our Wine", "Blog"];
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
        padding: theme.spacing(3),
        gap: theme.spacing(4),
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
          <MenuIcon fontSize="large" />
        </IconButton>
      )}
    </Box>
  );
};

export default Mennu;

import {
  AppBar,
  Toolbar,
  Typography,
  Switch,
  List,
  Link,
  IconButton,
  Badge,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface Props {
  toggleTheme(): void;
}

const midLinks = [
  { name: "Catalog", path: "/catalog" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
];

const rightLinks = [
  { name: "Login", path: "/login" },
  { name: "Register", path: "/register" },
];

const navStyle = {
  color: "inherit",
  "&:hover": {
    color: "secondary.main",
  },
  "&.active" : {
    color : "text.secondary"
  },
  textDecoration : 'none'
}

const Header = ({ toggleTheme }: Props) => {
  return (
    <>
      <AppBar position="static" sx={{ mb: 2 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ textTransform: "uppercase" }}
          >
            E-Commerce App
            <Switch onClick={() => toggleTheme()} />
          </Typography>

          <List sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            {midLinks.map((item) => (
              <Link
                component={NavLink}
                to={item.path}
                variant="h6"
                sx={navStyle}
                key={item.path}
              >
                <Typography textAlign="center">
                  {item.name.toUpperCase()}
                </Typography>
              </Link>
            ))}
          </List>

          <List
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <Badge badgeContent={4} color="warning">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            {rightLinks.map((item) => (
              <Link
                component={NavLink}
                to={item.path}
                underline="none"
                variant="h6"
                sx={navStyle}
                key={item.path}
              >
                <Typography>{item.name.toUpperCase()}</Typography>
              </Link>
            ))}
          </List>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

import { AppBar, Box, Toolbar, Typography, Switch } from "@mui/material";

interface Props  {
  toggleTheme(): void
}

const Header = ({ toggleTheme} : Props) => {
  return (
    <>
      <Box sx={{ flexGrow: 1, backgroundColor: "red", mb: 4 }} >
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, textTransform: "uppercase" }}
            >
              E-Commerce App
              <Switch onClick={() => toggleTheme()} />
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;

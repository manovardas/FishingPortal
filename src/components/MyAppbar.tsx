import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";

export default function MyAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Lietuvos žvejybos naujienos
          </Typography>
          <Button color="inherit">Prisijungti</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

import React, { useState } from 'react';
import {
  Box, CssBaseline, Drawer, AppBar, Toolbar, List, Typography, Divider, ListItem, ListItemIcon, ListItemText, Switch, IconButton, Menu, MenuItem, FormControlLabel
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Para el ícono del menú
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import { Routes, Route, Link } from 'react-router-dom';
import Inicio from '../../pages/home'; // Ajusta la ruta según tu estructura de carpetas
import Presupuestos from '../../pages/budget'; // Ajusta la ruta según tu estructura de carpetas
import Clientes from '../../pages/client'; // Ajusta la ruta según tu estructura de carpetas
import Maquinas from '../../pages/machines'; // Ajusta la ruta según tu estructura de carpetas
import { useThemeContext } from '../../componemts/themeContext'; // Asegúrate de que la ruta sea correcta
import  {ParticlesContainer}  from './ParticlesFire';


const drawerWidth = 240;

const DashboardLayout: React.FC = () => {
  const { toggleColorMode } = useThemeContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false); // Inicia con el drawer cerrado
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <ParticlesContainer />
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme:any) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ marginRight: 2, ...(drawerOpen && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="configuración"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
          >
            <SettingsIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem>
              <FormControlLabel
                control={<Switch onChange={toggleColorMode} />}
                label="Apariencia"
                labelPlacement="start"
              />
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Inicio', 'Presupuestos', 'Clientes', 'Máquinas'].map((text, index) => (
              <ListItem button key={text} component={Link} to={`/${text.toLowerCase()}`}>
                <ListItemIcon>
                  {index === 0 ? <HomeIcon /> : index === 1 ? <AccountBalanceWalletIcon /> : index === 2 ? <PeopleIcon /> : <SettingsIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/presupuestos" element={<Presupuestos />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/maquinas" element={<Maquinas />} />
          </Routes>
        
      </Box>
    </Box>
  );
};

export default DashboardLayout;

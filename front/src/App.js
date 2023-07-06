import logo from './logo.svg';
import './App.css';
import { Button, Input, InputAdornment, ListItemIcon, ListItemText, MenuItem,MenuList } from '@mui/material';
import InicioIcon from '@mui/icons-material/Home';
import TareasIcon from '@mui/icons-material/Book';
import CorreoIcon from '@mui/icons-material/Email';
import BusquedaIcon from '@mui/icons-material/Search';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
      <MenuList>
        <MenuItem>
        <ListItemIcon><InicioIcon color='primary'></InicioIcon></ListItemIcon>
        <ListItemText>Inicio</ListItemText>
        </MenuItem>
        <MenuItem>
        <ListItemIcon><TareasIcon color='secondary'></TareasIcon></ListItemIcon>
        <ListItemText>Tareas</ListItemText>
        </MenuItem>
        <MenuItem>
        <ListItemIcon><CorreoIcon color='success'></CorreoIcon></ListItemIcon>
        <ListItemText>Correo</ListItemText>
        </MenuItem>
      </MenuList>
      </div>
      <div>
      <Input id="input-with-icon-adornment" startAdornment={
        <InputAdornment position="start">
          <BusquedaIcon></BusquedaIcon>
          </InputAdornment>
      }
      />
      </div>
      </header>
    </div>
  );
}

export default App;

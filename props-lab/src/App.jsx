import {recipes} from './data/data.js';
import RecipeContainer from './components/RecipeContainer.jsx';
import {Typography} from '@mui/material';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {orange, green} from '@mui/material/colors';

const theme = createTheme({
  typography: {
    fontFamily: '"Titillium Web", sans-serif'
  },
  palette: {
    primary: green,
    secondary: orange
  }
})

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h3" component="h1">Get Cookin'</Typography>
      <RecipeContainer recipes={recipes}/>
    </ThemeProvider>
  )
}

export default App

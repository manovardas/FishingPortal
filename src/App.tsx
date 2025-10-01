import MyAppBar from './components/MyAppbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
function App() {


  return (
    <div>
      <MyAppBar />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Sveikas Material UI!
        </Typography>
        <Typography>
          Testas
        </Typography>
      </Container>
    </div>
  );
}

export default App

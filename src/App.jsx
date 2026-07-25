import { HelmetProvider } from 'react-helmet-async';
import AppRoutes from './routes/AppRoutes';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <AppRoutes />
    </HelmetProvider>
  );
}

export default App;

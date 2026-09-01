import { createRoot } from 'react-dom/client'
import './styles.css';
import Serpiente from './components/Serpiente';

createRoot(document.getElementById('root')!).render(
  <>
    <Serpiente />
  </>
)
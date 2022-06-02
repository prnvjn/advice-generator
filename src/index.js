import { createRoot } from 'react-dom/client';
import Box from './components/Box'

import './index.css'
const App =()=>{
    return(

        <Box />
    )
}
const container = document.getElementById('root');
const root = createRoot(container)

root.render(<App />);
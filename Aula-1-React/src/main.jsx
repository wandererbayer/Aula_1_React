
import { createRoot } from 'react-dom/client'
import FuckSociety from './FuckSociety.jsx'
import Comment from './Comment.jsx'
import Home from './pages/Home.jsx'


createRoot(document.getElementById('root')).render(
        <>
            <FuckSociety />
            <Comment />
            <Home />
        </>
)
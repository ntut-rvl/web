import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/animate.css'
import './assets/css/style.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './views/HomePage';
import BulletinPage from './views/BulletinPage';
import MemberPage from './views/MemberPage';
import Layout from './components/Layout';

function App() {

    return (
        <HelmetProvider>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/bulletin" element={<BulletinPage />} />
                        <Route path="/member" element={<MemberPage />} />
                    </Routes>
                </Layout>
            </Router>
        </HelmetProvider>
    )
}

export default App

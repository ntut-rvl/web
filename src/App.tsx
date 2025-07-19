import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/animate.css'
import './assets/css/style.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './views/HomePage';
import BulletinPage from './views/BulletinPage';
import MemberPage from './views/MemberPage';
import PastMemberPage from './views/PastMemberPage';
import ResearchRobotVisionSystemPage from './views/ResearchRobotVisionSystemPage';
import ResearchSurveillancePage from './views/ResearchSurveillancePage';
import ResearchIntelligenceTransportationSystemPage from './views/ResearchIntelligenceTransportationSystemPage';
import ResearchComputerGraphicsAndVisualizationPage from './views/ResearchComputerGraphicsAndVisualizationPage';
import CourseDifferentialEquations from './views/CourseDifferentialEquations';
import Layout from './components/Layout';
import { ScrollToTop } from './Utils';
import ResearchDocumentImageAnalysisPage from './views/ResearchDocumentImageAnalysisPage';
import ResearchReconstructionPage from './views/ResearchReconstructionPage';
import HueiyungPage from './views/HueiyungPage';
import ProjectPage from './views/ProjectPage';

function App() {

    return (
        <HelmetProvider>
            <Router basename="/web">
                <ScrollToTop />
                <Layout>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/bulletin" element={<BulletinPage />} />
                        <Route path="/hueiyung" element={<HueiyungPage />} />
                        <Route path="/member" element={<MemberPage />} />
                        <Route path="/past_members" element={<PastMemberPage />} />
                        <Route path='/research/rvs' element={<ResearchRobotVisionSystemPage />} />
                        <Route path='/research/dia' element={<ResearchDocumentImageAnalysisPage />} />
                        <Route path='/research/sur' element={<ResearchSurveillancePage />} />
                        <Route path='/research/its' element={<ResearchIntelligenceTransportationSystemPage />} />
                        <Route path='/research/cgv' element={<ResearchComputerGraphicsAndVisualizationPage />} />
                        <Route path='/research/reconstruct' element={<ResearchReconstructionPage />} />
                        <Route path='/course/differential_equations' element={<CourseDifferentialEquations />} />
                        <Route path="/project" element={<ProjectPage />} />
                    </Routes>
                </Layout>
            </Router>
        </HelmetProvider>
    )
}

export default App

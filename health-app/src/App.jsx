import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Events from './pages/Events'
import DoctorPortal from './pages/DoctorPortal'
import LeaderBoard from './pages/LeaderBoard'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/dashboard" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                </Route>
                <Route path="/events" element={<Layout />}>
                    <Route index element={<Events />} />
                </Route>
                <Route path="/leaderboard" element={<Layout />}>
                    <Route index element={<LeaderBoard />} />
                </Route>
                <Route path="/doctorportal" element={<Layout />}>
                    <Route index element={<DoctorPortal />} />
                </Route>
                <Route path="/" element={<Register />} />
            </Routes>
        </Router>
    )
}

export default App

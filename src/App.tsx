/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Community from './pages/Community';
import Marketplace from './pages/Marketplace';
import Profile from './pages/Profile';
import ProjectTutorial from './pages/ProjectTutorial';
import ImpactSummary from './pages/ImpactSummary';
import Scanner from './pages/Scanner';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/tutorial/:id" element={<ProjectTutorial />} />
        <Route path="/impact-summary/:id" element={<ImpactSummary />} />
        <Route path="/app/scan" element={<Scanner />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="community" element={<Community />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

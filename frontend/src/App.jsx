import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/home_page';
import TopicPage from './pages/topic_page';
import SubTopicPage from './pages/sub_topic_page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/topic" element={<TopicPage />} />
        <Route path="/sub-topic" element={<SubTopicPage />} />
      </Routes>
    </Router>
  )
}

export default App;
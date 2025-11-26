import React from 'react';
import { HashRouter, Routes, Route, ScrollRestoration } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import Home from './components/Home';
import ArticleView from './components/ArticleView';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-tech-900 font-sans selection:bg-tech-accent selection:text-tech-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryName" element={<Home />} />
            <Route path="/search/:searchQuery" element={<Home />} />
            <Route path="/post/:id" element={<ArticleView />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
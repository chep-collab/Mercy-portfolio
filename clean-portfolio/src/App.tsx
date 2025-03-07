import React, { useState } from 'react'; // Ensure React is imported
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import theme from './theme';

function App() {
  const [themeMode, setThemeMode] = useState<'dark' | 'light'>('dark');

  const dynamicTheme = {
    ...theme,
    palette: {
      ...theme.palette,
      mode: themeMode,
      background: {
        default: themeMode === 'dark' ? '#0a1929' : '#f0f0f0',
        paper: themeMode === 'dark' ? '#132f4c' : '#e0e0e0',
      },
    },
  };

  const toggleTheme = () => {
    setThemeMode(themeMode === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeProvider theme={dynamicTheme}>
      <CssBaseline />
      <Router>
        <Header themeMode={themeMode} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h2 style={{ textAlign: 'center', color: themeMode === 'dark' ? 'white' : 'black' }}>404 - Page Not Found</h2>} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;

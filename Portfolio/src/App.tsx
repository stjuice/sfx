import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import { CategoryLight } from 'pages/home/category';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category-light" element={<CategoryLight />} />
      </Routes>
    </Router>
  );
}

export default App;

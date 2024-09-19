import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ArticleList from './pages/ArticleList';
import Articles from './pages/Articles';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="max-w-screen-md mx-auto pt-20">
      <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/about' element = {<About/>} />
      <Route path='/articlelist' element = {<ArticleList />} />
      <Route path='/articles/:name' element = {<Articles />} />
      <Route path='*' element = {<NotFound />} />
      
      </Routes>
      </div>
      </Router>);
}

export default App;
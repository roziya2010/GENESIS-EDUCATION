import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Information from './components/Information'
import Homepage from './components/Homepage'
import News from './components/News&media'
import Contactus from './components/Contactus'
import Footer from './components/Footer'
import Movies from './components/Movies'
import Tv from './components/Tv'
import Series from './components/Series'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/information" element={<Information />} />
          <Route path="/news_media" element={<News />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/series" element={<Series />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

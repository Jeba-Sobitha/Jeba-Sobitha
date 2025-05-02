import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import MainPage from './Components/MainPage/MainPage';
import History from './Components/History/History';
import Maths from './Components/Maths/Maths';
import Science from './Components/Science/Science';
import Story from './Components/Story/Story';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <main className='main'>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/history' element={<History />} />
          <Route path='/maths' element={<Maths />} />
          <Route path='/science' element={<Science />} />
          <Route path='/story' element={<Story />} />
        </Routes>
      <Footer />
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

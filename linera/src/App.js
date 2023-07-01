import { Route, Routes } from 'react-router-dom';
import './App.css';
import StarsCanvas from './components/canvas/Stars'
import Chats from './components/chatsSection/Chats'
import Navbar from './components/Navbar'
import Home from './components/Home/Home';
import Nfts from './components/Nfts/Nfts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/chats" element={<Chats />}/>
        <Route path="/nfts" element={<Nfts />}/>
      </Routes>
    </div>
  );
}

export default App;

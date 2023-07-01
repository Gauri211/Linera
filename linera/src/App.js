import { Route, Routes } from 'react-router-dom';
import './App.css';
import StarsCanvas from './components/canvas/Stars'
import Chats from './components/chatsSection/Chats'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <StarsCanvas />
      <Navbar />
      <Routes>
        <Route path="/chats" element={<Chats />}/>
      </Routes>
    </div>
  );
}

export default App;

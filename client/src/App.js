import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ChatPage from './components/ChatPage';
import socketIO from 'socket.io-client';

const socket = socketIO.connect('https://joeboxback.onrender.com');
// var socket = io('https://joeboxback.onrender.com', { transports : ['websocket'] });
function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Home socket={socket} />} />
                    <Route path="/chat/:roomCode" element={<ChatPage socket={socket} />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'https://joebox.onrender.com'); // Allow requests from joebox.onrender.com
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Specify allowed HTTP methods
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Specify allowed headers
//     next();
//   });
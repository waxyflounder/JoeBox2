import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setUser, setRoomId, setSocketId} from '../Redux/roomSlice'

const ChatBody = ({ messages, lastMessageRef, socket }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //const roomId = useSelector((state) => state.room.roomId);

    const handleLeaveChat = () => {
        //update Redux store with roomId
        dispatch(setUser(null));
        dispatch(setRoomId(null));
        dispatch(setSocketId(null));

        localStorage.removeItem('userName');
        navigate('/');
        window.location.reload();
    };

    const handleGameStart = () => {
    // Emit 'startGame' message to Socket.IO
    socket.emit('startGame', { /* data to be sent (optional) */ }); // Replace with relevant data if needed
    };

    return (
        <>
            <header className="chat__mainHeader">
                <p>Joe Box!</p>
                <button className="gameStart_btn" onClick={handleGameStart}>START GAME</button>
                <button className="leaveChat__btn" onClick={handleLeaveChat}>
                    LEAVE CHAT
                </button>
            </header>

            <div className="message__container">
                {messages.map((message) => {
                    const isCurrentUser = message.name === localStorage.getItem('userName');
                    return (
                        <div className="message__chats" key={message.id}>
                            <p className="sender__name">{isCurrentUser ? "You" : message.name}</p>
                            <div className={isCurrentUser ? "message__sender" : "message__recipient"}>
                                <p>{message.text}</p>
                            </div>
                        </div>
                    );
                })}

                {/* <div className="message__status">
                    <p>Someone is typing...</p>
                </div> */}
                <div ref={lastMessageRef} />
            </div>
        </>
    );
};

export default ChatBody;

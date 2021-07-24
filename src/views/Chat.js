import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './../components/ChatFeed';
import LoginForm from './../components/LoginForm';
import './Chat.css';

const projectID = 'c6dcb9ed-f2b8-4c95-ab00-71626988532d';

function handleLogout() {
  localStorage.clear();
  window.location.reload();
}

const Chat = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">STEGANO CHAT</div>
        <div className="logout-tab" onClick={handleLogout}>
          Logout
        </div>
      </div>

      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>
  );
};

export default Chat;

import { useState } from 'react';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';
import EncryptDialog from './SteganoMessage';
import DecryptDialog from './Steganodecode';

const MessageForm = (props) => {
  const [value, setValue] = useState('');
  const { chatId, creds } = props;

  const handleChange = (event) => {
    setValue(event.target.value);

    isTyping(props, chatId);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = value.trim();

    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }

    setValue('');
  };

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: '' });
  };

  return (
    <>
      <div className="flex flex-row">
      <EncryptDialog className="stegano__icon" />
      <DecryptDialog className="stegano__icon" />
      </div>
      <form className="message-form" onSubmit={handleSubmit}>
        <input
          className="message-input"
          placeholder="Send a message..."
          value={value}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <input
          type="file"
          multiple={false}
          id="upload-button"
          style={{ display: 'none' }}
          onChange={handleUpload.bind(this)}
        />
        <label htmlFor="upload-button">
          <span className="image-button">
            <PictureOutlined className="picture-icon" />
          </span>
        </label>
        <button type="submit" className="send-button">
          <SendOutlined className="send-icon" />
        </button>
      </form>
    </>
  );
};

export default MessageForm;

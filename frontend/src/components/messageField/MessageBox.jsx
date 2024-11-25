import { useEffect, useRef } from 'react';
import styles from '@styles/MessageBox.module.scss';
import userIcon from '@assets/icons/chatIcons/person.png';
import { Image } from 'react-bootstrap';

const MessageBox = ({ messages }) => {
  const endRef = useRef();
  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={styles.chat_message_box}>
      {messages?.map((item) => (
        <div className="text-nowrap mb-2" key={item.id}>
          <Image src={userIcon} className="pe-1" />
          <b>{item.username}:</b>
          <em className="p-1">{item.value}</em>
        </div>
      ))}
      <div ref={endRef} />
    </div>
  );
};
export default MessageBox;

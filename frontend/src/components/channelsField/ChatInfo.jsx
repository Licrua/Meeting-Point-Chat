import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const ChatInfo = ({ messages }) => {
  const { t } = useTranslation();
  const currentChannel = useSelector((state) => state.channels?.currentChannel);

  return (
    <div>
      <div className="ps-3 pt-1">
        <b># {currentChannel}</b>
        <p>{t('messages.counter.count', { count: messages.length })}</p>
      </div>
      <div className="border border-1" />
    </div>
  );
};

export default ChatInfo;

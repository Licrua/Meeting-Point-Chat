import React from 'react';
import styles from '@styles/Channels.module.scss';
import CombinedPopUp from '../popUpLogic/CombinedPopUp';
import ChannelsHeader from './ChannelsHeader';
import ChannelsList from './ChannelsList';

const Channels = () => {
  return (
    <div className={`${styles.chat_channels}`}>
      <CombinedPopUp />
      <ChannelsHeader />
      <ChannelsList />
    </div>
  );
};

export default Channels;

import { selectAllChannels } from '@slices/channelsSlice';
import { Stack } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useRef, useEffect } from 'react';
import ChannelDropdowns from './ChannelsDropdowns';
import ChannelButtons from './ChannelsButtons';

const ChannelsList = () => {
  const channels = useSelector(selectAllChannels);
  const scrollingRef = useRef();

  useEffect(() => {
    scrollingRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [channels]);

  return (
    <ul className={`p-3 nav nav-pills nav-fill overflowY-auto `}>
      <Stack gap={2}>
        {channels.map((item) =>
          item.removable ? (
            <ChannelDropdowns key={item.id} item={item} />
          ) : (
            <ChannelButtons item={item} key={item.id} />
          ),
        )}
        <div ref={scrollingRef} />
      </Stack>
    </ul>
  );
};

export default ChannelsList;

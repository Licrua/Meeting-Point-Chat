import { useDispatch } from 'react-redux';

const {
  setCurrentChannel,
  setCurrentChannelId,
} = require('@slices/channelsSlice');
const { Button } = require('react-bootstrap');

const ChannelButtons = ({ item }) => {
  const dispatch = useDispatch();
  const handleChannelClick = (channel) => {
    dispatch(setCurrentChannel(channel.name));
    dispatch(setCurrentChannelId(channel.id));
  };

  return (
    <Button
      key={item.id}
      variant="secondary"
      onClick={() => handleChannelClick(item)}
    >
      {item.name.length >= 8
        ? `# ${item.name.slice(0, 8)}...`
        : `# ${item.name}`}
    </Button>
  );
};

export default ChannelButtons;

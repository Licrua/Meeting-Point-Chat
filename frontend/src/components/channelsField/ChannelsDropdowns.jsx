import { setCurrentChannel, setCurrentChannelId } from '@slices/channelsSlice';
import {
  setCurrentId,
  setRemoveToggler,
  setRenameToggler,
  setToggleId,
} from '@slices/popUpSlice';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

const { SplitButton, ButtonGroup, Dropdown } = require('react-bootstrap');

const ChannelDropdowns = ({ item }) => {
  const popupState = useSelector((state) => state.popUp);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleChannelClick = (channel) => {
    dispatch(setCurrentChannel(channel.name));
    dispatch(setCurrentChannelId(channel.id));
  };

  // Обработка переключения дропдауна
  const handleToggle = (_, id) => {
    dispatch(setToggleId(id));
    dispatch(setCurrentChannelId(id));
  };

  // Обработка переименования
  const renameHandler = () => {
    dispatch(setRenameToggler(!popupState.renameToggler));
  };

  // Обработка удаления
  const deleteHandler = (id) => {
    dispatch(setCurrentId(id));
    dispatch(setRemoveToggler(!popupState.removeToggler));
  };

  return (
    <SplitButton
      as={ButtonGroup}
      variant="secondary"
      className="text-nowrap"
      title={
        item.name.length >= 8
          ? `# ${item.name.slice(0, 7)}...`
          : `# ${item.name}`
      }
      onClick={() => handleChannelClick(item)}
      id={`split-button-${item.id}`}
      onToggle={(isOpen) => handleToggle(isOpen, item.id)}
    >
      <Dropdown.Item onClick={() => deleteHandler(item.id)}>
        {t('delete')}
      </Dropdown.Item>
      <Dropdown.Item onClick={() => renameHandler(item.id)}>
        {t('rename')}
      </Dropdown.Item>
    </SplitButton>
  );
};

export default ChannelDropdowns;

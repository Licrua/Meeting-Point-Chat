import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import AddPopUpLogic from '@components/popUpLogic/AddPopUpLogic';
import RemovePopUpLogic from '@components/popUpLogic/RemovePopUpLogic';
import RenamePopUpLogic from '@components/popUpLogic/RenamePopUpLogic';
import {
  setAddToggler,
  setRemoveToggler,
  setRenameToggler,
} from '@slices/popUpSlice';
import { selectAllChannels, setCurrentChannel } from '@slices/channelsSlice';
import removeChannel from '@utils/channelsFunction/removeChannel';
import { successfullyDeletedChannel } from '@utils/toast/notify';

function usePopup() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const currentId = useSelector((state) => state.popUp.currentId);
  const popupState = useSelector((state) => state.popUp);
  const channels = useSelector(selectAllChannels);
  const channelsNames = channels?.map((item) => item.name);
  const closePopupHandlers = {
    add: () => dispatch(setAddToggler(false)),
    remove: () => dispatch(setRemoveToggler(false)),
    rename: () => dispatch(setRenameToggler(false)),
  };

  const handleRemove = (e, id) => {
    e.preventDefault();
    removeChannel(id, localStorage.getItem('token'));
    dispatch(setCurrentChannel('general'));
    closePopupHandlers.remove();
    successfullyDeletedChannel();
  };

  const popUps = [
    {
      id: 'add',
      title: t('addChannel'),
      condition: popupState.addToggler,
      renderContent: () => (
        <AddPopUpLogic
          channelsNames={channelsNames}
          closePopupHandlers={closePopupHandlers}
        />
      ),
    },
    {
      id: 'remove',
      title: t('deleteChannel'),
      condition: popupState.removeToggler,
      renderContent: () => (
        <RemovePopUpLogic
          currentId={currentId}
          handleRemove={handleRemove}
          closePopupHandlers={closePopupHandlers}
        />
      ),
    },
    {
      id: 'rename',
      title: t('renameChannel'),
      condition: popupState.renameToggler,
      renderContent: () => (
        <RenamePopUpLogic
          channelsNames={channelsNames}
          closePopupHandlers={closePopupHandlers}
        />
      ),
    },
  ];

  return popUps;
}

export default usePopup;

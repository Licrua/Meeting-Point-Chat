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
import { selectAllChannels, setConcurrentChannel } from '@slices/channelsSlice';
import removeChannel from '@utils/channelsFunction/removeChannel';
import { successfullyDeletedChannel } from '@utils/toast/notify';
import { useRef, useEffect } from 'react';

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
    dispatch(setConcurrentChannel('general'));
    closePopupHandlers.remove();
    successfullyDeletedChannel();
  };

  const firstFieldFocusRef = useRef();
  const secondFieldFocusRef = useRef();

  useEffect(() => {
    firstFieldFocusRef.current?.focus();
    secondFieldFocusRef.current?.focus();
  }, []);

  const popUps = [
    {
      id: 'add',
      title: t('addChannel'),
      condition: popupState.addToggler,
      renderContent: () => (
        <AddPopUpLogic
          channelsNames={channelsNames}
          closePopupHandlers={closePopupHandlers}
          firstFieldFocusRef={firstFieldFocusRef}
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
          secondFieldFocusRef={secondFieldFocusRef}
        />
      ),
    },
  ];

  return popUps;
}

export default usePopup;
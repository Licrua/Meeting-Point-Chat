import { useTranslation } from 'react-i18next';

const { Button } = require('react-bootstrap');

const RemovePopUpLogic = ({ closePopupHandlers, handleRemove, currentId }) => {
  const { t } = useTranslation();
  return (
    <div className="d-flex justify-content-center gap-2">
      <Button
        type="button"
        onClick={closePopupHandlers.remove}
        variant="secondary"
      >
        {t('cancel')}
      </Button>
      <Button
        variant="danger"
        type="button"
        onClick={(e) => handleRemove(e, currentId)}
      >
        {t('delete')}
      </Button>
    </div>
  );
};

export default RemovePopUpLogic;

import React, { useRef, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Form as BootstrapForm, Button } from 'react-bootstrap';
import { editChannel } from '@utils/channelsFunction/editChannel';
import { successfullyRenamedChannel } from '@utils/toast/notify';
import styles from '@styles/CombinedPopUp.module.scss';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const RenamePopUpLogic = ({ channelsNames, closePopupHandlers }) => {
  const { t } = useTranslation();
  const currentId = useSelector((state) => state.channels?.currentChannelId);
  const inputRef = useRef(null);

  useEffect(() => {
    // Пауза для рендеринга компонента перед установкой фокуса
    setTimeout(() => inputRef?.current.focus(), 0);
  }, []);

  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={{ value: '' }}
      validationSchema={Yup.object({
        value: Yup.string()
          .max(20, t('validation.username'))
          .min(3, t('validation.username'))
          .trim()
          .required(t('validation.requiredField'))
          .notOneOf(channelsNames || [], t('validation.unuqieChannel')),
      })}
      onSubmit={(values, { setSubmitting }) => {
        editChannel(currentId, localStorage.getItem('token'), values.value);

        setSubmitting(false);
        successfullyRenamedChannel();

        closePopupHandlers.rename();
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <div className="mb-3">
            <BootstrapForm.Control
              innerRef={inputRef}
              autoFocus
              as={Field}
              type="text"
              id="value"
              name="value"
              isInvalid={touched.value && errors.value}
              className={styles.field}
            />
            <BootstrapForm.Label className="visually-hidden" htmlFor="value">
              channelName
            </BootstrapForm.Label>
            <ErrorMessage
              className={styles.error_message}
              name="value"
              component="div"
            />
          </div>
          <div className="d-flex justify-content-center gap-2 mb-2">
            <Button
              type="button"
              onClick={closePopupHandlers.rename}
              variant="secondary"
            >
              {t('cancel')}
            </Button>
            <Button type="submit" variant="success" disabled={isSubmitting}>
              {t('rename')}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RenamePopUpLogic;

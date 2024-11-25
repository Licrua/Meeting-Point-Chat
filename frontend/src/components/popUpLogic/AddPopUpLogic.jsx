import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Form as BootstrapForm, Button } from 'react-bootstrap';
import addChannel from '@utils/channelsFunction/addChannel';
import { successfullyCreatedChannel } from '@utils/toast/notify';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import styles from '@styles/CombinedPopUp.module.scss';

const AddPopUpLogic = ({ channelsNames, closePopupHandlers }) => {
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{ name: '' }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(20, t('validation.username'))
          .min(3, t('validation.username'))
          .trim()
          .required(t('validation.requiredField'))
          .notOneOf(channelsNames, t('validation.unuqieChannel')),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        const obj = {
          id: _.uniqueId(),
          name: values.name.trim(),
          removable: true,
        };
        try {
          addChannel(localStorage.getItem('token'), obj);
          successfullyCreatedChannel();
          closePopupHandlers.add();
          resetForm();
        } catch (error) {
          console.error(error);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <div className="mb-3">
            <BootstrapForm.Control
              as={Field}
              autoFocus
              type="text"
              id="name"
              name="name"
              isInvalid={touched.name && errors.name}
              className={styles.field}
            />
            <BootstrapForm.Label className="visually-hidden" htmlFor="name">
              channelName
            </BootstrapForm.Label>
            <ErrorMessage
              className={styles.error_message}
              name="name"
              component="div"
            />
          </div>
          <div className="d-flex justify-content-center gap-2 mb-2">
            <Button
              variant="secondary"
              onClick={closePopupHandlers.add}
              type="button"
            >
              {t('cancel')}
            </Button>
            <Button variant="dark" disabled={isSubmitting} type="submit">
              {t('create')}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddPopUpLogic;

import { Form as BootstrapForm, Button } from 'react-bootstrap';
import { Field, ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';
import formFields from '@data/login/loginFields';

const LoginFields = ({ touched, errors }) => {
  const { t } = useTranslation();
  return (
    <>
      {formFields.map(({ id, label, type }) => (
        <BootstrapForm.Group key={id}>
          <BootstrapForm.Label htmlFor={id}>{t(label)}</BootstrapForm.Label>
          <BootstrapForm.Control
            className="mb-1"
            as={Field}
            type={type}
            name={id}
            id={id}
            autoFocus={id === 'username'}
            isInvalid={touched[id] && !!errors[id]}
          />
          <ErrorMessage
            name={id}
            component="div"
            className="text-danger fs-5"
          />
        </BootstrapForm.Group>
      ))}
      <Button className="mt-3" variant="outline-primary" type="submit">
        {t('loginFields.logIn')}
      </Button>
    </>
  );
};

export default LoginFields;

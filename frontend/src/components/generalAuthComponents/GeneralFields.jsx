import { Form as BootstrapForm, Button, Col } from 'react-bootstrap';
import { Field, ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';

const GeneralFields = ({ touched, errors, formFields, buttonText }) => {
  const { t } = useTranslation();
  return (
    <Col
      xs={6}
      lg={4}
      className="d-flex gap-2 flex-column justify-content-center"
    >
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
      <Button
        className="mt-3"
        id="login-button"
        variant="outline-primary"
        type="submit"
      >
        {t(buttonText)}
      </Button>
    </Col>
  );
};

export default GeneralFields;

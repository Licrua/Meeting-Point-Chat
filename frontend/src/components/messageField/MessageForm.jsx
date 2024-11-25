import { useTranslation } from 'react-i18next';
import { Formik, Form, Field } from 'formik';
import { Button, Form as FormControl, InputGroup } from 'react-bootstrap';
import useMessageSubmit from 'hooks/useMessageSubmit';

const MessageForm = () => {
  const { onSubmitLogic } = useMessageSubmit();

  const { t } = useTranslation();
  return (
    <div>
      <Formik initialValues={{ message: '' }} onSubmit={onSubmitLogic}>
        {({ isSubmitting }) => (
          <Form>
            <InputGroup className="mb-3 d-flex justify-content-center">
              <FormControl
                as={Field}
                autoFocus
                className="border rounded border-3  w-75"
                name="message"
                type="text"
                placeholder={t('text')}
                aria-label="users message field"
                aria-describedby="basic-addon1"
              />
              <Button
                disabled={isSubmitting}
                type="submit"
                id="button-addon1"
                className=" opacity-75"
              >
                {'\u21AA'}
              </Button>
            </InputGroup>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MessageForm;

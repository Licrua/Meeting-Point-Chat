import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import useLoginSubmit from 'hooks/useLoginSubmit';
import GeneralImage from '@components/generalAuthComponents/GeneralImage';
import loginImage from '@assets/icons/authIcons/pngwing.com.png';
import GeneralFields from '@components/generalAuthComponents/GeneralFields';
import loginFields from '@data/login/loginFields';

const LoginForm = () => {
  const { t } = useTranslation();
  const [usersArray, setUsersArray] = useState([]);
  const { onSubmitLogic } = useLoginSubmit();

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('username'));
    const usernames = storedUsers?.map((item) => item.name);
    if (storedUsers) {
      setUsersArray(usernames);
    }
  }, []);

  const validationSchema = Yup.object({
    username: Yup.string()
      .required(t('validation.requiredField'))
      .oneOf(usersArray, t('validation.incorrectData')),
    password: Yup.string().required(t('validation.requiredField')),
  });

  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={{ username: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmitLogic}
    >
      {({ touched, errors }) => (
        <Form noValidate>
          <Row>
            <span
              style={{
                color: 'white',
                backgroundColor: 'black',
                textShadow: '10px 4px 20px rgba(25, 141, 69, 1)',
              }}
            />
            <GeneralImage image={loginImage} />
            <GeneralFields
              buttonText="loginFields.logIn"
              formFields={loginFields}
              touched={touched}
              errors={errors}
            />
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;

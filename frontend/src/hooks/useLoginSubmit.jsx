import { useNavigate } from 'react-router-dom';
import loginOnSubmitLogic from '@utils/loginOnSubmitLogic';

const useLoginSubmit = () => {
  const navigate = useNavigate();
  const onSubmitLogic = async (values, { setSubmitting }) => {
    setSubmitting(true);
    try {
      await loginOnSubmitLogic(values);
      navigate('/');
    } catch (error) {
      console.error('Authorization error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return { onSubmitLogic };
};

export default useLoginSubmit;

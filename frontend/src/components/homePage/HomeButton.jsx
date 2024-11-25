import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const HomeButton = () => {
  const navigation = useNavigate();
  const onClickHandler = () => {
    navigation('/login');
  };
  return (
    <Button
      id="login-button"
      onClick={onClickHandler}
      style={{ letterSpacing: '5px' }}
    >
      Начать общение
    </Button>
  );
};
export default HomeButton;

import AuthPage from '@components/pages/AuthPage';
import ChatPage from '@components/pages/ChatPage';

const routes = [
  { component: <AuthPage />, id: 1, path: '/login' },
  { component: <AuthPage />, id: 2, path: '/signUp' },
  { component: <ChatPage />, id: 3, path: '/chatPage' },
];

export default routes;

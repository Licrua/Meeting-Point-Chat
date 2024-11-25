import styles from '@styles/Home.module.scss';
import mp4 from '@assets/videos/vecteezy_animation-of-chat-notifications_13106382.mp4';
import webm from '@assets/videos/vecteezy_animation-of-chat-notifications_13106382.webm';

const HomeVideo = ({ visibleHandler }) => {
  return (
    <video
      onEnded={visibleHandler}
      autoPlay
      muted
      className={styles.background_video}
    >
      <source src={mp4} type="video/mp4" />
      <source src={webm} type="video/webm" />
    </video>
  );
};
export default HomeVideo;

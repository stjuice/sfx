import styles from './GreetingMessage.module.scss';

import TextBlock from '../textBlock/TextBlock';

const GreetingMessage = () => {
  const welcomeTextKey = [
    'WelcomeTitle',
  ];

  const helloTextKeys = [
    'Hello',
  ];

  const nameValueKeys = [
    'Name',
  ];
  
  const textKeys = [
    'PortfolioTitle',
    'PortfolioDescription',
  ];

  return (
    <div className={styles.greetingMessage}>
      <TextBlock textKeys={welcomeTextKey} />
      <TextBlock textKeys={helloTextKeys} valueKeys={nameValueKeys} />
      <TextBlock textKeys={textKeys} />
    </div>
  );
};

export default GreetingMessage;

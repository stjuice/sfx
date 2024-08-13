import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Text from 'components/text';
import styles from './GreetingMessage.module.scss';

import type { RootState } from 'behavior/rootReducer';
import TextBlock from '../textBlock/TextBlock';

const GreetingMessage = () => {
  const welcomeTextKey = [
    'WelcomeTitle',
  ];

  const textKeys = [
    'Hello',
    'PortfolioTitle',
    'PortfolioDescription',
  ];

  return (
    <div className={styles.greetingMessage}>
      <TextBlock textKeys={welcomeTextKey} />
      <TextBlock textKeys={textKeys} />
    </div>
  );
};

export default GreetingMessage;

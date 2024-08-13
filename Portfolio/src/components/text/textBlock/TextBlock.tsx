import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './TextBlock.module.scss';
import type { RootState } from 'behavior/rootReducer';

import { loadTexts } from 'behavior/texts/actions';

import Text from '../Text';

type TextBlock = {
  textKeys: string[];
};

const TextBlock = ({ textKeys }: TextBlock) => {
  const dispatch = useDispatch();
  const texts = useSelector((state: RootState) => state.texts)

  useEffect(() => {
    dispatch(loadTexts(textKeys));
  }, [dispatch, textKeys]);

  return (
    <>
      {textKeys.map((key) => (
        <Text key={key} textValue={texts[key]} className={styles[key]} />
      ))}
    </>
  );
};

export default TextBlock;

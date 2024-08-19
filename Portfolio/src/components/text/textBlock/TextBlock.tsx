import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './TextBlock.module.scss';
import type { RootState } from 'behavior/rootReducer';
import { loadTexts } from 'behavior/texts/actions';
import Text from '../Text';

type TextBlockType = {
  textKeys: string[];
  valueKeys?: string[];
  className?: string;
};

const TextBlock = ({ textKeys, valueKeys = [], className='' }: TextBlockType) => {
  const dispatch = useDispatch();
  const texts = useSelector((state: RootState) => state.texts);

  useEffect(() => {
    dispatch(loadTexts(textKeys.concat(valueKeys)));
  }, [dispatch, textKeys]);

  const getText = (textKey: string) => {
    let text = texts[textKey] || '';

    valueKeys.forEach((key, index) => {
      const value = texts[key] || '';      
      const placeholder = new RegExp(`\\{${index}\\}`, 'g');
      text = text.replace(placeholder, value);
    });

    return text;
  };

  return (
    <>
      {textKeys.map((key) => (
        <Text key={key} textValue={getText(key)} className={className || styles[key]} />
      ))}
    </>
  );
};

export default TextBlock;

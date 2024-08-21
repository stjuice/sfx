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

    // Replace placeholders with values
    text = replacePlaceholders(text, valueKeys.map(key => texts[key] || ''));

    return text;
  };

  return (
    <>
      {textKeys.map((key) => (
        <Text key={key} textValue={getText(key)} className={className || styles[key] || ''} />
      ))}
    </>
  );
};

export default TextBlock;

const replacePlaceholders = (text: string, values: string[]): string => {
  return text.replace(/\{(\d+)\}/g, (match, index) => {
    const value = values[parseInt(index, 10)] || '';
    return value;
  });
};
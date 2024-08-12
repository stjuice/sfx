import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store, { RootState } from '../../store';
import { loadTexts } from '../../behavior/texts/actions';

type Text = {
  textKey: string;
  className?: string;
};

type TextState = {
  [key: string]: string;
};

const Text = ({ textKey, className }: Text) => {
  const dispatch = useDispatch();
  const textValue = useSelector((state: RootState) => state.texts[textKey])

  useEffect(() => {
    dispatch(loadTexts([textKey]));
  }, [dispatch, textKey]);


  return (
    <p className={className}>
      {textValue}
    </p>
  );
};

export default Text;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from 'behavior/rootReducer';

import { loadTexts } from 'behavior/texts/actions';

type Text = {
  textKey: string;
  className?: string;
};

const Text = ({ textKey, className }: Text) => {
  const dispatch = useDispatch();
  const textValue = useSelector((state: RootState) => state.texts[textKey])

  useEffect(() => {
    dispatch(loadTexts([textKey]));
  }, [dispatch, textKey]);


  return <p className={className}>{textValue}</p>;
};

export default Text;

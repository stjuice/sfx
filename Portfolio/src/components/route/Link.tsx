import { RootState } from 'behavior/rootReducer';
import { loadTexts } from 'behavior/texts/actions';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Link = ({ href, textKey, className = '', children }: LinkProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    textKey && dispatch(loadTexts([textKey]));
  }, [dispatch, textKey]);
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {textKey || children}
    </a>
  );
};

type LinkProps = {
  href: string;
  textKey?: string;
  className?: string;
  children?: React.ReactNode;
};

export default Link;

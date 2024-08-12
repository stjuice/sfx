import { ReactNode, useMemo, useRef } from 'react';
import { useDispatch } from 'react-redux';
import TextsContext from './TextsContext';
import { loadTexts } from '../../behavior/texts/actions';

type Props = {
  children: ReactNode;
};

const TextsProvider = ({ children }: Props) => {
  const requestedKeys = useRequestedKeys();
  const dispatch = useDispatch();

  const context = {
    loadTexts(textKeys: string[]): void {
      const keysToRequest = [];
  
      for (const key of textKeys) {
        if (requestedKeys.has(key)) continue;
  
        keysToRequest.push(key);
        requestedKeys.add(key);
      }
  
      if (keysToRequest.length) dispatch(loadTexts(keysToRequest));
    }
  };

  return (
    <TextsContext.Provider value={context}>
      {children}
    </TextsContext.Provider>
  );
};

export default TextsProvider;

function useRequestedKeys() {
  const ref = useRef<Set<string>>();
  if (!ref.current)
    ref.current = new Set<string>();

  return ref.current;
}
import React from 'react';

type TextsContext = {
  loadTexts(textKeys: string[]): void;
};

export default React.createContext({} as TextsContext);

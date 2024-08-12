export const TEXTS_REQUESTED = 'TEXTS_REQUESTED' as const;
export const loadTexts = (keys: string[]) => ({
  type: TEXTS_REQUESTED,
  payload: keys,
});

export type TextAction = ReturnType<typeof loadTexts>;
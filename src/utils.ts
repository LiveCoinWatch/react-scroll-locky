export type GapMode = 'padding' | 'margin';

const getOffset = (gapMode: GapMode) => {
  const cs = window.getComputedStyle(document.body);
  const value = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];
  return parseInt(value || '', 10) || 0;
};

export const getOffsetTop = () => {
  if (typeof window === 'undefined') {
    return 0;
  }
  const cs = window.getComputedStyle(document.body);
  const value = cs.marginTop;
  return parseInt(value || '', 10) || 0;
};


export const getGapWidth = (gapMode: GapMode = 'margin') => {
  if (typeof window === 'undefined') {
    return 0;
  }
  const currentOffset = getOffset(gapMode);
  const documentWidth = document.documentElement.clientWidth;
  const windowWidth = window.innerWidth;
  return Math.max(0, windowWidth - documentWidth + currentOffset);
};
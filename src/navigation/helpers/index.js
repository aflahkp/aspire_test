import {createRef} from 'react';

export const navigationRef = createRef(null);

export const goBack = () => {
  navigationRef.current.goBack?.();
};

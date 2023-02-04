import { useRef, useEffect } from 'react';

const useDocumentTitle = (title, prevailOnUnmount) => {
  const defaultTitle = useRef(document.title);
  useEffect(() => {
    document.title = title + ' | Vladyslav Pshevlotskyi';
  }, [title]);

  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current;
      }
    },
    []
  );
};
export default useDocumentTitle;

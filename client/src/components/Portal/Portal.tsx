import { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function Portal({ children }: { children: ReactNode }) {
  const portalElement = document.createElement('div');
  portalElement.setAttribute('id', `portal${Date.now()}`);

  useEffect(() => {
    document.body.appendChild(portalElement);

    return () => {
      document.body.removeChild(portalElement);
    };
  }, [portalElement]);

  return ReactDOM.createPortal(children, portalElement);
}

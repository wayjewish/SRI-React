import ReactDOM from 'react-dom';

export default function Portal({ children }: { children: React.ReactNode }) {
  const container = document.querySelector('.portals');
  if (!container) return null;

  return ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    container,
  );
}

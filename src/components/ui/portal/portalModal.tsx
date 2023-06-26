'use client';
import ReactDOM from 'react-dom';

export default function PortalModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const container = document.querySelector('.portalsModal');
  if (!container) return null;

  return ReactDOM.createPortal(children, container);
}

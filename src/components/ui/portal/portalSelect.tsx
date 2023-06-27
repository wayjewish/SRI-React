'use client';
import ReactDOM from 'react-dom';

export default function PortalSelect({
  children,
}: {
  children: React.ReactNode;
}) {
  const container = document.querySelector('.portalSelect');
  if (!container) return null;

  return ReactDOM.createPortal(children, container);
}

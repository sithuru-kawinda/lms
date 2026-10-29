import { Link } from 'react-router-dom';

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className={`logo${light ? ' logo--light' : ''}`} aria-label="ClassLms home">
      <img src="/logo-mark.png" alt="" width={34} height={34} />
      <span>ClassLms</span>
    </Link>
  );
}

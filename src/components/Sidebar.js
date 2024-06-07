import Link from 'next/link';
import '../styles/Sidebar.css';
import { useRouter } from 'next/router';

function Sidebar() {
    const router = useRouter();
  
    const isActive = (pathname) => router.pathname === pathname;
  
    return (
      <div className="sidebar">
        <ul>
          <li className={isActive('/user-profile') ? 'active' : ''}>
            <Link href="/user-profile">User Profile</Link>
          </li>
          <li className={isActive('/nsfp-request') ? 'active' : ''}>
            <Link href="/nsfp-request">NSFP Request</Link>
          </li>
          <li className={isActive('/nsfp-list') ? 'active' : ''}>
            <Link href="/nsfp-list">NSFP List</Link>
          </li>
          <li className={isActive('/faktur-list') ? 'active' : ''}>
            <Link href="/faktur-list">Faktur List</Link>
          </li>
        </ul>
      </div>
    );
  }

export default Sidebar;

// src/components/Layout.js

import Sidebar from './Sidebar';

function Layout({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
        {children}
      </div>
    </div>
  );
}

export default Layout;

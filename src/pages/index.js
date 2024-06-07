import Sidebar from '../components/Sidebar';

export default function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Welcome to the Homepage</h1>
        <p>This is the main content area of the homepage.</p>
      </div>
    </div>
  );
}
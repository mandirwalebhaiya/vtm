export default function TestPage() {
  return (
    <div style={{ padding: '4rem', textAlign: 'center' }}>
      <h1>✅ Test Page Works!</h1>
      <p>If you can see this, the basic routing and prerendering is working.</p>
      <p>Timestamp: {new Date().toISOString()}</p>
    </div>
  );
}

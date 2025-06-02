import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error('Error:', err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Frontend is Running ✅</h1>
      <p className="mt-4 text-green-600">{message}</p>
    </div>
  );
}

export default App;


import { useEffect, useState } from 'react';
import AuthProvider from './Context/Context';
import Index from './Pages/Index';

function App() {
  const [count, setCount] = useState(0);


  return (
    <>
    <AuthProvider>
      <Index />
    </AuthProvider>
      </>
  );
}

export default App;

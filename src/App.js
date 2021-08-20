import React, { useEffect, useState } from 'react';
import { auth } from './api/firebase';
import MainApp from './components/MainApp';

function App() {
  const [signedIn, setSignedIn] = useState(false);
  useEffect(() => {
    async function fetch() {
      await auth.signInAnonymously();
      setSignedIn(true);
    }
    fetch();
  }, [setSignedIn]);
  return signedIn && (
    <MainApp />
  );
}

export default App;

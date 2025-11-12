import { useState, useEffect } from "react";
import Header from "./components/Header";
import LoadingScreen from "./components/layout/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); 
      setTimeout(() => setIsLoading(false), 500); 
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen fadeOut={fadeOut} />;
  }

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;

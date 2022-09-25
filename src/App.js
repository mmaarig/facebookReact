import './App.css';
import Header from './components/header';
import LeftBar from './components/leftBar';
import Storybox from './components/storybox';
import RightBar from './components/rightBar';
import Content from './components/content';
import { useState } from 'react';


const App = () => {
  const [themeMode, setThemeMode] = useState("dark")
  const toggleThemeMode = () => {
    // shehzad
    if (themeMode === "dark") {
      setThemeMode("light")
    }
    else {
      setThemeMode("dark")
    }
  }

  return (
    <div className={`App ${themeMode === "dark" ? "dark" : "light"}`}>
      <Header toggleThemeMode={toggleThemeMode} s={themeMode} />

      <div className='body'>
        <LeftBar />

        <div className='bsb-2p'>

          <div className='bsb-2'>
            <Storybox />
            <Content />
          </div>

        </div>

        <RightBar />

      </div>

    </div>
  );
}

export default App;
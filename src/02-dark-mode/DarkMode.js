import {useState} from "react"

export default function DarkMode () {
    const [isDark, setIsDark] = useState(false);
    
    const toDarkMode = () => {
        setIsDark(true);
    }

    const toLightMode = () => {
        setIsDark(false);
    }

    return (
      <div className={isDark ? 'page dark-mode' : 'page'}>
        <button className='dark-mode-button' onClick={() => toDarkMode()}>Dark Mode</button>
        <button className='light-mode-button' onClick={() => toLightMode()}>Light Mode</button>
      </div>
    )
  }
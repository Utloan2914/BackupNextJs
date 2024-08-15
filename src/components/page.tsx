'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div>
      <input
        type="checkbox"
        id="theme-toggle"
        className="checkbox"
        checked={theme === 'dark'}
        onChange={handleThemeChange}
        style={{ display: 'none' }}
      />
      <label
        htmlFor="theme-toggle"
        className="checkbox-label"
        style={{
          backgroundColor: '#111',
          width: '80px',
          height: '40px',
          borderRadius: '50px',
          position: 'relative',
          padding: '7px',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          
        }}
      >
        <Sun className="fa-sun" style={{ color: '#f39c12', fontSize: '24px' }} />
        <div
          className="ball"
          style={{
            backgroundColor: '#fff',
            width: '28px',
            height: '28px',
            position: 'absolute',
            left: '8px',
            top: '7px',
            borderRadius: '50%',
            transition: 'transform 0.2s linear',
            transform: theme === 'dark' ? 'translateX(35px)' : 'none',
          }}
        />
        <Moon className="fa-moon" style={{ color: '#f1c40f', fontSize: '24px' }} />
      </label>
    </div>
  );
}

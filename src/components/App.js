import React, { useState } from 'react';
import Sidebar from './Sidebar';
import styles from './App.css';

export default function App() {
  const [selected, updateSelected] = useState('home');

  const content = {
    home: 'You have made it',
    about: 'You are reading about me',
    contact: 'do not call me',
    projects: 'none yet',
  };

  return (
    <div className={styles.App}>
      <Sidebar select={updateSelected}>
        <a onClick={() => updateSelected('home')} href="#">HOME</a>
        <a onClick={() => updateSelected('about')} href="#">ABOUT</a>
        <a onClick={() => updateSelected('contact')} href="#">CONTACT</a>
        <a onClick={() => updateSelected('projects')} href="#">PROJECTS</a>
      </Sidebar>
      <p>{content[selected]}</p>
    </div>
  );
}

import React from 'react'
import Stats from './Stats.js'
import Stopwatch from './Stopwatch.js'

const Header = () => {
  return (
    <header>
      <Stats />
      <h1>Scoreboard</h1>
      <Stopwatch />
    </header>
  );
};

export default Header;
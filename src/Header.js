import React from 'react'
import PropTypes from 'prop-types'
import Stats from './Stats.js'
import Stopwatch from './Stopwatch.js'

const Header = ({ players, title }) => {
  return (
    <header>
      <Stats players={players} />
      <h1>{ title }</h1>
      <Stopwatch />
    </header>
  );
};

Header.proptypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.object)
};

Header.defaultProps = {
  title: 'Scoreboard'
};

export default Header;
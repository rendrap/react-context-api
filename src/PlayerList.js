import React from 'react';
import Player from './Player';
import { Consumer } from './Context';

const PlayerList = (props) => {

  return (
    <Consumer>
      { context => (
        <React.Fragment>
          {context.map( (player, index) =>
            <Player
              {...player}
              key={player.id.toString()}
              index={index}
              changeScore={props.changeScore}
              removePlayer={props.removePlayer}
            />
          )}
        </React.Fragment>
      )}
    </Consumer>
  );
}

export default PlayerList;
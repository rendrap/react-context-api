import React, { Component } from 'react';

const ScoreboardContext = React.createContext();

export class Provider extends Component {

  state = {
    players: [
    {
    name: 'Bambang',
    score: 0,
    id: 1
  },
  {
    name: 'Tina',
    score: 0,
    id: 2
  },
  {
    name: 'Ruby',
    score: 0,
    id: 3
  },
  {
    name: 'Eko',
    score: 0,
    id: 4
  }
    ]
  }

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score : prevState.players[index].score += delta
    }));
    // console.log('index: ' + index,'delta: ' + delta);
  };

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      };
    });
  };

  // player id counter
  prevPlayerId = 4;

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return{
        players: prevState.players.filter( p => p.id !== id )
      };
    });
  }

  getHighScore = () => {
    const scores = this.state.players.map( p => p.score );
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  }

  render() {
    const highScore = this.getHighScore();

    return(
      <ScoreboardContext.Provider value={{
        players: this.state.players,
        highScore: highScore,
        actions: {
          changeScore: this.handleScoreChange,
          removePlayer: this.handleRemovePlayer,
          addPlayer: this.handleAddPlayer
        }
      }}>
        { this.props.children}
      </ScoreboardContext.Provider>
    );
  }
}


export const Consumer = ScoreboardContext.Consumer;
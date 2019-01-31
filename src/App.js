import React, { Component } from 'react';
import { Provider } from './Context'
import Header from './Header';
import PlayerList from './PlayerList';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
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



  render() {

    return (
      <Provider value={this.state.players}>
        <div className='scoreboard'>
          <Header />

          <PlayerList
            removePlayer={this.handleRemovePlayer}
            changeScore={this.handleScoreChange}
          />

          <AddPlayerForm addPlayer={this.handleAddPlayer} />

        </div>
      </Provider>
    );
  }
};

export default App;
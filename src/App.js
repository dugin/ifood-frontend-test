import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  async componentDidMount() {
    // window.location.replace(
    //   `https://accounts.spotify.com/authorize?client_id=c99b4908da094f9a8c92d0b141ac148a&redirect_uri=${encodeURIComponent(
    //     'http://localhost:3000/callback'
    //   )}&response_type=token&state=123`
    // );

    window.open(
      `https://accounts.spotify.com/authorize?client_id=c99b4908da094f9a8c92d0b141ac148a&redirect_uri=${encodeURIComponent(
        'http://localhost:3000/callback'
      )}&response_type=token&state=123`,
      '_self'
    );

    const response = await axios.get('https://api.spotify.com/v1/browse/featured-playlists', {
      headers: {
        Authorization:
          'Bearer BQAZorLmVc0cp0EBn6B_PxKd8_2iBiC9egHSjvtRgMcivUZjyQyosSEqrb8Hv9tlMNBPici9Q_w5OoU_PpBum2zcxsdPh_R_b3oDL9VZ4JghcLDXxmLoNAFm1Ne4KJZrRGL2i9LDy6YrS-QMfg'
      }
    });

    console.log(response);
  }

  render() {
    return (
      <div className="App">
        <h1>Teste</h1>
      </div>
    );
  }
}

export default App;

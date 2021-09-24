import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ContainerApp = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContainerCriaPlaylist = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`

const FaixaPlaylist = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const ContainerMostraPlaylists = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`

const headers = {
  headers: {
    Authorization: "erico-marshall-maryam"
  }
};

export default class App extends React.Component {

  state = {
    playlists: [],
    playlistName: "",
    playlistDetail: [],
    songTitle: "",
    songArtist: "",
    songURL: "",
    playlistID: "",
  };

  componentDidMount() {
    this.getAllPlaylists();
  };

  createPlaylist = () => {

    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

    const body = {
      name: this.state.playlistName
    }

    axios
      .post(url, body, headers)
      .then((res) => {
      this.setState({playlistName: ""});
      this.getAllPlaylists();
      })
      .catch((error) => {
      alert("erro no createPlaylist -",error.response.data.message);
      })
  };

  handlePlaylistName = (event) => {
    this.setState({playlistName:event.target.value});
  };

  deletePlaylist = (playlistID) => {

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistID}`

    axios
      .delete(url, headers)
      .then((res) => {
        this.getAllPlaylists();
      }).catch((error) => {
      alert("erro no deletePlaylist -", error.response.data.mesasge);
      })
  };

  addTrackToPlaylist = (id) => {

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;

    const body = {
      name: this.state.songTitle,
      artist: this.state.songArtist,
      url: this.state.songURL
    }

    axios
      .post(url, body, headers)
      .then((res) => {
        this.setState({songTitle: ""});
        this.setState({songArtist: ""});
        this.setState({songURL: ""});
        this.getPlaylistTracks();
      })
      .catch((error) => {
        alert("erro no addTrackToPlaylist -",error.response.data.message);
      })
  }

  handleSongTitle = (event) => {
    this.setState({songTitle:event.target.value});
  }

  handleSongArtist = (event) => {
    this.setState({songArtist:event.target.value});
  }

  handleSongURL = (event) => {
    this.setState({songURL:event.target.value});
  }

  removeTrackFromPlaylist = (id) => {

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistID}/tracks/${id}`
  
    axios
      .delete(url, headers)
      .then((res) => {
        this.getPlaylistTracks(this.state.playlistID);
      })
      .catch((error) => {
        console.log("erro no removeTrack -",error.response);
      })
  };

  getAllPlaylists = () => {

    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

    axios
    .get(url, headers)
    .then((res) => {
      this.setState({playlists: res.data.result.list});
    })
    .catch((error) => {
      console.log("erro no getAllPlaylists -",error.response);
    })
  };



  getPlaylistTracks = (id) => {

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;

    axios
      .get(url, headers)
      .then((res) => {
        this.setState({playlistDetail:res.data.result.tracks});
        this.setState({playlistID:id})
        console.log(this.state.playlistID)
      })
      .catch((error) => {
        console.log("erro no getPlaylistTrack -",error.response);
      })
  };

  render () {


    const playlistComponents = this.state.playlists.map((playlist) => {
      return (
      <FaixaPlaylist key={playlist.id}>
        <button onClick={() => this.getPlaylistTracks(playlist.id)}><p>{playlist.name}</p></button>
        <button onClick={() => this.deletePlaylist(playlist.id)}>Deletar</button>
      </FaixaPlaylist>
      )
    })

    const playlistDetails = this.state.playlistDetail.map((song) => {
        return (
        <div key={song.id}>
          <p><strong>Musica:</strong> {song.name}</p>
          <p><strong>Autor:</strong> {song.artist}</p>
          <button onClick={() => this.removeTrackFromPlaylist(song.id)}>Deletar música</button>
          <iframe title={song.name} src={song.url} width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        )
    })

    return (
      <ContainerApp>
        Labefy
        <ContainerCriaPlaylist>
          <input
          placeholder="Nome da Playlist"
          value={this.state.playlistName}
          onChange={this.handlePlaylistName}
          />
          <button onClick={() => this.createPlaylist()}>Criar Playlist</button>
          
        </ContainerCriaPlaylist>
        <ContainerMostraPlaylists>
          {playlistComponents}
          
        </ContainerMostraPlaylists>
        <input
          placeholder="Nome da Música"
          value={this.state.songTitle}
          onChange={this.handleSongTitle}
          />
          <input
          placeholder="Nome do Artista"
          value={this.state.songArtist}
          onChange={this.handleSongArtist}
          />
          <input
          placeholder="URL Embed"
          value={this.state.songURL}
          onChange={this.handleSongURL}
          />
          <button onClick={() => this.addTrackToPlaylist(this.state.playlistID)}>Adicionar</button>
        {playlistDetails}
      </ContainerApp>
    );
  }
}
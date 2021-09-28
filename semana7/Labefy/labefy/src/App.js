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

  input {
    border: none;
    border-radius: 5px;
    border-bottom: 1px solid gray;
    padding: 5px;

    ::placeholder {
      font-weight: bolder;
    }
  }
`

const BotaoCriaPlaylist = styled.button`
  border: none;
  border-radius: 5px;
  background-color: darkgray;
  color: white;
  padding: 5px;
  margin: 5px;
  font-weight: bolder;

  :hover {
    color: lightgray;
  }

`

const BotaoSelecionaPlaylist = styled.button`
    margin: 0 10px;
    border-radius: 5px;
    border: none;
    font-weight: bolder;
    color: gray;

    :hover {
      color: white;
      background-color: gray;
    }

    :active {
      color: lightgray;
    }
`

const BotaoDeletaPlaylist = styled.button`
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  color: red;

  :hover {
    background-color: darkgray;
  }

  :active {
    color: orangered;
  }
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
const ContainerCriaMusica = styled.div`
  margin: 20px 0;
  display: flex;

  input {
    margin: 0 10px;
    border: none;
    border-radius: 5px;
    border-bottom: 1px solid gray;
    padding: 5px;

    ::placeholder {
      font-weight: bolder;
    }
  }

  button {
    margin: 0 10px;
    border-radius: 5px;
    border: none;
    font-weight: bolder;
    color: gray;

    :hover {
      color: white;
      background-color: gray;
    }

    :active {
      color: lightgray;
    }
  }
`

const ContainerDetalhePlaylist = styled.div`
  display: flex;
  flex-direction: column;
  background-color: gray;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 40px;
  color: white;

  button {
    font-weight: bolder;
    margin-top: 20px;
    background-color: lightgray;
    border: none;
    border-radius: 5px;
    margin-bottom: 5px;

  :hover {
    background-color: darkgray;
  }

  :active {
    color: orangered;
  }
  }
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
    this.getPlaylistTracks();
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
        this.setState({playlistID: ""})
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
        this.getPlaylistTracks(this.state.playlistID);
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
      })
      .catch((error) => {
        console.log("erro no getPlaylistTrack -",error.response);
      })
  };

  render () {


    const playlistComponents = this.state.playlists.map((playlist) => {
      return (
      <FaixaPlaylist key={playlist.id}>
        <BotaoSelecionaPlaylist onClick={() => this.getPlaylistTracks(playlist.id)}><p>{playlist.name}</p></BotaoSelecionaPlaylist>
        <BotaoDeletaPlaylist onClick={() => this.deletePlaylist(playlist.id)}>Deletar</BotaoDeletaPlaylist>
      </FaixaPlaylist>
      )
    })

    const playlistDetails = this.state.playlistDetail.map((song) => {
        return (
        <ContainerDetalhePlaylist key={song.id}>
          <p><strong>Música:</strong> {song.name}</p>
          <p><strong>Autor:</strong> {song.artist}</p>
          <button onClick={() => this.removeTrackFromPlaylist(song.id)}>Deletar música</button>
          <iframe title={song.name} src={song.url} width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </ContainerDetalhePlaylist>
        )
    })

    return (
      <ContainerApp>
        <h1>Labefy</h1>
        <ContainerCriaPlaylist>
          <input
          placeholder="Nome da Playlist"
          value={this.state.playlistName}
          onChange={this.handlePlaylistName}
          />
          <BotaoCriaPlaylist onClick={() => this.createPlaylist()}>Criar Playlist</BotaoCriaPlaylist>
          
        </ContainerCriaPlaylist>
        <ContainerMostraPlaylists>
          {playlistComponents}
          
        </ContainerMostraPlaylists>
        {this.state.playlistID === "" ? "" : <ContainerCriaMusica>
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
          </ContainerCriaMusica>}
        {playlistDetails}
      </ContainerApp>
    );
  }
}
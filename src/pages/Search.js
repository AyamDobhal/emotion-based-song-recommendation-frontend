import React from "react";
import Header from "../components/Header";
import ListAlbums from "../components/ListAlbums";
import Loading from "../components/Loading";
import fetchSongsAPI from "../services/fetchSongsAPI";
import { Button } from "../styles/components/Button";
import { MainForm } from "../styles/components/Form";
import { Input } from "../styles/components/Input";
import { MainSearch, NotFound } from "../styles/pages/Search";

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      buttonDisabled: true,
      inputText: "",
      loading: false,
      response: [],
    };
  }

  enterText = (e) => {
    const minLength = e.target.value.length;

    if (minLength >= 2) {
      this.setState({
        buttonDisabled: false,
        inputText: e.target.value,
      });
    } else {
      this.setState({
        buttonDisabled: true,
        inputText: e.target.value,
      });
    }
  };

  handleClick = () => {
    this.fetchSongs();
    // document.getElementById("inputText").value = "";
    this.setState({ inputText: " " });
  };

  fetchSongs = async () => {
    const { inputText } = this.state;
    this.setState({ loading: true });
    const response = await fetchSongsAPI(inputText);
    this.setState({ loading: false, response, inputText: " " });
  };

  render() {
    const { buttonDisabled, inputText, loading, response } = this.state;
    return (
      <MainSearch>
        <Header />
        {loading ? (
          <Loading />
        ) : (
          <MainForm>
            <h1>Hello, How are you ?:</h1>
            <label htmlFor="artist">
              <Input
                type="text"
                id="inputText"
                placeholder="Type here.."
                value={inputText}
                onChange={this.enterText}
              />
            </label>
            <Button
              type="submit"
              disabled={buttonDisabled}
              onClick={this.handleClick}
              className="searchButton"
            >
              Send
            </Button>
          </MainForm>
        )}
        {response.length > 0 && inputText !== "" ? (
          <ListAlbums {...this.state} />
        ) : (
          <NotFound>
            <p>Nice to meet you :(</p>
          </NotFound>
        )}
      </MainSearch>
    );
  }
}

export default Search;

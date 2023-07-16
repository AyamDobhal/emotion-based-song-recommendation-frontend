import React from "react";
import { Link } from "react-router-dom";
import { MainHeader } from "../styles/components/Header";
import Loading from "./Loading";

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    this.setState({
      loading: false,
    });
  }

  render() {
    const { loading } = this.state;
    return (
      <header>
        {loading ? (
          <Loading />
        ) : (
          <MainHeader>
            <nav>
              <Link to="/search" data-testid="link-to-search">
                Home
              </Link>
            </nav>
          </MainHeader>
        )}
      </header>
    );
  }
}

export default Header;

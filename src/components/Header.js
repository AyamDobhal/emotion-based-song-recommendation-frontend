import React from "react";
import { Link } from "react-router-dom";
import { MainHeader } from "../styles/components/Header";
import Loading from "./Loading";
import digital_india from "../../src/assets/digital_india.svg";
import ashok_chakra from "../../src/assets/ashok_chakra.svg";
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: relative;
`;

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
      <HeaderContainer>
        {loading ? (
          <Loading />
        ) : (
          <MainHeader>
            <nav>
              <Link to="/search" data-testid="link-to-search" className="song">
                Song Recommendations
              </Link>
            </nav>
            <div className="flag-container">
              <img className="digital_india" src={digital_india} alt="Indian Flag" />
              
            </div>
            <div className="ashok_chakra" style={{ backgroundImage: `url(${ashok_chakra})` }}></div>
          </MainHeader>
        )}
      </HeaderContainer>
    );
  }
}

export default Header;

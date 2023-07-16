import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Loading from './Loading';
import { AiOutlineStar } from 'react-icons/ai';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import { CardMusic } from '../styles/pages/Album';

class MusicCard extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      checked: false,
    };
  }

  componentDidMount() {
    this.returnFavs();
  }

  addFav = async () => {
    const { song } = this.props;
    this.setState({ loading: true });
    await addSong(song);
    this.setState({ loading: false });
  }

  removeFav = async () => {
    const { song } = this.props;
    this.setState({ loading: true });
    await removeSong(song);
    this.setState({ loading: false });
  }

  handleFavs = ({ target }) => {
    if (target.checked) {
      this.setState({ checked: target.checked }, this.addFav);
    } else {
      this.setState({ checked: target.checked }, this.removeFav);
    }
  }

  returnFavs = async () => {
    const { song } = this.props;
    const favs = await getFavoriteSongs();
    const favsSongs = favs.some((msc) => msc.trackId === song.trackId);
    this.setState({ checked: favsSongs });
  }

  render() {
    const { song } = this.props;
    const { trackName, previewUrl } = song;
    const { loading, checked } = this.state;

    const cardVariants = {
      initial: { scale: 1 },
      hover: { scale: 1.05 },
    };

    return (
      <motion.div
        className="music-card"
        variants={cardVariants}
        initial="initial"
        whileHover="hover"
      >
        <CardMusic>
          {loading && <Loading />}
          <h4>{trackName}</h4>
          <audio src={previewUrl} controls>
            <track kind="captions" />
            Your browser doesn't support the element!
            {' '}
            <code>audio</code>
          </audio>
          <label htmlFor="favorite">
            <input
              type="checkbox"
              id="favorite"
              onChange={this.handleFavs}
              name="favorite"
              checked={checked}
            />
            <AiOutlineStar />
          </label>
        </CardMusic>
      </motion.div>
    );
  }
}

MusicCard.propTypes = {
  song: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MusicCard;

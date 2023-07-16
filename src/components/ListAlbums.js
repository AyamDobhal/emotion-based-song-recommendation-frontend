import { motion } from "framer-motion";
import PropTypes from "prop-types";
import React from "react";
import { DivAlbums, MainAlbums } from "../styles/components/ListAlbums";

class ListAlbums extends React.Component {
  render() {
    const { response, inputText } = this.props;

    const cardVariants = {
      initial: { scale: 1, boxShadow: "none", outline: "none" },
      hover: {
        scale: 1.05,
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        outline: "2px solid rgba(0, 0, 0, 0.4)",
        rotateX: 5,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      },
    };

    const imageVariants = {
      initial: { scale: 1 },
      hover: { scale: 1.1 },
    };

    return (
      <MainAlbums>
        <p className="result">Results of {inputText} </p>
        <DivAlbums className="listAlbums">
          {response.map((track, index) => (
            <motion.div
              key={index}
              className="track"
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
            >
              <motion.img
                src={track.image_url}
                alt="Album"
                className="img"
                variants={imageVariants}
                initial="initial"
                whileHover="hover"
                onClick={() => {
                  window.open(track.url, "_blank");
                }}
              />
              <h2>{track.name}</h2>
              <h3>{track.artist}</h3>
            </motion.div>
          ))}
        </DivAlbums>
      </MainAlbums>
    );
  }
}

ListAlbums.propTypes = {
  response: PropTypes.arrayOf(PropTypes.object).isRequired,
  artistInput: PropTypes.string.isRequired,
};

export default ListAlbums;

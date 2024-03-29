import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";

const Container = styled.div`
  padding: 20px;
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) => {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section
          title="현재 상영작"
          children={nowPlaying.map(movie => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        ></Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section
          title="상영 예정작"
          children={upcoming.map(movie => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        ></Section>
      )}
      {popular && popular.length > 0 && (
        <Section
          title="인기 상영작"
          children={popular.map(movie => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        ></Section>
      )}
    </Container>
  );
};

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default HomePresenter;

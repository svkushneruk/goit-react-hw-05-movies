import PropTypes from 'prop-types';
export const ReviewCard = ({ info }) => {
  return (
    <div>
      <h4>{info.author}</h4>
      <p>{info.content}</p>
    </div>
  );
};

ReviewCard.propTypes = {
  info: PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
  }),
};

import PropTypes from 'prop-types';
export const BtnGoBack = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Go back
    </button>
  );
};

BtnGoBack.propTypes = {
  onClick: PropTypes.func,
};

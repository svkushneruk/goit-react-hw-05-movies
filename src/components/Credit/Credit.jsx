import PropTypes from 'prop-types';
export const Credit = ({ info }) => {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w200/${info.profile_path}`}
        alt={info.name}
      />
      <h4>{info.name}</h4>
      <p>{info.character}</p>
    </div>
  );
};

Credit.protoTypes = {
  info: PropTypes.shape({
    profile_path: PropTypes.string,
    name: PropTypes.string,
    character: PropTypes.string,
  }),
};

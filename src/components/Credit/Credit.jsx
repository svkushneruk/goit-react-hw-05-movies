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

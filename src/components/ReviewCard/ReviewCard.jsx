export const ReviewCard = ({ info }) => {
  return (
    <div>
      <h4>{info.author}</h4>
      <p>{info.content}</p>
    </div>
  );
};

const Photo = ({ match }) => {
  return (
    <div>
      <img src={match.params.url} />
    </div>
  );
};

export default Photo;

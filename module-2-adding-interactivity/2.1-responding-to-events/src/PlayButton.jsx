const PlayButton = ({ movieName }) => {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }
  return (
    <div>
      <button onClick={handlePlayClick}>Play "{movieName}"</button>
    </div>
  );
};

export default PlayButton;

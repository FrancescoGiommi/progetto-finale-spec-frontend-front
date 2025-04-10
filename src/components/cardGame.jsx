export default function CardGame({ game }) {
  return (
    <div key={game.id} className="game-card">
      <img src={game.image} alt={game.name} />
      <h2>{game.title}</h2>
      <p>{game.category}</p>
    </div>
  );
}

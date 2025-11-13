export const CharactersInfo = ({ character, counter }) => {
  return (
    <>
      <div className="character-card" >
        <img
          src={`https://cdn.thesimpsonsapi.com/500/character/${counter}.webp`}
          alt={character.name}
          className="character-image"
        />

        <h2>{character.name}</h2>
        <p>
          <strong>{character.occupation}</strong>
        </p>
        <h3>
          <strong>edad:</strong> {character.age}
        </h3>
        <p>Frase cotidiana: {character.phrases[0]}</p>
      </div>
    </>
  );
};

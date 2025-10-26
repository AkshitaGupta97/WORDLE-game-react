import TileButton from "./TileButton"
import WordHelpers from "./utils/WordHelpers"

function Row({guess, solution, isCurrentRow}) {
  const evaluations = WordHelpers(guess, solution);

  return (
    <div className={`row ${isCurrentRow ? "current":""} `}>
      {
        Array.from({length: 5}).map((_, index) => {
          return <TileButton key={index} letter={guess[index]} status={evaluations[index]} />
        }
      )}
        
    </div>
  )
}

export default Row
import TileButton from "./TileButton"

function Row({guess, solution, isCurrentRow}) {
  return (
    <div className={`row ${isCurrentRow ? "current":""} `}>
      {
        Array.from({length: 5}).map((_, index) => {
          return <TileButton key={index} letter={guess[index]} />
        }
      )}
        
    </div>
  )
}

export default Row
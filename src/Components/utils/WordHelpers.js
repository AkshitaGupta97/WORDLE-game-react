
const WordHelpers = (guess, solution) => {
  const status = Array(5).fill('');

  guess.split('').forEach((letter, index)=> {
    if(letter === solution[index]){
        status[index] = 'correct';
    }
    else if(solution.includes(letter)){
        status[index] = 'present';
    }
    else {
        status[index] = 'absent';
    }
  })
  return status;
}

export default WordHelpers
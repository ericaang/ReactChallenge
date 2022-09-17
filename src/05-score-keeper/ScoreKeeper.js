import { useEffect, useState } from 'react'

const saveScore = (score) => {
    localStorage.setItem('Score',  score);
}

export default function ScoreKeeper () {

    const [score, setScore] = useState(Number(localStorage.getItem('Score')) || 0);

    useEffect(() => {
        saveScore(score);
    }, [score]) 

    /* useEffect(() => {
        setScore(Number(localStorage.getItem('Score')));
    }, []) */

    return (
        <div>
        <h1>Your score is: {score}</h1>
        <button onClick={() => setScore(prevScore => prevScore + 1)}>+</button>
        <button onClick={() => setScore(prevScore => prevScore - 1)}>-</button>
        </div>
    )
}
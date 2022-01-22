import React from 'react';

function Score(props) {
    return (
        <div className='score'>
            <h1>Score: {props.points}</h1>
        </div>
    );
}

export default Score;
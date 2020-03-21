import React from 'react';

const Counter = ({ count }) => {
    return (
        <div className="counter">
            <button >+</button>
            <div className="counter-text">Counter: {count}</div>
            <button >-</button>
        </div>
    )
}

export default Counter
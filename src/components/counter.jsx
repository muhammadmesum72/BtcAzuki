import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>Counter</h1>
            <div>
                <button onClick={handleDecrement}>-</button>
                <span>{count}</span>
                <button onClick={handleIncrement}>+</button>
            </div>
        </div>
    );
}

export default Counter;

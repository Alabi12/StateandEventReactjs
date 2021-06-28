import React, { useState } from 'react';

const FunctionCounter = () => {
    const [count, handleUpdate]= useState({number: 0});
    return (
        <div>
            <h1>FunctionCounter= {count.number}</h1>
            <hr/>
            <button onClick={()=> handleUpdate({number: count.number + 1})}>IncreaseCount</button>
            <button onClick={()=> handleUpdate({number: count.number - 1})}>DecreaseCount</button>
        </div>
    );
}

export default FunctionCounter;

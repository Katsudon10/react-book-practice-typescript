import { useState } from "react";

type StateBasicProps = {
    init: number
}

export default function StateBasic({init}: StateBasicProps) {
    const [count, setCount] = useState<number>(init);
    const handleClick = () => setCount(count + 1);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}
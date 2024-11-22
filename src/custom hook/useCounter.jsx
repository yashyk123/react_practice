import { useState } from "react";

const useCounter = ()=>
{
    const [count,setCount] = useState(0);

    //const [count,setCount] = useState(10);
    const ondec = ()=>
    {
        setCount(count-1);
    }

    const oninc = ()=>
        {
            setCount(count+1);
        }

        return [count,ondec,oninc];
}

export default useCounter;
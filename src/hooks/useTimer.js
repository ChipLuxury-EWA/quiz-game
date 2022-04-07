import { useState, useEffect } from "react";

const useTimer = (countTime = 10) => {
    const [seconds, setSeconds] = useState(countTime);
    const [isActive, setIsActive] = useState(true);

    const toggle = () => {
        setIsActive(!isActive);
    };

    const resetTimer = () => {
        setSeconds(countTime);
        setIsActive(true); //to loop timer this set does setState does nothing actually
    };

    const stopTimer = () => {
        setSeconds(countTime);
        setIsActive(false); //to stop timer at each count
    };

    useEffect(() => {
        let interval = null;
        if (isActive && seconds === 0) {
            resetTimer();
        } else if (isActive) {
            interval = setInterval(() => {
                setSeconds((seconds) => seconds - 1);
            }, 1000);
        } else if (!isActive && seconds !== countTime) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds, countTime]);
    return { isActive, seconds, countTime ,resetTimer};
};

export default useTimer;

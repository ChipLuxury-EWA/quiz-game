import { useState, useEffect } from "react";

const useTimer = ({ countTime }) => {
    const [seconds, setSeconds] = useState(countTime);
    const [isActive, setIsActive] = useState(false);
    const [done, setDone] = useState(false);

    const toggle = () => {
        setIsActive(!isActive);
    };

    const resetTimer = () => {
        setSeconds(countTime);
        setIsActive(false);
    };

    useEffect(() => {
        let interval = null;
        if (isActive && seconds === 0) {
            setDone(true);
            resetTimer();
        } else if (isActive) {
            setDone(false);
            interval = setInterval(() => {
                setSeconds((seconds) => seconds - 1);
            }, 1000);
        } else if (!isActive && seconds !== countTime) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds, countTime]);

    return { isActive, seconds, done, toggle };
};

useTimer.defaultProps = {
    countTime: 5,
};

export default useTimer;

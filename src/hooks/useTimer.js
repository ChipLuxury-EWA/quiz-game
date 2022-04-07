import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useTimer = () => {
    const settingsList = useSelector((state) => state.settingsList);
    const { countTime } = settingsList;

    const [seconds, setSeconds] = useState(countTime);
    const [isActive, setIsActive] = useState(true);

    // TODO: add a 'pause time' feature to the game
    const toggle = () => {
        setIsActive(!isActive);
    };

    const resetTimer = () => {
        setSeconds(countTime);
        setIsActive(true); //to loop timer this set does setState does nothing actually
    };

    // eslint-disable-next-line
    const stopTimer = () => {
        setSeconds(countTime);
        setIsActive(false); //to stop timer at each counting round
    };

    useEffect(() => {
        let interval = null;
        if (isActive && seconds === 0) {
            resetTimer(); //reset for looping stopTimer for not looping...
        } else if (isActive) {
            interval = setInterval(() => {
                setSeconds((seconds) => seconds - 1);
            }, 1000);
        } else if (!isActive && seconds !== countTime) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
        // eslint-disable-next-line
    }, [isActive, seconds, countTime]);
    return { isActive, seconds, countTime, resetTimer, toggle };
};

export default useTimer;

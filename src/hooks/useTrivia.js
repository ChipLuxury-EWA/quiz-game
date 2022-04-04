import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listQuestions } from "../Redux/actions/question.actions";
import axios from "axios";

const useTrivia = () => {
    const dispatch = useDispatch();

    const [questions, setQuestions] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const settingsList = useSelector((state) => state.settingsList);
    const { amount, category, difficulty, type } = settingsList;

    const openTriviaResponseCode = {
        1: "No Results Could not return results. The API doesn't have enough questions for your query. (Ex. Asking for 50 Questions in a Category that only has 20.)",
        2: "Invalid Parameter Contains an invalid parameter. Arguements passed in aren't valid. (Ex. Amount = Five)",
        3: "Token Not Found Session Token does not exist.",
        4: "Token Empty Session Token has returned all possible questions for the specified query. Resetting the Token is necessary.",
    };

    useEffect(() => {
        const fetchQuestions = async () => {
            const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;

            const { data } = await axios.get(url);
            if (data.response_code === 0) {
                setQuestions(data.results); // insert questions to state
                setLoading(false);
                return data.results; // return questions for dispatch
            } else {
                setError(
                    `Error fetching questions from OPEN TRIVIA code: ${data.response_code} 
                    ${openTriviaResponseCode[data.response_code]}`
                );
                setLoading(false);
            }
        };
        //sending questions to redux:
        //tried to render in questions screen but I having async problems...
        //going to return from hook.
        const ans = fetchQuestions();
        dispatch(listQuestions(ans));
        // eslint-disable-next-line
    }, []); //ignore missing dependencies because I dont wont to fetch every change...
    //returning questions from hooks
    return { questions, loading, error };
};

export default useTrivia;

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

    useEffect(() => {
        const fetchQuestions = async () => {
            const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;

            try {
                const { data } = await axios.get(url);
                setQuestions(data.results); // insert questions to state
                setLoading(false);
                return data.results; // return questions for dispatch
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        //sending questions to redux:
        //tried to render in questions screen but I having async problems...
        //going to return from hook.
        const ans = fetchQuestions();
        dispatch(listQuestions(ans));
    }, []);
    //returning questions from hooks
    return { questions, loading, error };
};

export default useTrivia;

import { useEffect } from "react";
import { fetchQuestions } from "../Services/question.service";
import { useDispatch, useSelector } from "react-redux";
import { listQuestions } from "../Redux/actions/question.actions";
import axios from "axios";

const useTrivia = () => {
    const dispatch = useDispatch();

    const settingsList = useSelector((state) => state.settingsList);
    const { amount, category, difficulty, type } = settingsList;

    useEffect(() => {
        const fetchQuestions = async () => {
            const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;
            const { data } = await axios.get(url);
            return data.results;
        };
        const ans = fetchQuestions()
        dispatch(listQuestions(ans))
        
    }, []);
    return {};
};

export default useTrivia;

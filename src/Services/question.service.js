import axios from "axios";

const fetchQuestions = async (amount, category, difficulty, type) => {
    const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;
    const { data } = await axios.get(url);
    console.log(data.results)
    return data.results;
};



export { fetchQuestions };

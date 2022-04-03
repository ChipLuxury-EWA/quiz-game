import axios from "axios";

const fetchQuestions = async () => {
    // TODO: change here the db to open tdb
    const foo =
        "https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple";
    const { data } = await axios.get(foo);
    return data;
};

export {
    fetchQuestions,
};

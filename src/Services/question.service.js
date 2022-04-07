import axios from "axios";

const fetchQuestions = async (amount, category, difficulty, type) => {
    const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;
    const { data } = await axios.get(url);
    console.log(data.results);
    return data.results;
};
//Generate random number:
const getRandomNumber = (max) => {
    return Math.floor(Math.random() * (max + 1));
};

// insert correct answer to new array at random index
const insertCorrectAnswer = (wrongAnswers, correctAnswer) => {
    if (wrongAnswers && correctAnswer) {
        const answers = [...wrongAnswers];
        answers.splice(getRandomNumber(wrongAnswers.length), 0, correctAnswer);
        return answers;
    } else {
        return [];
    }
};

export { fetchQuestions, insertCorrectAnswer };

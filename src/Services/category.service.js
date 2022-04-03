import axios from "axios";

const fetchCategories = async () => {
    // TODO: change here the db to open tdb
    const url = "https://opentdb.com/api_category.php"
    const { data } = await axios.get(url);
    return data;
};

export {
    fetchCategories,
};

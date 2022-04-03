import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { questionsListReducer } from "./reducers/question.reducer.js";
import { categoriesListReducer } from "./reducers/category.reducer.js";
import { settingsReducer } from "./reducers/settings.reducer.js";

const reducer = combineReducers({
    questionsList: questionsListReducer,
    categoriesList: categoriesListReducer,
    settingsList: settingsReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

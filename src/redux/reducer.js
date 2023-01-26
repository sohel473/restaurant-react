import DISHES from "../data/dishes";
import COMMENTS from "../data/comments";

const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  sample: "Hello world",
};

export const Reducer = (state = initialState, action) => {
  // console.log("From Reducer ", action);
  if (action.type === "ADD_COMMENT") {
    let comment = action.payload;
    comment.id = state.comments.length;
    comment.date = new Date().toDateString();
    console.log(comment);
    return {
      ...state,
      comments: state.comments.concat(comment),
    };
  }
  return state;
};

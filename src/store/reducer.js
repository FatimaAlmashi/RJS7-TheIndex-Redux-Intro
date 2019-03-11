import authors from "../data";

const initialState = {
  authors: authors
};

const reducer = (state = initialState, action) => {
  let author = action.payload;
  switch (action.type) {
    case "ADD_AUTHOR":
      return {
        ...state,
        authors: state.authors.concat(author)
      };
    case "DELETE_AUTHOR":
      const newAuthors = state.authors.filter(auth => auth.id !== author.id);
      return {
        ...state,
        authors: newAuthors
      };
    default:
      return state;
  }
};
export default reducer;

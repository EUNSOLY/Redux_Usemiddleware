enum ActionType {
  ADD_TODO = "FETCH_POSTS",
  DELETE_TODO = "DELETE_POSTS",
}
interface Post {
  userId: Number;
  id: Number;
  title: String;
}
interface Action {
  type: ActionType;
  payload: Post[];
}

const posts = (state = [], action: Action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export default posts;

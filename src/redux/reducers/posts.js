import * as type from '../type';

const initialState = [
  {
    id: 0,
    text: 'Test text',
    date: '23.12.94',
    time: '15:61',
    likes: 14,
    liked: false,
  },
];

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_POSTS:
      console.log(action.payload);
      return [action.payload, ...state];
    case type.DELETE_POST:
      return [...state.filter((post) => action.payload !== post.id)];
    case type.UPDATE_POST:
      return [
        ...state.map((post) => {
          if (post.id === action.payload.id) {
            post.text = action.payload.text;
          }
          return post;
        }),
      ];
    case type.UPDATE_LIKE:
      return [
        ...state.map((post) => {
          if (post.id === action.payload.id) {
            if (!post.liked) {
              post.likes += 1;
              post.liked = true;
            } else {
              post.likes -= 1;
              post.liked = false;
            }
          }
          return post;
        }),
      ];
    default:
      return state;
  }
};

export const requestAddPost = () => ({
  type: 'ADD_POST',
});

export const receiveAddPost = (createdPost) => ({
  type: 'RECEIVE_ADD_POST',
  wallId: createdPost.wallId,
  content: createdPost.content
});

export const addPost = (wallId, content) => {
  return dispatch => {
    dispatch(requestAddPost())
    return (
      fetch('http://localhost:4000/posts/create', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ wallId, content })
      })
        .then(response => {
          return response.json();
        })
        .then(createdPost => {
          return dispatch(receiveAddPost(createdPost));
        })
    );
  };
};

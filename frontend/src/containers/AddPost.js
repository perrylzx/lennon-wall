import React from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions/Post/addPostAction'

// TODO(PERRY): learn router to add wallName from url
let AddPost = ({ dispatch, wallId }) => {
  let input
  return (
    // form for entering content
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addPost(wallId, input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">Add content</button>
      </form>
    </div>
  )
}
export default connect()(AddPost)

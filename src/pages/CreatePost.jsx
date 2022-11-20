import React from 'react'

const CreatePost = () => {
    return (
        <div className='createPostPage'>
            <div className="cpContainer">
                <h1>Create a post</h1>
                <div className="inputGp">
                    <label>Title:</label>
                    <input placeholder='Title...' />
                </div>
                <div className="inputGp">
                    <label>Post:</label>
                    <textarea placeholder='Post..' ></textarea>

                </div>
                <button> Submit Post </button>
            </div>
        </div >
    )
}

export default CreatePost
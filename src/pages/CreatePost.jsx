import React from 'react'

const CreatePost = () => {
    return (
        <div className='createPostPage'>
            <div className="cpContainer">
                <h1>Create a post</h1>
                <div className="inputGp">
                    <label htmlFor="">Title:</label>
                    <input placeholder='Title...' />
                </div>
                <div className="inputGp"></div>
            </div>
        </div>
    )
}

export default CreatePost
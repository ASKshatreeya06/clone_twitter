import React, { useState, useRef } from 'react';
import './post.css';

const Post = ({ postModelOpen, setPostModelOpen }) => {
    const fileInputRef = useRef(null); // Create a ref for the file input element

    const closePostModel = () => {
        setPostModelOpen(false);
    };

    const handleSvgClick = () => {
        fileInputRef.current.click(); // Programmatically trigger click on the file input
    };

    return (
        <>
            <div className='postmodel' style={{ display: postModelOpen ? 'flex' : 'none' }} onClick={closePostModel}>
                {/* Your post model content goes here */}
            </div>
            <div className='postbody' style={{ display: postModelOpen ? 'flex' : 'none' }}>
                <div className='post'>
                    <div className='btn-post'><span style={{ fontWeight: 'bolder', fontSize: '25px',cursor:'pointer' }} onClick={closePostModel}>&times;</span> <span>Drafts</span></div>
                    <div className='message'>
                        <img src='https://pbs.twimg.com/profile_images/1040490041192046592/lx2fO-AC_400x400.jpg' alt='' />
                        <input type='text' placeholder='What is happening?!' />
                    </div>
                    <hr />
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-image-fill" viewBox="0 0 16 16" onClick={handleSvgClick}>
                                <path d="M4 0h8a2 2 0 0 1 2 2v8.293l-2.73-2.73a1 1 0 0 0-1.52.127l-1.889 2.644-1.769-1.062a1 1 0 0 0-1.222.15L2 12.292V2a2 2 0 0 1 2-2m4.002 5.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
                                <path d="M10.564 8.27 14 11.708V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-.293l3.578-3.577 2.56 1.536 2.426-3.395z" />
                            </svg>
                            {/* Hide the file input visually */}
                            <input type='file' ref={fileInputRef} style={{ display: 'none' }} />
                        </li>
                        <li id='btn-postBtn'><button>Post</button></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Post;

// import React from 'react';
import './Bookmark.css'
const Bookmark = (props) => {
    const bookMark = props.bookMark;
    return (
        <div className="bookMakedStyle">
            <p>{bookMark.blog_title}</p>
        </div>
    );
};

export default Bookmark;
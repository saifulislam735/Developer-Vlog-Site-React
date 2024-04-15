// import React from 'react';
import './Vlog.css'
const Vlog = (props) => {
    const { author_name, blog_title, hashtags, blog_cover_image, author_image, read_time, publish_date } = props.vlog;
    console.log(props.vlog)
    return (
        <div className='vlog'>
            <div>
                <img className="blog_cover_image" src={blog_cover_image} alt="" />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div className='vlogAuthorPart'>
                        <img className="author_image" src={author_image} alt="" />
                        <div>
                            <p className='author_name'>{author_name}</p>
                            <p className='publish_date'>{publish_date}</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center',gap:'10px' }}>
                        <p className='read_time'>{read_time}</p>
                        <button></button>
                    </div>
                </div>
                <p className='blog_title'>{blog_title}</p>
                <p className='hashtags'>{hashtags}</p>
                <p className='mark_as_read'>Mark as Read</p>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Vlog;
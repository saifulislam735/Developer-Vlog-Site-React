// import React from 'react';
import { useEffect } from 'react';
import { useState } from "react";
import Vlog from '../Vlog/Vlog';
// import Bookmark from '../Bookmark/Bookmark';
import './Vlogs.css'
import Bookmark from '../Bookmark/Bookmark';
const Vlogs = () => {
    const [vlogs, setVlogs] = useState([])
    useEffect(() => {
        fetch('vlog.json')
            .then(res => res.json())
            .then(data => setVlogs(data))
    }, [])

    const [bookMark, setBookMarked] = useState([])
    const handleBookMark = (vlog) => {
        const newMarked = bookMark.find(bk => bk.id == vlog.id)
        if (!newMarked) {
            const newBookMarked = [...bookMark, vlog];
            setBookMarked(newBookMarked)
        }
        else {
            alert('already added')
        }
    }
    const [spentTime, setSpentTime] = useState(0);
    const handleReadTime = (time) => {
        setSpentTime(spentTime + parseFloat(time));
    }
    console.log(spentTime)
    return (
        <div className='vlogs'>
            <div>
                {
                    vlogs.map(vlog => <Vlog key={vlog.id} vlog={vlog} handleReadTime={handleReadTime} handleBookMark={handleBookMark}></Vlog>)
                }
            </div>
            <div>
                <div className='left'>
                    <div className="spentTimeBookMark">
                        <p className='spentTimeStyle'>Spent time on read : {spentTime}</p>
                    </div>
                    <div className='Bookmarked_Blogs'>
                        <p className='Bookmarked_Blogs_Head'>Bookmarked Blogs : {bookMark.length}</p>
                        <div>
                            {
                                bookMark.map(b => <Bookmark key={b.id} bookMark={b} ></Bookmark>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vlogs;
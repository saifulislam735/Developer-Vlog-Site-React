// import React from 'react';
import { useEffect } from 'react';
import { useState } from "react";
import Vlog from '../Vlog/Vlog';

const Vlogs = () => {
    const [vlogs, setVlogs] = useState([])
    useEffect(() => {
        fetch('vlog.json')
            .then(res => res.json())
            .then(data => setVlogs(data))
    }, [])
    return (
        <div>
            {
                vlogs.map(vlog => <Vlog key={vlog.id} vlog={vlog}></Vlog>)
            }
        </div>
    );
};

export default Vlogs;
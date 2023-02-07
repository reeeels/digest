import React, { useState } from 'react';
import Chip from '@mui/material/Chip';

interface Props {
    label: string;
}

const Topic = ({ label }: Props) => {
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    }

    return (
        <div className=''>
            <div className='flex flex-row text-xl'>
                <Chip label={label} variant="outlined" color="info" onClick={handleClick} />
            </div>
        </div>
    )
}

export default Topic;

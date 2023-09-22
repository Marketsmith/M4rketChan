import React, { useState } from 'react';
import Heart from "react-animated-heart";
import useUserStore from '../zuStore';

export default function HeartButton(props) {
    const { zuUsername } = useUserStore();
    const [isClick, setClick] = useState(false);

    function checkLevel() {
        fetch(`http://localhost:3000/checkLevel/${zuUsername}`)
            .then(data => data.json())
            .then((data) => {
                if (data.success) {
                    setClick(!isClick);
                } else {
                    alert(`You're not a high enough level to share this feedback.`);
                }
            })
    }
    return (
        <div>
            <div className='HeartButton'>
                <Heart isClick={isClick} onClick={() => checkLevel()} />
            </div>
            {isClick && (
                <div>Added to Favorites!</div>
            )}
        </div>
    );

}
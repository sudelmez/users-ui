import React from 'react';
import './text_button.css'
export default function CustomTextButton({ name, lastname }) {

    return (
        <div className='text'>
            <div >
                <h2 >
                    {name}
                </h2>
                <h2 >
                    {lastname}
                </h2>
            </div>

        </div>


    );
}

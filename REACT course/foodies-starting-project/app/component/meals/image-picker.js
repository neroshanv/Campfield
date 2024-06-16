'use client';

import { useRef } from 'react';

import classes from './image-picker.module.css';

export default function ImagePicker({ label, name }) {
    const imageInput = useRef();

    function handlePickCLick() {
        imageInput.current.click();
    }


    return (
        <div className={classes.picker}>
            <label htmlFor="image">{label}</label>
            <div className={classes.controls}>
                <input
                    className={classes.input}
                    type="file"
                    id="image"
                    accept="image/png, image/jpeg"
                    name="image"
                    ref={imageInput}
                />
                <button className={classes.button} type="button" onClick={handlePickCLick}>Pick an Image</button>
            </div>
        </div>
    );
}
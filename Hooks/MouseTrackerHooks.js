import React, { useState } from 'react'
import cat from './cat.jpg';

function useCustomHook() {
    const [mouse, setMouse]= useState({ x: 0, y: 0 });

    function handleMouseMove(event) {
        setMouse({
            x: event.clientX,
            y: event.clientY
        });
    }

    return [mouse, handleMouseMove]
}

export function Cat() {
    const [mouse, handleMouseMove] = useCustomHook();

    return (
        <div style={{ height: '500px' }} onMouseMove={handleMouseMove}>
            <img src={cat} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
        </div>
    );
}
export function MouseTrackerHooks() {
    return (
        <div>
            <h1>Move the mouse around!</h1>
            <Cat />
            <h1>Move the mouse around!</h1>
            <Cat />
        </div>
    );
}

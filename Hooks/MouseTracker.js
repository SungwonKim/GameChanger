import React from 'react'
import cat from './cat.jpg';

export class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <img src={cat} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
        );
    }
}

export class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div style={{ height: '500px' }} onMouseMove={this.handleMouseMove}>
                {/*
                  Instead of providing a static representation of what <Mouse> renders,
                  use the `render` prop to dynamically determine what to render.
                */}
                {this.props.render(this.state)}
            </div>
        );
    }
}

export class MouseTracker extends React.Component {
    render() {
        return (
            <div>
                <h1>Move the mouse around!</h1>
                <Mouse render={mouse => (
                    <Cat mouse={mouse} />
                )}/>
            </div>
        );
    }
}
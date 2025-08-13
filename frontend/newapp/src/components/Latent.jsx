import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        console.log('Constructor: Initial count is', this.state.count);
    }

    increment = () => {
        console.log('Increment button clicked. Current count:', this.state.count);
        this.setState({
            count: this.state.count + 1
        });
    };

    componentDidMount() {
        console.log('Component mounted');
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log('Component updated. New count:', this.state.count);
        }
    }

    render() {
        console.log('Render method: count is', this.state.count);
        return (
            <div className="App">
                <h1>React Counter</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default Counter;

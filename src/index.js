import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const message = 'Hello, World!';

const el = document.getElementById('root');
el.innerText = message;
const TestComponent = props => {
    return (
        <div>
            <h1>Hello, World!</h1>
            <p>Dodalem paragraf...</p>
            <ul>
                <li>Pierwszy item</li>
                <li>Drugi item</li>
                <li>Trzeci item</li>
            </ul>
        </div>
    )
}

ReactDOM.render(<TestComponent />, el);
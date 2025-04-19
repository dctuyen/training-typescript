import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";


export default function MyApp() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div className='border border-success rounded p-4' style={{'backgroundColor': 'white'}}>
            <h1>Counters that update together</h1>
            <MyButton count={count} onClick={handleClick} className='btn btn-primary' />
            <MyButton count={count} onClick={handleClick} className='btn btn-success' />
        </div>
    );
}

function MyButton({ count, onClick, className }) {
    return (
        <button onClick={onClick} className={className + ' m-2' }>
            Clicked {count} times
        </button>
    );
}


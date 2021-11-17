import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function InputView(props) {
    
    const info = props.items[props.idItem[0]];
    
    return (
        <>
            <p><b>ID:</b> {info.id}</p>
            <p><b>Name:</b> {info.name}</p>
            <p><b>Email:</b> {info.email}</p>
            <p><b>Contact:</b> {info.contact}</p>
            <Link to="/">
                <button type="submit" className="btn border mt-2">&lt; Back</button>
            </Link>
        </>
    );
}

export default InputView;
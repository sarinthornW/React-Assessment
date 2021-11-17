import { useState } from 'react';
import { Link } from 'react-router-dom';

function InputUpdate(props) {

    //console.log(props.items)
    //console.log(props.idItem)

    const info = props.items[props.idItem];

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [contact,setContact] = useState('');

    const inputName = (event)=>{
        setName(event.target.value);
    }
    const inputEmail = (event)=>{
        setEmail(event.target.value);
    }
    const inputContact = (event)=>{
        setContact(event.target.value);
    }

    const updatedRow = (event)=>{
        event.preventDefault();
        const rowData = {
            id: info.id,
            name: name==="" ? info.name : name,
            email: email==="" ? info.email : email,
            contact: contact==="" ? info.contact : contact
        };
        props.onUpdateItem([props.idItem,rowData]);
        setName('');
        setEmail('');
        setContact('');
        document.getElementById('back').click();
    }
        
    return (
        <>
        <div className="row">
            <div className="mb-4 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <p><b>ID:</b> {info.id}</p>
                <p><b>Name:</b> {info.name}</p>
                <p><b>Email:</b> {info.email}</p>
                <p><b>Contact:</b> {info.contact}</p>
                <Link to="/">
                    <button type="submit" className="btn border mt-2">&lt; Back</button>
                </Link>
            </div>
            <form onSubmit={updatedRow} className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div className="mb-3">
                    <label for="name_update" className="fw-bold">Name</label>
                    <input type="text" value={name} onChange={inputName} className="form-control" id="name_update" placeholder="Text input" name="name_update" />
                </div>
                <div className="mb-3 mt-3">
                    <label for="email_update" className="fw-bold">Email</label>
                    <input type="email" value={email} onChange={inputEmail} className="form-control" id="email_update" placeholder="Text input" name="email_update" />
                </div>
                <div className="mb-3">
                    <label for="contact_update" className="fw-bold">Contact</label>
                    <input type="tel" value={contact} onChange={inputContact} className="form-control" id="contact_update" placeholder="Text input" name="contact_update" />
                </div>
                <button type="submit" className="btn border mt-2">Update</button>
                <Link to="/">
                    <button className="btn border mt-2" id="back" hidden>Update</button>
                </Link>
            </form>
        </div>
        </>
    );
}

export default InputUpdate;
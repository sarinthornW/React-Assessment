import { useState } from 'react';

function InputFrom(props) {

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

    const saveRow = (event)=>{
        if(name.trim()!=="" && email.trim()!=="" && contact.trim()!=="") {
            event.preventDefault();
            const rowData = {
                id: document.getElementsByTagName('tr').length,
                name,
                email,
                contact
            };
            props.onAddItem(rowData);
        } else{
            event.preventDefault();
        }
    }

    return (
        <>
            <form onSubmit={saveRow} className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div className="mb-3">
                    <label for="name_add" className="fw-bold">Name</label>
                    <input type="text" value={name} onChange={inputName} className="form-control" id="name_add" placeholder="Text input" name="name_add" />
                </div>
                <div className="mb-3 mt-3">
                    <label for="email_add" className="fw-bold">Email</label>
                    <input type="email" value={email} onChange={inputEmail} className="form-control" id="email_add" placeholder="Text input" name="email_add" />
                </div>
                <div className="mb-3">
                    <label for="contact_add" className="fw-bold">Contact</label>
                    <input type="tel" value={contact} onChange={inputContact} className="form-control" id="contact_add" placeholder="Text input" name="contact_add" />
                </div>
                <button type="submit" id="add" className="btn border mt-2">Add</button>
            </form>
        </>
    );
}

export default InputFrom;
import './table.css';
import { Link } from 'react-router-dom';


function Table(props) {

    function getId(id) {
        props.idItem(id);
    }

    const deleteRow = (event)=>{
        props.onRemove(event.target.id);
    }

    return (
        <>            
            <table className="table table-hover border mt-5">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(props.items).map((id)=>{
                        return (
                            <tr>
                                <td>{props.items[id].id}</td>
                                <td>{props.items[id].name}</td>
                                <td>{props.items[id].email}</td>
                                <td>{props.items[id].contact}</td>
                                <td>
                                    <ul className="list-group list-group-horizontal">
                                        <Link to="/view" onClick={()=>{getId(id)}}>
                                            <li className="list-group-item">View</li>
                                        </Link>
                                        <Link to="/update" onClick={()=>{getId(id)}}>
                                            <li className="list-group-item">Update</li>
                                        </Link>
                                        <li className="list-group-item" id={id} onClick={deleteRow}>Delete</li>
                                    </ul>
                                </td>
                            </tr>
                        ) 
                    })}
                </tbody>
            </table>
        </>
    );
}

export default Table;
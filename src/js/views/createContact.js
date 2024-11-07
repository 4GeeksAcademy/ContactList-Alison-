import React, { useState } from "react";

export const CreateContact = () => {
    const [newContact, setNewContact] = useState({});
    return (<>
        <div className="container">
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label fw-bold">Full name</label>
                <input onChange={(evento) => setNewContact({...newContact, name:evento.target.value})} value={newContact.name|| ''} type="text" className="form-control" placeholder="Full name" />
                <div className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label fw-bold">Email</label>
                <input onChange={(evento) => setNewContact({...newContact, email:evento.target.value})} value={newContact.email|| ''} type="email" className="form-control" placeholder="Email" />
                <div className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label fw-bold">Enter phone</label>
                <input onChange={(evento) => setNewContact({...newContact, phone:evento.target.value})} value={newContact.phone|| ''} type="phone" className="form-control" placeholder="Enter phone" />
                <div className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label fw-bold">Enter address</label>
                <input onChange={(evento) => setNewContact({...newContact, address:evento.target.value})} value={newContact.address|| ''} type="text" className="form-control" placeholder="Enter address"/>
                <div className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <button onClick={ () => {console.log()}} type="submit" className="btn btn-primary">Submit</button>
        </div>
    </>
    );
}
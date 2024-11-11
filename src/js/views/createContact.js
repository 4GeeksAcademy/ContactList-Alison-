import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const CreateContact = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    const [newContact, setNewContact] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    return (
        <div className="container">
            <h2>Agregar un nuevo contacto</h2>
            <div className="mb-3">
                <label className="form-label">Nombre Completo</label>
                <input
                    onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                    value={newContact.name}
                    type="text"
                    className="form-control"
                    placeholder="Ingresa el nombre completo"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Correo Electrónico</label>
                <input
                    onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
                    value={newContact.email}
                    type="email"
                    className="form-control"
                    placeholder="Ingresa el correo electrónico"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Teléfono</label>
                <input
                    onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
                    value={newContact.phone}
                    type="text"
                    className="form-control"
                    placeholder="Ingresa el teléfono"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Dirección</label>
                <input
                    onChange={(e) => setNewContact({ ...newContact, address: e.target.value })}
                    value={newContact.address}
                    type="text"
                    className="form-control"
                    placeholder="Ingresa la dirección"
                />
            </div>
            <button
                onClick={async () => {
                    await actions.createContact(newContact);
                    navigate("/");
                }}
                className="btn btn-primary"
            >
                Guardar Contacto
            </button>
            <Link to="/" className="btn btn-secondary ms-2">Volver a Contactos</Link>
        </div>
    );
};

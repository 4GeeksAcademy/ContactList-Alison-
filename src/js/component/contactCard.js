import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const ContactCard = ({ id, name, email, phone, address }) => {
    const { actions } = useContext(Context);

    const handleEdit = () => {
        const updatedInfo = {
            name: prompt("Nuevo nombre:", name),
            email: prompt("Nuevo email:", email),
            phone: prompt("Nuevo teléfono:", phone),
            address: prompt("Nueva dirección:", address)
        };
        actions.editContact(id, updatedInfo);
    };

    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    {/* Usar el id para la imagen fija */}
                    <img
                        src={`https://i.pravatar.cc/200?u=${id}`}
                        className="img-fluid rounded-circle"
                        alt={name}
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Dirección: {address}</p>
                        <p className="card-text">Teléfono: {phone}</p>
                        <p className="card-text">Correo Electrónico: {email}</p>
                        <button className="btn btn-primary me-2" onClick={handleEdit}>Editar</button>
                        <button className="btn btn-danger" onClick={() => actions.deleteContact(id)}>Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

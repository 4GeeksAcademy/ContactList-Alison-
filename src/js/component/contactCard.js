import React from "react";

export const ContactCard = ({ name, email, phone, address }) => {
    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src={"https://i.pravatar.cc/200?u=" + name}
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
                        <button className="btn btn-primary me-2">Editar</button>
                        <button className="btn btn-danger">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

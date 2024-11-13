import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "bootstrap/dist/css/bootstrap.min.css";


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
        <div className="card mb-3" style={{ maxWidth: "100%", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <div className="row g-0">
                <div className="col-md-2 d-flex align-items-center justify-content-center">
                    <img
                        src={`https://i.pravatar.cc/200?u=${id}`}
                        className="img-fluid rounded-circle"
                        alt={name}
                        style={{ width: "100px", height: "100px" }}
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title mb-1">{name}</h5>
                        <p className="card-text text-muted mb-1">
                            <i className="fas fa-map-marker-alt"></i> {address}
                        </p>
                        <p className="card-text text-muted mb-1">
                            <i className="fas fa-phone"></i> {phone}
                        </p>
                        <p className="card-text text-muted">
                            <i className="fas fa-envelope"></i> {email}
                        </p>
                    </div>
                </div>
                <div className="col-md-2 d-flex align-items-center justify-content-center">
                    <button className="btn btn-light me-2" onClick={handleEdit}>
                        <i className="fas fa-pencil-alt"></i>
                    </button>
                    <button className="btn btn-light" onClick={() => actions.deleteContact(id)}>
                        <i className="fas fa-trash-alt text-danger"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

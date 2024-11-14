import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "bootstrap/dist/css/bootstrap.min.css";

export const ContactCard = ({ id, name, email, phone, address }) => {
    const { actions } = useContext(Context);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ name, email, phone, address });

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        actions.editContact(id, formData);
        setIsEditing(false); // Oculta el formulario tras guardar
    };

    const handleCancel = () => {
        setIsEditing(false); // Cancela la edición y oculta el formulario
        setFormData({ name, email, phone, address }); // Restaura los valores originales
    };

    return (
        <div className="card mb-3" style={{ maxWidth: "100%", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
            {isEditing ? (
                <div className="card-body">
                    <h5 className="card-title mb-3">Editar Contacto</h5> {/* Título del formulario */}
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-control mb-2"
                        placeholder="Nombre"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-control mb-2"
                        placeholder="Email"
                    />
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-control mb-2"
                        placeholder="Teléfono"
                    />
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="form-control mb-2"
                        placeholder="Dirección"
                    />
                    <button className="btn btn-success me-2" onClick={handleSave}>Guardar</button>
                    <button className="btn btn-secondary" onClick={handleCancel}>Cancelar</button>
                </div>
            ) : (
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
                        <button className="btn btn-light me-2" onClick={handleEditClick}>
                            <i className="fas fa-pencil-alt"></i>
                        </button>
                        <button className="btn btn-light" onClick={() => actions.deleteContact(id)}>
                            <i className="fas fa-trash-alt text-danger"></i>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/contactCard";



export const Home = () => {
    const { actions, store } = useContext(Context);

    useEffect(() => {
        actions.getContacts();
    }, []);

    return (
        <div className="container mt-5">
            <h1>Lista de Contactos</h1>
            {store.contacts.length > 0 ? (
                store.contacts.map((item, index) => (
                    <ContactCard key={index} {...item} />
                ))
            ) : (
                <p>No hay contactos disponibles</p>
            )}

			
        </div>
    );
};

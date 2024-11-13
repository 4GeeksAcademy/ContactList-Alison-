const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [],
            demo: [
                { title: "FIRST", background: "white", initial: "white" },
                { title: "SECOND", background: "white", initial: "white" }
            ]
        },
        actions: {
        getContacts: async () => {
                try {
                    const resp = await fetch(`${process.env.BACKEND_URL}agendas/alison`);
                    if (resp.ok) {
                        const data = await resp.json();
                        console.log("Data fetched from getContacts:", data); // Verifica la data recibida
                        

                        // Compara los contactos para evitar duplicados
                        const mergedContacts = [
                            ...existingContacts,
                            ...newContacts.filter(contact => 
                                !existingContacts.some(existing => existing.id === contact.id)
                            )
                        ];

                        setStore({ contacts: mergedContacts });
                    } else {
                        console.error("Error al obtener contactos", resp.status);
                    }
                } catch (error) {
                    console.error("Error en getContacts:", error);
                }
            },

            createContact: async (newContact) => {
                try {
                    const response = await fetch("https://playground.4geeks.com/contact/agendas/alison/contacts", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(newContact)
                    });

                    if (!response.ok) throw new Error("Error al crear el contacto");

                    const data = await response.json();
                    setStore({ contacts: [...getStore().contacts, data] });
                    localStorage.setItem("contacts", JSON.stringify([...getStore().contacts, data]));

                    console.log("Contacto creado:", data);
                } catch (error) {
                    console.error("Error al crear el contacto:", error);
                }
            },

            deleteContact: async (id) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/alison/contacts/${id}`, {
                        method: "DELETE"
                    });

                    if (!response.ok) throw new Error("Error al eliminar el contacto");

                    const updatedContacts = getStore().contacts.filter(contact => contact.id !== id);
                    setStore({ contacts: updatedContacts });
                    localStorage.setItem("contacts", JSON.stringify(updatedContacts));

                    console.log("Contacto eliminado");
                } catch (error) {
                    console.error("Error al eliminar el contacto:", error);
                }
            },

            editContact: async (id, updatedInfo) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/alison/contacts/${id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(updatedInfo)
                    });

                    if (!response.ok) throw new Error("Error al editar el contacto");

                    const data = await response.json();
                    const updatedContacts = getStore().contacts.map(contact =>
                        contact.id === id ? data : contact
                    );
                    setStore({ contacts: updatedContacts });
                    localStorage.setItem("contacts", JSON.stringify(updatedContacts));

                    console.log("Contacto editado:", data);
                } catch (error) {
                    console.error("Error al editar el contacto:", error);
                }
            }
        }
    };
};

export default getState;

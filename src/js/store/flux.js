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
						setStore({ contacts: data.contacts }); // Usa `data.contacts` en lugar de `data`
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

        // Añadir el nuevo contacto a la lista si fue creado correctamente
        setStore({ contacts: [...getStore().contacts, data] });

        console.log("Contacto creado:", data);  // Para depuración
    } catch (error) {
        console.error("Error al crear el contacto:", error);
    }
},

            // ... otras acciones
        }
    };
};

export default getState;
